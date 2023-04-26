import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App.jsx';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import LoginRoute from './routes/LoginRoute';
import HomeRoute from './routes/HomeRoute';
import RegisterRoute from './routes/RegisterRoute.jsx';
import AuthContextProvider from "./context/auth-context";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "login",
                element: <LoginRoute />,
            },
            {
                path: "",
                element: <HomeRoute />,
            },
            {
                path: "register",
                element: <RegisterRoute />,
            },
        ],
    },
]);

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
    <React.StrictMode>
        <AuthContextProvider>
            <RouterProvider router={router} />
        </AuthContextProvider>
    </React.StrictMode>
);