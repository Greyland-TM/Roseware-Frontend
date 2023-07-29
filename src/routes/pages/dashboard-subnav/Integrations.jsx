import {DashboardLayout} from "../../../layouts/DashboardLayout";
import IntegrationCard from "../../../components/page-components/dashboard/IntegrationCard";
import stripeLogo from "../../../images/logos/stripe-logo.jpeg";
import pipedriveLogo from "../../../images/logos/pipedrive-logo.jpeg";
import mondayLogo from "../../../images/logos/monday-logo.jpeg";

const Integrations = () => {
  const integrations = [
    {
      title: "Pipedrive-Stripe sync",
      description:
        "This is a 100% integration between your Pipedrive and Stripe accounts, and includes tools for creating stripe payments and subscriptions from in your Pipedrive account.",
      icons: [{src: pipedriveLogo}, {src: stripeLogo}],
    },
    {
      title: "Monday Lead Capture",
      description:
        "This generic lead capturing tool is free with websites developed by Roseware Integrations.",
      icons: [{src: mondayLogo}],
    },
  ];

  return (
    <DashboardLayout>
      {integrations.map((integration) => (
        <IntegrationCard integrationDetails={integration} />
      ))}
    </DashboardLayout>
  );
};

export default Integrations;
