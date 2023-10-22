import Team from "./Team";
import GeneralCTA from "../../components/UI/GeneralCTA";
import About from "./About";

const AboutRoute = () => {
  return (
    <>
      <div className="flex flex-col max-w-7xl mx-auto">
        <About />
        <Team />
      </div>
      <GeneralCTA
        header="Want to lean more?"
        subheader="Check out our available services."
        primaryLink={{ link: "/services", text: "Services" }}
        secondaryLink={{ link: "/contact", text: "Get Started" }}
      />
    </>
  );
};

export default AboutRoute;
