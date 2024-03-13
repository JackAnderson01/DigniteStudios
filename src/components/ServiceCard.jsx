import React from "react";
import { GoPlus } from "react-icons/go";

const ServiceCard = ({ image, text, desc }) => {
  return (
    <div className=" h-auto p-4 flex flex-col gap-2 justify-center items-center rounded-sm bg-[#1c1c1c]">
      <div className="w-full h-auto flex justify-center items-center gap-2"></div>
      <span className="w-24 h-24 flex items-center justify-center rounded-full">
        <img src={image} className="w-20" />
      </span>
      <div className="w-auto flex flex-col justify-start items-center gap-1">
        <span className="text-2xl text-white text-wrap font-semibold">
          {text}
        </span>
        <span className="text-sm text-gray-400 text-center text-wrap font-semibold">
          {desc}
        </span>
      </div>
      <button className="w-12 h-12 flex items-center justify-center rounded-full border border-[#f15c20] text-[#f15c20] hover:text-white hover:bg-[#f15c20] font-semibold">
        <GoPlus />
      </button>
    </div>
  );
};

export default ServiceCard;
