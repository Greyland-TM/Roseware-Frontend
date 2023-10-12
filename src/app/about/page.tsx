
import Team from "@/components/about/Team";
import GeneralCTA from "../../components/UI/GeneralCTA";
import About from '../../components/about/About';

const AboutRoute = () => {
  return (
    <div className="flex flex-col">
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
