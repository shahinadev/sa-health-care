import React from "react";
import Banner from "../../Shared/Banner/Banner";
import About from "./About/About";
import OurTeam from "./OurTeam/OurTeam";
import Services from "./Services/Services";

const Home = () => {
  return (
    <>
      <div id="home">
        <Banner></Banner>
      </div>
      <About></About>
      <Services></Services>
      <OurTeam></OurTeam>
    </>
  );
};

export default Home;
