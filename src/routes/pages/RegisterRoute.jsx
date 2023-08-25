import RegisterForm from "../../components/auth/RegistrationForm";
import PageHeader from "../../components/UI/PageHeader";
import { useLocation } from 'react-router-dom';

export default function RegisterRoute() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const pipedriveOuthCode = queryParams.get('code');

  return (
    <div>
      <PageHeader title="Register" />
      <RegisterForm pipedriveOuthCode={pipedriveOuthCode}/>
    </div>
  );
}
