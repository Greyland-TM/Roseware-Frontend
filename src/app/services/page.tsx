import ServicesIndex from '@/components/services/Services';
import ServicesHeader from '@/components/services/ServicesHeader';
import GeneralCTA from '../../components/UI/GeneralCTA';

export default function ServicesRoute() {
  return (
    <div className="tracking-tighter">
      <ServicesHeader />
      <ServicesIndex />
      <GeneralCTA 
        header="Interested in any of our services?" 
        subheader="Follow the link to create a Roseware account."
        primaryLink={{link: "/contact", text: "Get Started"}}
        secondaryLink={{link: "/support", text: "Contact Us"}}
      />
    </div>
  );
};

