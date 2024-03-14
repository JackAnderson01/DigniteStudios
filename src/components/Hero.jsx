import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <div
      id="hero"
      className="w-full h-auto lg:h-screen flex flex-col justify-start items-start image-bg py-8 lg:py-0 px-4 lg:px-36 xl:px-48 "
    >
      <Navbar />
      <HeroContent />
    </div>
  );
};

export default Hero;
