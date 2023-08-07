import { DashboardLayout } from "../../../layouts/DashboardLayout";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="bg-white px-3 py-16 sm:py-4 lg:px-1">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Welcome to the Roseware Integrations dashboard!</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            This system has been in development to some degree since about 2021. It's almost ready for a beta release, and we hope to have all our features ready 
            by the end of summer 2023. Any form, button, or thing that is not locked or covered is far game to use. If you have any questions, 
            we are developing a help desk system that we will announce, otherwise reach out here {" { link_here }"}. 
          </p>
        </div>
      </div>
    </DashboardLayout> 
    
  );
};

export default Dashboard;
