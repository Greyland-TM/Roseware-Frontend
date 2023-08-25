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
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Integrations center</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            These features are at the core of the platform. Our tools aim to alieviate the stress of managing a business. If there is a tool your business needs that you do not see here, let us know, and we&apos;ll see what we can do to add it {" { link_here }"}.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-around w-full gap-18 mb-20 lg:mb-5">
        {integrations.map((integration, idx) => (
          <IntegrationCard key={idx} integrationDetails={integration} />
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Integrations;
