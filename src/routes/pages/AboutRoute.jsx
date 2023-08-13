import About from "../../components/page-components/about/About";
import PageHeader from "../../components/UI/PageHeader";

const AboutRoute = () => {
  return (
    <div className="flex flex-col">
      <PageHeader title="About" subTitle=""/>
      <About />
    </div>
  );
};

export default AboutRoute;
