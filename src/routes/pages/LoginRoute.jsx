import React from "react";
import LoginForm from "../../components/auth/LoginForm";
import { useLocation } from 'react-router-dom';

const LoginRoute = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const pipedriveOuthCode = queryParams.get('code');

  console.log('pipedriveOuthCode: ', pipedriveOuthCode);
      
  return <LoginForm pipedriveOuthCode={pipedriveOuthCode}/>;
};

export default LoginRoute;
