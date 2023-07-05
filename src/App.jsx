import './index.css';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import LoginForm from './auth/LoginForm';
import Footer from './components/Footer';
import { validateToken } from './utils/auth';

export default function App() {
  const [showAuthPortal, setShowAuthPortal] = useState(false);
  const location = useLocation();
  const currentPage = location.pathname;

  const toggleAuthPortal = () => {
    setShowAuthPortal(!showAuthPortal);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('Auth_Token')
    console.log(storedToken);
  }, [])

  return ( 
    <>
      <div className='min-h-full'>
        <Navbar showAuthPortal={toggleAuthPortal} />
        <main>
          <div className='mx-auto max-w-7xl py-6 sm:px-6 lg:px-8'>
            {showAuthPortal &&
              createPortal(
                <LoginForm overlayClicked={toggleAuthPortal} />,
                document.getElementById('portal')
              )}
            <Outlet />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
