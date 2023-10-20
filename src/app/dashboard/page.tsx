// PageLayout.jsx
"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { useSearchParams } from "next/navigation";
import AccountForm from "./AccountForm";
import DashboardNav from "./DashboardNav";

export default function dashboard() {
  const ctx = useContext(AuthContext);
  // TODO - These need to either be passed through a prop chain or stored in app wide state eventually
  const [isPipedriveSyncing, setIsStripeSyncing] = useState(false);
  const [isStripeSyncing, setIsPipedriveSyncing] = useState(false);
  const queryParams = useSearchParams();
  const pipedriveOuthCode = queryParams.get("code");
  const stripeConnectionSuccess = queryParams.get("connected");
  const navigate = useRouter();
  const user = ctx.user;
  const userToken = ctx.token;
  const isLoggedIn = ctx.isLoggedIn;

  // NOTE
  // There was at one point a validationCheckComplete variable used in here some how.
  // We got rid of it while switching to next.js and updating the application.

  // If the user is not logged in the redirect to the register page. Keep the oauth code in the url if it exists
  // useEffect(() => {
  //   console.log()
  //   if (!isLoggedIn) {
  //     navigate.push(
  //       `/login${pipedriveOuthCode ? `?code=${pipedriveOuthCode}` : ""}`
  //     );
  //   }
  // }, [isLoggedIn]);

  // After a user connects their pipedrive account to roseware, setup the oauth flow
  // useEffect(() => {
  //   const pipedriveOauthSetup = async () => {
  //     if (isLoggedIn && pipedriveOuthCode && userToken) {
  //       setIsPipedriveSyncing(true);
  //       const response = await fetch(
  //         `${process.env.BACKEND_URL}/pipedrive/oauth/`,
  //         {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //             Authorization: `Token ${userToken}`,
  //           },
  //           body: JSON.stringify({ code: pipedriveOuthCode }),
  //         }
  //       );
  //       const data = await response.json();
  //       console.log("pipedrive data: ", data);
  //       if (data.ok) {
  //         setIsPipedriveSyncing(false);
  //       }
  //       setIsPipedriveSyncing(false);
  //     }
  //   };
  //   pipedriveOauthSetup();
  //   ("");
  // }, [pipedriveOuthCode, isLoggedIn]);

  // After a user completes a stripe payment, update the user state to reflect that
  // useEffect(() => {
  //   dispatch(updateSyncedStripe(stripePaymentSuccesss));
  // }, [stripePaymentSuccesss, isLoggedIn]);

  // After a user connects their stripe account to roseware, update the user state to reflect that
  // useEffect(() => {
  //   const checkConnectionStatus = async () => {
  //     setIsStripeSyncing(true);
  //     const response = await fetch(
  //       `${process.env.BACKEND_URL}/stripe/connect-link/?pk=${user?.id}`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Token ${userToken}`,
  //         },
  //       }
  //     );
  //     const data = await response.json();
  //     console.log("data: ", data);
  //     if (data.ok) {
  //       setIsStripeSyncing(false);
  //     }
  //   };
  //   if (isLoggedIn && stripeConnectionSuccess && userToken) {
  //     checkConnectionStatus();
  //   }
  //   setIsStripeSyncing(false);
  // }, [stripeConnectionSuccess, isLoggedIn, user, userToken]);

  // // Default loading state
  // if (!isLoggedIn) {
  //   return <></>;
  // }

  return (
    <div className="flex h-custom bg-gray-100">
      <div className="hidden md:block flex-shrink-0 w-64 bg-white">
      <DashboardNav />
      </div>
      <div className="flex flex-col flex-grow items-center overflow-y-auto w-full">
        <div className='flex flex-wrap justify-around w-xl gap-18 mb-20 lg:mb-5'>
          <AccountForm />
        </div>
      </div>
    </div>
  );
}
