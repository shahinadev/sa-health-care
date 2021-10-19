import React from "react";
import Banner from "../../Shared/Banner/Banner";
import About from "./About/About";
import Services from "./Services/Services";
import OurDoctors from "./OurDoctors/OurDoctors";

const Home = () => {
  return (
    <>
      <div id="home">
        <Banner></Banner>
      </div>
      <About></About>
      <Services></Services>
      <OurDoctors></OurDoctors>
    </>
  );
};

export default Home;
