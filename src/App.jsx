import './index.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import LoginForm from './auth/login_form/loginForm';

export default function App() {
  const [showAuthPortal, setShowAuthPortal] = useState(false);

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
          <div className='mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8'>
            <h1 className='text-lg font-semibold leading-6 text-gray-900'>
              Dashboard
            </h1>
          </div>
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
    </>
  );
}
