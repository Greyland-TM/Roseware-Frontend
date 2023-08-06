import { DashboardLayout } from "../../../layouts/DashboardLayout";
import AccountForm from '../../../components/page-components/dashboard/AccountForm';
import OrganizationForm from "../../../components/page-components/dashboard/OrganizationForm";
import PaymentInfoForm from "../../../components/page-components/dashboard/PaymentInfoForm";

const Account = () => {
  return (
    <DashboardLayout>
      <div className='inline-grid grid-cols-3 gap-6 m-6'>
        <AccountForm />
        <PaymentInfoForm />
        <OrganizationForm />
      </div>
    </DashboardLayout> 
    
  );
};

export default Account;
