import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "../utils/motion";

const Outro = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-full h-auto flex flex-col gap-10  bg-[#000]  justify-start items-center py-6 lg:py-14 px-4 lg:px-36 xl:px-48 "
    >
      <motion.span
        variants={textVariant(0.3)}
        className="text-4xl md:text-5xl lg:text-6xl text-center font-extrabold text-white"
      >
        15 years of building digital products and we are just getting started!
      </motion.span>
      <button className=" cursor-pointer w-auto px-4 h-12 lg:h-14 flex justify-center items-center border-none outline-none rounded-md bg-blue-500 text-[17px] hover:bg-blue-600 text-white font-bold uppercase">
        Start a project
      </button>
    </motion.div>
  );
};

export default Outro;
