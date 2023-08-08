import { createBrowserRouter } from "react-router-dom";
import App from '../App';

// Routes
import LoginRoute from './pages/LoginRoute';
import HomeRoute from './pages/HomeRoute';
import RegisterRoute from './pages/RegisterRoute.jsx';
import ServicesRoute from './pages/ServicesRoute.jsx';
import AboutRoute from './pages/AboutRoute.jsx';
import ContactRoute from './pages/ContactRoute.jsx';
import ArticlesRoute from './pages/ArticlesRoute.jsx';
import Dashboard from './pages/dashboard-subnav/Dashboard.jsx';
import Integrations from './pages/dashboard-subnav/Integrations';
import Account from './pages/dashboard-subnav/Account';
import Websites from './pages/dashboard-subnav/Websites';
import Plans from './pages/dashboard-subnav/Plans';
import TermsRoute from './pages/TermsRoute.jsx';

export const router = createBrowserRouter([
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
                element: <Dashboard />,
            },
            {
                path: "dashboard/websites",
                element: <Websites />,
            },
            {
                path: "dashboard/settings",
                element: <Account />,
            },
            {
                path: "dashboard/plans",
                element: <Plans />,
            },
            {
                path: "dashboard/integrations",
                element: <Integrations />,
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
                path: "articles",
                element: <ArticlesRoute />,
            },
            {
                path: "terms",
                element: <TermsRoute />,
            },
        ],
    },
]);