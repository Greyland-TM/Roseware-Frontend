import Services from '../../components/page-components/services/Services';
import ServicesHeader from '../../components/page-components/services/ServicesHeader';
import GeneralCTA from '../../components/UI/GeneralCTA';

const ServicesRoute = () => {
  return (
    <>
      <ServicesHeader />
      {/* <ServiceFeatures /> */}
      <Services />
      <GeneralCTA 
        header="Interested in any of our services?" 
        subheader="Follow the link to create a Roseware account."
        primaryLink={{link: "/register", text: "Get Started"}}
        secondaryLink={{link: "/support", text: "Cotact Us"}}
      />
    </>
  );
};

export default ServicesRoute;
