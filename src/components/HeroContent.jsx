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

const HeroContent = () => {
  return (
    <div className="w-full h-[calc(100%-6rem)]  flex flex-col gap-10 justify-center items-start ">
      <div className="w-auto flex flex-col justify-start items-start gap-6">
        <div className="flex flex-col gap-2 justify-start items-start">
          <h1 className="text-[56px] font-bold text-white leading-tight">
            Modernizing Mobile <br /> Platforms
          </h1>
          <span className="text-gray-200 text-[18px] font-medium">
            Custom mobile apps. User experience & design. Engagement &<br />
            intelligence. Native & cross-platform
          </span>
        </div>

        <button className=" cursor-pointer w-36 h-14 flex justify-center items-center border-none outline-none rounded-md bg-blue-500 text-[17px] hover:bg-blue-600 text-white font-bold uppercase">
          Let's Talk
        </button>
      </div>

      <div className="hidden w-full h-auto lg:h-20 bg-black/[0.6] rounded-lg lg:flex px-4 justify-between items-center">
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
      </div>
    </div>
  );
};

export default HeroContent;
