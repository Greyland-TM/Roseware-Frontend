import React, {useContext} from "react";
import Overview from "../../components/Overview";
import Landing from "../../components/Landing";
import Hero from "../../components/page-components/home/Hero";
import HomeMiddleSection from "../../components/page-components/home/HomeMiddleSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <HomeMiddleSection />
    </div>
  );
};

export default Home;
