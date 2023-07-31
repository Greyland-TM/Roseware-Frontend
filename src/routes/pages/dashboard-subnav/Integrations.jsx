import {DashboardLayout} from "../../../layouts/DashboardLayout";
import IntegrationCard from "../../../components/page-components/dashboard/IntegrationCard";
import stripeLogo from "../../../images/logos/stripe-logo.jpeg";
import pipedriveLogo from "../../../images/logos/pipedrive-logo.jpeg";
import mondayLogo from "../../../images/logos/monday-logo.jpeg";
import { useSelector } from "react-redux";

const Integrations = () => {
  const {hasSyncedPipedrive, hasSyncedStripe, isPipedriveSyncing, isStripeSyncing} = useSelector(
    (state) => state.session
  );

  const integrations = [
    {
      title: "Pipedrive-Stripe sync",
      description:
        "This is a 100% integration between your Pipedrive and Stripe accounts, and includes tools for creating stripe payments and subscriptions from in your Pipedrive account.",
      icons: [
        {src: pipedriveLogo, isLinked: hasSyncedPipedrive, isSyncing: isPipedriveSyncing}, 
        {src: stripeLogo, isLinked: hasSyncedStripe, isSyncing: isStripeSyncing}
      ],
      
    },
    {
      title: "Monday Lead Capture",
      description:
        "This generic lead capturing tool is free with websites developed by Roseware Integrations.",
      icons: [{src: mondayLogo, isLinked: false, isSyncing: false}],
    },
  ];

  return (
    <DashboardLayout>
      <div className="bg-white px-3 py-16 sm:py-4 lg:px-1">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Integrations center</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua.
          </p>
        </div>
      </div>
      <div className="flex justify-around w-full">
        {integrations.map((integration, idx) => (
          <IntegrationCard key={idx} integrationDetails={integration} />
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Integrations;
