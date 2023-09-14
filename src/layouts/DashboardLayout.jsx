// PageLayout.jsx
import React, { useEffect, useState } from 'react';
import DashboardNav from '../components/page-components/dashboard/DashboardNav';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  updateHasSyncedPipedrive,
  updateHasSyncedStripe,
  updateIsPipedriveSyncing,
  // updateHasSyncedStripe,
  // updateHasSyncedPipedrive,
  updateIsStripeSyncing,
} from '../redux/slices/sessionSlice';

export function DashboardLayout({ children }) {
  const { userToken, user } = useSelector((state) => state.session);
  const { isLoggedIn, validationCheckComplete } = useSelector(
    (state) => state.session,
  );
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const pipedriveOuthCode = queryParams.get('code');
  // const stripePaymentSuccesss = queryParams.get('success');
  const stripeConnectionSuccess = queryParams.get('connected');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // If the user is not logged in the redirect to the register page. Keep the oauth code in the url if it exists
  useEffect(() => {
    if (validationCheckComplete && !isLoggedIn) {
      navigate(
        `/login${pipedriveOuthCode ? `?code=${pipedriveOuthCode}` : ''}`,
      );
    }
  }, [isLoggedIn, validationCheckComplete]);

  // After a user connects their pipedrive account to roseware, setup the oauth flow
  useEffect(() => {
    const pipedriveOauthSetup = async () => {
      if (isLoggedIn && pipedriveOuthCode && userToken) {
        dispatch(updateIsPipedriveSyncing(true));
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/pipedrive/oauth/`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Token ${userToken}`,
            },
            body: JSON.stringify({ code: pipedriveOuthCode }),
          },
        );
        const data = await response.json();
        console.log('pipedrive data: ', data)
        if (data.ok) {
          dispatch(updateHasSyncedPipedrive(data.customer.has_synced_pipedrive));
        }
        dispatch(updateIsPipedriveSyncing(false));
      }
    };
    pipedriveOauthSetup();
    ('');
  }, [pipedriveOuthCode, isLoggedIn]);

  // After a user completes a stripe payment, update the user state to reflect that
  // useEffect(() => {
  //   dispatch(updateSyncedStripe(stripePaymentSuccesss));
  // }, [stripePaymentSuccesss, isLoggedIn]);

  // After a user connects their stripe account to roseware, update the user state to reflect that
  useEffect(() => {
    const checkConnectionStatus = async () => {
      dispatch(updateIsStripeSyncing(true));
      console.log('user: ', user);
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/stripe/connect-link/?pk=${
          user.id
        }`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${userToken}`,
          },
        },
      );
      const data = await response.json();
      console.log('data: ', data);
      if (data.ok) {
        dispatch(updateHasSyncedStripe(true));
      }
    };
    if (isLoggedIn && stripeConnectionSuccess && userToken) {
      checkConnectionStatus();
    }
    dispatch(updateIsStripeSyncing(false));
  }, [stripeConnectionSuccess, isLoggedIn, user, dispatch, userToken]);

  // Default loading state
  if (!isLoggedIn) {
    return <></>;
  }

  return (
    <div className="flex h-custom">
      <div className="hidden md:block flex-shrink-0">
        <DashboardNav />
      </div>
      <div className="flex flex-col flex-grow items-center overflow-y-auto w-full">
        {children}
      </div>
    </div>
  );
}
