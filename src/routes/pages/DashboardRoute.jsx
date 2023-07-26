// import {useEffect} from "react";
// import {useSelector} from "react-redux";
// import {useNavigate} from "react-router-dom";
// // import DashboardHeader from "../../components/page-components/dashboard/DashboardHeader";
// // import PlatformLinkedCard from "../../components/page-components/dashboard/PlatformLinkedCard";
// import Dashboard from "../../components/page-components/dashboard/Dashboard";
// // import { Dashboard } from
// import {useLocation} from "react-router-dom";
// // import {useReducer} from "react";
// // import {createBrowserRouter, RouterProvider} from "react-router-dom";
// // import {dashboardRoutes} from "../dashboardRoutes";

export default function DashboardRoute() {
//   const {userToken} = useSelector((state) => state.session);
//   const navigate = useNavigate();
//   const {isLoggedIn, validationCheckComplete} = useSelector(
//     (state) => state.session
//   );
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const pipedriveOuthCode = queryParams.get("code");

//   // If the user is not logged in the redirect to the register page. Keep the oauth code in the url if it exists
//   useEffect(() => {
//     console.log("code: ", pipedriveOuthCode, validationCheckComplete);
//     if (validationCheckComplete && !isLoggedIn) {
//       navigate(
//         `/login${pipedriveOuthCode ? `?code=${pipedriveOuthCode}` : ""}`
//       );
//     }
//   }, [isLoggedIn, validationCheckComplete]);

//   useEffect(() => {
//     const pipedriveOauthSetup = async () => {
//       if (isLoggedIn && pipedriveOuthCode && userToken) {
//         const response = await fetch(
//           `${import.meta.env.VITE_BACKEND_URL}/pipedrive/oauth/`,
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Token ${userToken}`,
//             },
//             body: JSON.stringify({code: pipedriveOuthCode}),
//           }
//         );
//         const data = await response.json();
//         console.log("data: ", data);
//       }
//     };
//     pipedriveOauthSetup();
//   }, [pipedriveOuthCode, isLoggedIn]);

  if (!isLoggedIn) {
    return <></>;
  }

  return (
    <div>
      <Dashboard />
      {/* <RouterProvider router={dashboardRoutes} /> */}
      {/* <div className="">{children}</div> */}
    </div>
  );
}
