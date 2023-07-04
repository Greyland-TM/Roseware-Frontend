import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App.jsx';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import AuthContextProvider from "./context/auth-context";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";


// Redux
import { Provider } from 'react-redux'
import store from './redux/store'

// Routes
import LoginRoute from './routes/LoginRoute';
import HomeRoute from './routes/HomeRoute';
import RegisterRoute from './routes/RegisterRoute.jsx';
import DashboardRoute from './routes/DashboardRoute.jsx';
import ServicesRoute from './routes/ServicesRoute.jsx';
import AboutRoute from './routes/AboutRoute.jsx';
import ContactRoute from './routes/ContactRoute.jsx';
import JournalRoute from './routes/JournalRoute.jsx';

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
            {
                path: "dashboard",
                element: <DashboardRoute />,
            },
            {
                path: "services",
                element: <ServicesRoute />,
            },
            {
                path: "about",
                element: <AboutRoute />,
            },
            {
                path: "contact",
                element: <ContactRoute />,
            },
            {
                path: "journal",
                element: <JournalRoute />,
            },
        ],
    },
]);

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
    <AuthContextProvider>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </AuthContextProvider>
);