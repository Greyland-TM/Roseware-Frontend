// PageLayout.jsx
import React, { useEffect } from 'react';
import DashboardNav from '../components/page-components/dashboard/DashboardNav';
import {useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";

export function DashboardLayout({ children }) {
  const {userToken} = useSelector((state) => state.session);
  const navigate = useNavigate();
  const {isLoggedIn, validationCheckComplete} = useSelector(
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
        console.log("data: ", data);
      }
    };
    pipedriveOauthSetup();
  }, [pipedriveOuthCode, isLoggedIn]);

  if (!isLoggedIn) {
    return <></>;
  }

  return (
    <div className='flex h-full'>
      <DashboardNav />
      <div className='flex flex-grow justify-around items-center'>
        {children}
      </div>
    </div>
  );
}
