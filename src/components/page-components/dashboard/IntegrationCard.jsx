import { CheckCircleIcon } from '@heroicons/react/20/solid';
import { useSelector } from 'react-redux';

export default function IntegrationCard(props) {
  const { integrationDetails } = props;
  const { user } = useSelector((state) => state.session);
  const isConnected = integrationDetails.icons.every((icon) => icon.isLinked);

  const getStripeLink = async () => {
    const backend_url =
      import.meta.env.VITE_BACKEND_URL || 'http://127.0.0.1:8000';
    const response = await fetch(
      `${backend_url}/stripe/connect-link/?pk=${user.id}`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      },
    );

    const data = await response.json();
    return data.url;
  };

  const getPaymentPageLink = async () => {
    try {
      const backend_url =
        import.meta.env.VITE_BACKEND_URL || 'http://127.0.0.1:8000';
      const response = await fetch(
        `${backend_url}/stripe/subscription-checkout/?customer_pk=${user.id}&pk=${integrationDetails.id}`,
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        },
      );

      const data = await response.json();
      return data.url;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`relative max-w-sm m-5 rounded-xl overflow-hidden shadow-lg h-fit ${
        isConnected ? 'ring-2 ring-green-500 p-2' : 'p-0'
      }`}
    >
      {/* The overlay to show the card is not available */}
      {!user.beta_feature_flag && (
        <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-50 flex items-center justify-center z-10">
          <span className="text-white text-lg">Coming Soon</span>
        </div>
      )}
      <div className="px-6 py-4 h-48">
        <div className="font-bold text-xl mb-2">{integrationDetails.title}</div>
        <p className="text-gray-700 text-base">
          {integrationDetails.description}
        </p>
      </div>
      <div className="flex justify-around mb-8">
        {integrationDetails.icons.map((icon, idx) => (
          <div
            key={idx}
            className="flex flex-col align-middle justify-center relative"
          >
            <div
              className={`flex items-center justify-center p-1 rounded-full mb-4 bg-slate-300 h-24 w-24`}
            >
              <img
                className="inline-block rounded-full h-full w-full"
                src={icon.src}
                alt="smthn"
              />
            </div>
            <button
              type="button"
              onClick={async () => {
                const hasPackageWithSameId =
                  user.package_plans &&
                  user.package_plans.some((plan) => plan.id === icon.id);
                if (!hasPackageWithSameId) {
                  const stripePaymentLink = await getPaymentPageLink();
                  window.location.href = stripePaymentLink;
                } else if (!icon.isLinked) {
                  if (icon.platform === 'Stripe') {
                    const stripeLink = await getStripeLink();
                    window.location.href = stripeLink;
                  } else {
                    window.location.href = icon.url;
                  }
                }
              }}
              className={`inline-flex items-center justify-middle gap-x-1 rounded-md ${
                icon.isSyncing
                  ? 'bg-gray-200'
                  : icon.isLinked
                  ? 'bg-green-600'
                  : 'bg-blue-400'
              } px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
            >
              {icon.isSyncing && (
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 mr-3 text-gray-100 animate-spin dark:text-gray-600 fill-green-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              )}
              {user.package_plans &&
                user.package_plans.length <= 0 &&
                'Purchase'}
              {user.package_plans &&
                user.package_plans.length > 0 &&
                (icon.isSyncing
                  ? 'Loading'
                  : icon.isLinked
                  ? 'Linked'
                  : 'Start Link')}
              {icon.isLinked && !icon.isSyncing && (
                <CheckCircleIcon
                  className="-mr-0.5 h-5 w-5"
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
