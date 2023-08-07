import { DashboardLayout } from "../../../layouts/DashboardLayout";
import AccountForm from '../../../components/page-components/dashboard/AccountForm';
import OrganizationForm from "../../../components/page-components/dashboard/OrganizationForm";
import PaymentInfoForm from "../../../components/page-components/dashboard/PaymentInfoForm";

const Account = () => {
  return (
    <DashboardLayout>
      <div className="bg-white px-3 py-16 sm:py-4 lg:px-1">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Account settings</h2>
          {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            This is where you can add or edit all of your account information. 
          </p> */}
        </div>
      </div>
      <div className='inline-grid grid-cols-3 gap-6 m-6'>
        <AccountForm />
        <PaymentInfoForm />
        <OrganizationForm />
      </div>
    </DashboardLayout> 
    
  );
};

export default Account;
