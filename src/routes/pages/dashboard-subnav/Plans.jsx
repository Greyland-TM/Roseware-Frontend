import { DashboardLayout } from '../../../layouts/DashboardLayout';
import CardDisplayContainer from '../../../components/page-components/dashboard/CardDisplayContainer';
import PlanCard from '../../../components/page-components/dashboard/PlanCard';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Plans = () => {
  const [packagePlans, setPackagePlans] = useState([]);
  const { userToken } = useSelector((state) => state.session);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const backend_url =
          import.meta.env.VITE_BACKEND_URL || 'http://127.0.0.1:8000';
        const response = await fetch(
          `${backend_url}/package-manager/package-plan/`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Token ${userToken}`,
            },
          },
        );

        const data = await response.json();
        console.log(data);
        if (data.ok) {
          setPackagePlans(data.package_plans);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchPlans();
  }, []);

  return (
    <DashboardLayout>
      <div className="bg-white px-3 py-16 sm:py-4 lg:px-1 flex flex-col justify-around h-full space-y-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your plans & products
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            This is where you can manage your plans and products created for
            your organization.
          </p>
        </div>
        {packagePlans &&
          packagePlans.length > 0 &&
          packagePlans.map((plan, idx) => (
            <PlanCard plan={plan} key={idx} setPackagePlans={setPackagePlans} />
          ))}
      </div>
    </DashboardLayout>
  );
};

export default Plans;
