// App.jsx
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import {MainLayout} from "./layouts/MainLayout";
import {PageLayout} from "./layouts/PageLayout";
import Footer from "./components/Footer";
import {Outlet, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {createPortal} from "react-dom";
import LoginForm from "./components/auth/LoginForm";
import {validateToken} from './redux/slices/sessionSlice';
import {useDispatch} from 'react-redux';

export default function App() {
  const [showAuthPortal, setShowAuthPortal] = useState(false);
  const dispatch = useDispatch();

  const toggleAuthPortal = () => {
    setShowAuthPortal(!showAuthPortal);
  };

  useEffect(() => {
    console.log('Checking for token...');
    const storedToken = localStorage.getItem("rosewareAuthToken");
    console.log('Stored token: ', storedToken);
    if (storedToken) {
      try {
        dispatch(validateToken(storedToken))
        .then((result) => {
          console.log('Got a result: ', result);
        })
        .catch((error) => {
          console.log('Got an error: ', error);
        });
      } catch (errr) {
        console.log('Got an error 2: ', errr);
      }
    }
  }, []);

  return (
    <PageLayout>
      <Navbar showAuthPortal={toggleAuthPortal} />
      <MainLayout>
        {showAuthPortal &&
          createPortal(
            <LoginForm overlayClicked={toggleAuthPortal} />,
            document.getElementById("portal")
          )}
        <Outlet />
      </MainLayout>
      <Footer />
    </PageLayout>
  );
}
