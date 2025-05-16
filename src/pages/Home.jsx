import React from "react";
import AboutMe from "../components/homepage/AboutMe";
import SomeWork from "../components/homepage/SomeWork";
import SomeWorkSm from "../components/homepage/SomeWorkSm";
import ContactHome from "../components/homepage/ContactHome";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <AboutMe />
      <SomeWork />
      <SomeWorkSm />
      <ContactHome />
      <Footer />
    </>
  );
};

export default Home;
