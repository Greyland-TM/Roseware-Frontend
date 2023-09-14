import { DashboardLayout } from '../../../layouts/DashboardLayout';
import IntegrationCard from '../../../components/page-components/dashboard/IntegrationCard';
import stripeLogo from '../../../images/logos/stripe-logo.jpeg';
import pipedriveLogo from '../../../images/logos/pipedrive-logo.jpeg';
import mondayLogo from '../../../images/logos/monday-logo.jpeg';
import { useSelector } from 'react-redux';
import {
  updateHasSyncedPipedrive,
  updateHasSyncedStripe,
} from '../../../redux/slices/sessionSlice';
import { useState, useEffect } from 'react';

const Integrations = () => {
  const {
    user,
    hasSyncedPipedrive,
    hasSyncedStripe,
    isPipedriveSyncing,
    isStripeSyncing,
  } = useSelector((state) => state.session);
  const [integrations, setIntegrations] = useState([
    {
      id: 4,
      title: 'Pipedrive-Stripe sync',
      description:
        'This is a 100% integration between your Pipedrive and Stripe accounts, and includes tools for creating stripe payments and subscriptions from in your Pipedrive account.',
      icons: [
        {
          platform: 'Pipedrive',
          src: pipedriveLogo,
          isLinked: hasSyncedPipedrive,
          isSyncing: isPipedriveSyncing,
          url: import.meta.env.VITE_PIPEDRIVE_OAUTH_URL,
          action: updateHasSyncedPipedrive,
        },
        {
          platform: 'Stripe',
          src: stripeLogo,
          isLinked: hasSyncedStripe,
          isSyncing: isStripeSyncing,
          url: '',
          action: updateHasSyncedStripe,
        },
      ],
    },
    {
      platform: 'Monday',
      title: 'Monday Lead Capture',
      description:
        'This generic lead capturing tool is free with websites developed by Roseware Integrations.',
      icons: [{ src: mondayLogo, isLinked: false, isSyncing: false }],
    },
  ]);

  useEffect(() => {
    console.log(integrations);
  }, [integrations]);

  useEffect(() => {
    setIntegrations((prevIntegrations) => {
      const newIntegrations = [...prevIntegrations];
      newIntegrations[0].icons[0].isLinked = user.has_synced_pipedrive;
      newIntegrations[0].icons[1].isLinked = user.has_synced_stripe;
      return newIntegrations;
    });
  }, [user]);

  useEffect(() => {
    setIntegrations((prevIntegrations) => {
      const newIntegrations = [...prevIntegrations];
      newIntegrations[0].icons[0].isSyncing = isPipedriveSyncing;
      newIntegrations[0].icons[1].isSyncing = isStripeSyncing;
      return newIntegrations;
    });
  }, [isPipedriveSyncing, isStripeSyncing]);

  return (
    <DashboardLayout>
      <div className="bg-white px-3 py-16 sm:py-4 lg:px-1">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Integrations center
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            These features are at the core of the platform. Our tools aim to
            alieviate the stress of managing a business. If there is a tool your
            business needs that you do not see here, let us know, and we&apos;ll
            see what we can do to add it {' { link_here }'}.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-around w-full gap-18 mb-20 lg:mb-5">
        {integrations.map((integration, idx) => (
          <IntegrationCard
            key={idx}
            integrationDetails={integration}
            setIntegrations={setIntegrations}
          />
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Integrations;
