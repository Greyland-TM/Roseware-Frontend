// PageLayout.jsx
import React, { useEffect } from 'react';
import DashboardNav from '../components/page-components/dashboard/DashboardNav';
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateSyncedPipedrive, updateSyncedStripe } from '../redux/slices/sessionSlice'

export function DashboardLayout({ children }) {
  const {userToken} = useSelector((state) => state.session);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {isLoggedIn, validationCheckComplete, hasSyncedPipedrive, hasSyncedStripe} = useSelector(
    (state) => state.session
  );
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const pipedriveOuthCode = queryParams.get("code");

  // If the user is not logged in the redirect to the register page. Keep the oauth code in the url if it exists
  useEffect(() => {
    if (validationCheckComplete && !isLoggedIn) {
      navigate(
        `/login${pipedriveOuthCode ? `?code=${pipedriveOuthCode}` : ""}`
      );
    }
  }, [isLoggedIn, validationCheckComplete]);

  useEffect(() => {
    const pipedriveOauthSetup = async () => {
      if (isLoggedIn && pipedriveOuthCode && userToken) {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/pipedrive/oauth/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${userToken}`,
            },
            body: JSON.stringify({code: pipedriveOuthCode}),
          }
        );
        const data = await response.json();
        dispatch(updateSyncedPipedrive(data.has_synced_pipedrive));
        dispatch(updateSyncedStripe(data.has_synced_stripe));
      }
    };
    pipedriveOauthSetup();
  }, [pipedriveOuthCode, isLoggedIn]);

  if (!isLoggedIn) {
    return <></>;
  }

  return (
    <div className='flex h-custom'>
      <DashboardNav />
      <div className='flex flex-col flex-grow justify-around items-center overflow-scroll'>
        {children}
      </div>
    </div>
  );
}
