import './index.css';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import LoginForm from './auth/LoginForm';
import Breadcrumb from './components/navbar/Breadcrumb';
import Footer from './components/Footer';

export default function App(props) {
  const [showAuthPortal, setShowAuthPortal] = useState(false);
  const location = useLocation();
  const currentPage = location.pathname;

  const toggleAuthPortal = () => {
    setShowAuthPortal(!showAuthPortal);
  };

  const handleOverlayClick = () => {
    toggleAuthPortal();
  };

  return (
    <>
      <div className='min-h-full'>
        <Navbar showAuthPortal={toggleAuthPortal} />
        <header className='bg-white shadow-sm'>
          <Breadcrumb currentPage={currentPage} />
        </header>
        <main>
          <div className='mx-auto max-w-7xl py-6 sm:px-6 lg:px-8'>
            {showAuthPortal &&
              createPortal(
                <LoginForm overlayClicked={handleOverlayClick} />,
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
