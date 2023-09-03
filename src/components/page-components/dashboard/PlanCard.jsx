import { useSelector } from 'react-redux';

export default function PlanCard({ plan, setPackagePlans, packagePlans }) {
  console.log('Rendering PlanCard: ', plan);
  const { userToken } = useSelector((state) => state.session);

  const deleteServicePackage = async (pkgId) => {
    const backend_url =
      import.meta.env.VITE_BACKEND_URL || 'http://127.0.0.1:8000';
    const response = await fetch(
      `${backend_url}/package-manager/service-package?pk=${pkgId}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${userToken}`,
        },
      },
    );

    const data = await response.json();
    if (data.ok) {
      const newPackagePlans = packagePlans.filter((pkg) => pkg.id !== pkgId);
      setPackagePlans(newPackagePlans);
    }
  };

  return (
    <div className="relative max-w-sm m-5 rounded-xl overflow-hidden shadow-lg h-fit">
      {plan.service_packages && plan.service_packages.length > 0 ? (
        <div className="px-6 py-4 h-full">
          <div className="font-bold text-xl mb-2">{plan.name}</div>
          {plan.service_packages.map((pkg, idx) => (
            <div key={idx}>
              <p>{pkg.template_title}</p>
              <p>
                {plan.type} - {plan.status}
              </p>
              <p>${pkg.cost}/mo</p>
              <div className="w-full flex">
                <button
                  className="w-1/2 bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-auto"
                  onClick={() => deleteServicePackage(pkg.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
