// The context is used to maintain the authentication state throughout the app.
// The JWT found in local storage is also stored here, and sent with every API request.

import React, { useState } from 'react';

export const AuthContext = React.createContext({
  isAuth: false,
  name: '',
  userName: '',
  token: '',
  login: () => {},
  logout: () => {},
  setToken: () => {},
  setUser: () => {},
});

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [name, setName] = useState();
  const [userName, setUserName] = useState();
  const [token, setToken] = useState();

  // These functions are used to set the app wide state and are used throughout the project.
  const loginHandler = () => {
    setIsAuthenticated(true);
    // Send the login request to the frontend
  };

  const logoutHandler = () => {
    localStorage.removeItem('Auth_Token');
    setIsAuthenticated(false);
    setToken('');
    // Sent the logout request to the backend...
  };

  const setUserHandler = (name, userName) => {
    console.log('setting user');
    setName(name);
    setUserName(userName);
  };

  const setTokenHandler = (token) => {
    console.log('setting token');
    setToken(token);
  };

  return (
    <AuthContext.Provider
      value={{
        logout: logoutHandler,
        login: loginHandler,
        setUser: setUserHandler,
        setToken: setTokenHandler,
        isAuth: isAuthenticated,
        name: name,
        token: token,
        userName: userName,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
