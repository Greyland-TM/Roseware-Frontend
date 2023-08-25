import About from "../../components/page-components/about/About";
import PageHeader from "../../components/UI/PageHeader";
import Team from "../../components/page-components/about/Team";
import GeneralCTA from "../../components/UI/GeneralCTA";

const AboutRoute = () => {
  return (
    <div className="flex flex-col">
      <PageHeader title="About" subTitle=""/>
      <About />
      <Team />
      <GeneralCTA 
        header="Want to lean more?" 
        subheader="Check out our available services."
        primaryLink={{link: "/services", text: "Services"}}
        secondaryLink={{link: "/register", text: "Get Started"}}
      />
    </div>
  );
};

export default AboutRoute;
