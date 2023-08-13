import React, {useContext} from "react";
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
