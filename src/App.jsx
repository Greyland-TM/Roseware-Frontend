// App.jsx
import "./index.css";
import Navbar from "./components/UI/navbar/Navbar";
import {MainLayout} from "./layouts/MainLayout";
import {PageLayout} from "./layouts/PageLayout";
import Footer from "./components/UI/Footer";
import {Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import {createPortal} from "react-dom";
import LoginForm from "./components/auth/LoginForm";
import {validateToken, validationComplete} from './redux/slices/sessionSlice';
import {useDispatch} from 'react-redux';

export default function App() {
  // const { validationCheckComplete } = useSelector((state) => state.session);
  const [showAuthPortal, setShowAuthPortal] = useState(false);
  const dispatch = useDispatch();

  const toggleAuthPortal = () => {
    setShowAuthPortal(!showAuthPortal);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("rosewareAuthToken");
    if (storedToken) {
      dispatch(validateToken(storedToken));
    } else {
      // change the validationCheckComplete to true in the redux store
      dispatch(validationComplete());
    };

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
