import React from "react";
import { Awards, Ratings, Visions, Journey } from "../assets/export";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../utils/motion";

const WhyUs = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-10  bg-[#0e0e10]  justify-start items-center py-4 lg:py-10 px-4 lg:px-8 xl:px-48 ">
      <span className="text-4xl lg:text-6xl text-center font-extrabold text-white">
        Why Dignite?
      </span>
      <div className="w-full h-auto grid lg:gap-8 grid-cols-1 md:grid-cols-2  md:grid-rows-2">
        <div className="w-full h-auto   border flex flex-col gap-2 border-[#1c1c1c] p-4 rounded-3xl">
          <img src={Awards} className="h-[70%] hover:scale-105" />
          <span className="text-4xl lg:text-5xl text-center font-bold text-white">
            Our Awards
          </span>
        </div>
        <div className="w-full h-auto  border flex flex-col gap-2 border-[#1c1c1c] p-4 rounded-3xl">
          <img src={Journey} className="h-[70%] hover:scale-105" />
          <span className="text-4xl lg:text-5xl text-center font-bold text-white">
            Our Journey
          </span>
        </div>
        <div className="w-full h-auto  border flex flex-col gap-2 border-[#1c1c1c] p-4 rounded-3xl">
          <img src={Ratings} className="h-[70%] hover:scale-105" />
          <span className="text-4xl lg:text-5xl text-center font-bold text-white">
            Our Ratings
          </span>
        </div>
        <div className="w-full h-auto  border flex flex-col gap-2 border-[#1c1c1c] p-4 rounded-3xl">
          <img src={Visions} className="h-[70%] hover:scale-105" />
          <span className="text-4xl lg:text-5xl text-center font-bold text-white">
            Our Vision & Values
          </span>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
