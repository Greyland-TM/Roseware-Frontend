import { createBrowserRouter } from "react-router-dom";
import App from '../App';

// Routes
import LoginRoute from './pages/LoginRoute';
import HomeRoute from './pages/HomeRoute';
import RegisterRoute from './pages/RegisterRoute.jsx';
import DashboardRoute from './pages/DashboardRoute.jsx';
import ServicesRoute from './pages/ServicesRoute.jsx';
import AboutRoute from './pages/AboutRoute.jsx';
import ContactRoute from './pages/ContactRoute.jsx';
import JournalRoute from './pages/JournalRoute.jsx';

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