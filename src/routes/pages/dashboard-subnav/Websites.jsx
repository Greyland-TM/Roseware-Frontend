import { DashboardLayout } from "../../../layouts/DashboardLayout";
import CardDisplayContainer from "../../../components/page-components/dashboard/CardDisplayContainer";

const Websites = () => {
  return (
    <DashboardLayout>
      <div className="bg-white px-3 py-16 sm:py-4 lg:px-1 flex flex-col justify-around h-full space-y-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Your Apps</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            This is where you can manage your apps and websites created for your organization. You can
            add existing apps, request new apps, and manage your existing apps here.
          </p>
        </div>
        <CardDisplayContainer text="Your apps will show up here." />
      </div>
    </DashboardLayout> 
  );
};

export default Websites;
