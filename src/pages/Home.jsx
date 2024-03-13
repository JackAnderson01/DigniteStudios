import React from "react";
import Hero from "../components/Hero";
import ContactUs from "./ContactUs";
import Process from "../components/Process";
import Services from "../components/Services";
import Work from "../components/Work";
import Testimonials from "../components/Testimonials";
import WhyUs from "../components/WhyUs";
import Footer from "../components/Footer";
import Faq from "../components/Faq";

const Home = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-start items-start">
      <Hero />
      <Services />
      <Work />
      <Testimonials />
      <Process />
      <WhyUs />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;