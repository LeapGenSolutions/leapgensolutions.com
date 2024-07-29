import React, { useEffect, useRef } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import PublicServices from "./PublicServices";
import CoreValues from "./CoreValues";
import Plans from "./Plans";
import SuccessStories from "./SuccessStories";
import Partners from "./Partners";
import ConnectWithUs from "./ConnectWithUs";
import CoreComponents from "./CoreComponents";
import Leapgenai from "./Leapgenai";

const Home = (props) => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const featuresRef = useRef(null);
  const domainsRef = useRef(null);
  const servicesRef = useRef(null);

  function handleMenuClick(menuItem) {
    if (menuItem === "hero") {
      heroRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (menuItem === "about") {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (menuItem === "features") {
      featuresRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (menuItem === "domains") {
      domainsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (menuItem === "services") {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  useEffect(() => {
    if (props.loadHistory === true) {
      window.scrollTo({
        top: 1300,
        left: 0,
        behavior: "smooth",
      });
      props.setloadHistory(false);
    }
  }, [props.loadHistory]);

  return (
    <div className="bg-white">
      <Header handleMenuClick={handleMenuClick} />
      <div ref={heroRef}>
        <Hero ref={heroRef} />
      </div>
      <Leapgenai />
      <PublicServices />
      <CoreValues />
      <CoreComponents />
      <SuccessStories />
      <Plans />
      <Partners />
      <ConnectWithUs />
      <Footer handleMenuClick={handleMenuClick} />
    </div>
  );
};

export default Home;
