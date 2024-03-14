import React from "react";
import {
  AppDevCompany,
  AppFutura,
  Clutch,
  GoodFirms,
  Politico,
  Sapient,
  Tissot,
  Wallmart,
} from "../assets/export";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, textVariant } from "../utils/motion";

const HeroContent = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-full h-[calc(100%-6rem)] py-14 lg:py-0 flex flex-col gap-10 justify-center items-start "
    >
      <div className="w-full flex flex-col justify-start md:items-center lg:items-start items-start gap-6">
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex flex-col gap-2 justify-start md:items-center lg:items-start items-start"
        >
          <motion.h1
            variants={textVariant(0.5)}
            className="text-[46px] md:text-[56px] md:text-center lg:text-left font-bold text-white leading-tight"
          >
            Modernizing Mobile <br /> Platforms
          </motion.h1>
          <span className="text-gray-200 text-[18px] md:text-xl md:text-center lg:text-left font-medium">
            Custom mobile apps. User experience & design. Engagement &<br />
            intelligence. Native & cross-platform
          </span>
        </motion.div>
        <motion.button
          variants={fadeIn("right", "tween", 0.2, 1)}
          className=" cursor-pointer w-36 h-14 flex justify-center items-center border-none outline-none rounded-md bg-[#f15c20] text-[17px] hover:bg-[#f15b20eb] text-white font-bold uppercase"
        >
          Let's Talk
        </motion.button>
      </div>

      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="hidden w-full h-auto lg:h-20 bg-black/[0.6] rounded-lg lg:flex px-4 justify-between items-center"
      >
        <div className="w-auto flex justify-start items-center gap-6">
          <span className="text-sm font-bold text-white">Trusted by</span>
          <div className="flex justify-start items-center gap-6">
            <img src={Politico} className="w-20" />
            <img src={Wallmart} className="w-20" />
            <img src={Tissot} className="w-20" />
            <img src={Sapient} className="w-20" />
          </div>
        </div>

        <div className="w-auto flex justify-start items-center gap-6">
          <span className="text-sm font-bold text-white">Awards</span>
          <div className="flex justify-start items-center gap-6">
            <img src={AppFutura} className="w-12" />
            <img src={GoodFirms} className="w-12" />
            <img src={Clutch} className="w-12" />
            <img src={AppDevCompany} className="w-12" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
