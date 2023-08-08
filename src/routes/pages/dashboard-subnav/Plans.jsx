import { DashboardLayout } from "../../../layouts/DashboardLayout";
import CardDisplayContainer from "../../../components/page-components/dashboard/CardDisplayContainer";

const Plans = () => {
  return (
    <DashboardLayout>
      <div className="bg-white px-3 py-16 sm:py-4 lg:px-1 flex flex-col justify-around h-full space-y-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Your plans & products</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            This is where you can manage your plans and products created for your organization.
          </p>
        </div>
        <CardDisplayContainer text="Your plans & products" />
      </div>
    </DashboardLayout> 
    
  );
};

export default Plans;
