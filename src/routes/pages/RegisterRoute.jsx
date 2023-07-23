import RegisterForm from "../../components/auth/RegistrationForm";
import { useLocation } from 'react-router-dom';

export default function RegisterRoute() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const pipedriveOuthCode = queryParams.get('code');
  
  console.log('pipedriveOuthCode: ', pipedriveOuthCode);

  return <RegisterForm pipedriveOuthCode={pipedriveOuthCode}/>;
}
