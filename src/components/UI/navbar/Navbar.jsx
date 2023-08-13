import React, { Fragment, useState, useEffect } from 'react';
import { handleLogout } from '../../../redux/slices/sessionSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Button';
import defaultProfilePicture from "../../../images/general/default_profile_picture.jpg";
import logo from '../../../images/logos/roseware-logo-3.png';

const userNavigation = [{ name: 'Your Profile', to: '/dashboard/' }];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = ({ showAuthPortal }) => {
  const { isLoggedIn, user } = useSelector((state) => state.session);
  const [currentPage, setCurrentPage] = useState('');
  const [navImage, setNavImage] = useState(defaultProfilePicture);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
  }, [isLoggedIn]);

  useEffect(() => {
    setNavImage(user.profile_picture);
  }, [user])

  const navigation = [
    {
      name: 'Services',
      to: '/services',
      current: currentPage.toLowerCase() === 'services'
    },
    {
      name: 'Articles',
      to: '/articles',
      current: currentPage.toLowerCase() === 'articles',
    },
    {
      name: 'About',
      to: '/about',
      current: currentPage.toLowerCase() === 'about',
    },
    {
      name: 'Contact',
      to: '/contact',
      current: currentPage.toLowerCase() === 'contact',
    },
  ];

  useEffect(() => {
    const currentPath = location.pathname.slice(1);
    setCurrentPage(currentPath);
  }, [location.pathname]);


  const handleSignInPortal = () => {
    showAuthPortal(true);
  };

  const logoutUser = () => {
    dispatch(handleLogout());
    navigate('');
  };

  return (
    <Disclosure as='nav' className='bg-gray-800'>
      {({ open }) => (
        <>
          <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='flex h-16 items-center justify-between'>
              <div className='flex items-center justify-center'>
                {/* <div className='flex-shrink-0'> */}
                <Link className='font-bold text-blue-500 text-4xl' to='/'>
                  <div className={`flex items-center justify-center p-1 rounded-full bg-gray-300 h-12 w-12`}>
                    <img
                      className="inline-block rounded-full h-full w-full"
                      src={logo}
                      alt="smthn"
                    />
                    {/* TEST */}
                  </div>
                </Link>
                {/* </div> */}
                <div className='hidden md:block'>
                  <div className='ml-10 flex items-baseline space-x-4'>
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        onClick={() => setCurrentPage(item.name)}
                        className={classNames(
                          item.current
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 font-bold hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-bold'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className='hidden md:block'>
                <div className='ml-4 flex items-center md:ml-6'>
                  {/* {isLoggedIn && (
                    <button
                      type='button'
                      className='rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                    >
                      <span className='sr-only'>View notifications</span>
                      <BellIcon className='h-6 w-6' aria-hidden='true' />
                    </button>
                  )} */}

                  {/* Profile dropdown */}
                  {isLoggedIn ? (
                    <Menu as='div' className='relative ml-3'>
                      <div>
                        <Menu.Button
                          className='flex max-w-xs items-center rounded-full bg-gray-800 text-sm
                           text-white focus:outline-none focus:ring-2 
                           focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                        >
                          <span className='sr-only'>Open user menu</span>
                          <img
                            className='h-8 w-8 rounded-full'
                            src={ navImage }
                            alt=''
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter='transition ease-out duration-100'
                        enterFrom='transform opacity-0 scale-95'
                        enterTo='transform opacity-100 scale-100'
                        leave='transition ease-in duration-75'
                        leaveFrom='transform opacity-100 scale-100'
                        leaveTo='transform opacity-0 scale-95'
                      >
                        <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <Link
                                  to={item.to}
                                  onClick={() => setCurrentPage(item.name)}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  {item.name}
                                </Link>
                              )}
                            </Menu.Item>
                          ))}
                          <Menu.Item key='signoutbutton'>
                            <div className='flex justify-center p-2'>
                              <Button onClick={logoutUser}>Sign Out</Button>
                            </div>
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  ) : (
                    <Button
                      className='mx-5'
                      onClick={handleSignInPortal}
                      size='large'
                    >
                      Sign In
                    </Button>
                  )}
                </div>
              </div>
              <div className='-mr-2 flex  md:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='md:hidden'>
            <div className='space-y-1 px-2 pb-3 pt-2 sm:px-3'>
            {navigation.map((item) => (
              <Link 
                key={item.name}
                to={item.to}
                onClick={() => setCurrentPage(item.name)} 
              >
                <Disclosure.Button
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              </Link>
            ))}
            </div>
            {isLoggedIn ? (
              <div className='border-t border-gray-700 pb-3 pt-4'>
                <div className='flex items-center px-5'>
                  <div className='flex-shrink-0'>
                    <img
                      className='h-10 w-10 rounded-full'
                      src={navImage}
                      alt=''
                    />
                  </div>
                  <div className='ml-3'>
                    <div className='text-base font-medium text-white'>
                      {user.email}
                    </div>
                  </div>
                  <button
                    type='button'
                    className='ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                  >
                    <span className='sr-only'>View notifications</span>
                    <BellIcon className='h-6 w-6' aria-hidden='true' />
                  </button>
                </div>
                <div className='mt-3 space-y-1 px-2'>
                  {userNavigation.map((item) => (
                    <Link 
                      key={item.name}
                      to={item.to}
                      onClick={() => setCurrentPage(item.name)} 
                    >
                      <Disclosure.Button
                        key={item.name}
                        as='a'
                        to={item.to}
                        className='block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white'
                      >
                        {item.name}
                      </Disclosure.Button>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div className='flex justify-center pb-3'>
                {' '}
                <Button
                  className='mx-5'
                  onClick={handleSignInPortal}
                  size='large'
                >
                  Sign In
                </Button>
              </div>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
