import About from "../../components/page-components/about/About";
import PageHeader from "../../components/UI/PageHeader";
import Team from "../../components/page-components/about/Team";

const AboutRoute = () => {
  return (
    <div className="flex flex-col">
      <PageHeader title="About" subTitle=""/>
      <About />
      <Team />
    </div>
  );
};

export default AboutRoute;
