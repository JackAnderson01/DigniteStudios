import React from "react";
import { FaStar } from "react-icons/fa6";
import { PiQuotes } from "react-icons/pi";

const TestimonialCard = ({ image, text, desc }) => {
  return (
    <div className=" h-auto p-4 flex flex-col gap-2 justify-center items-center rounded-sm bg-[#dd1b38] relative">
      <span
        className="w-20 h-20 bg-white absolute top-0 right-0 "
        style={{ clipPath: "circle(100% at 100% 0%)" }}
      >
        <PiQuotes className="text-4xl text-[#dd1b38] absolute top-3 right-4" />
      </span>
      <div className="w-full flex  gap-2 justify-start items-center">
        <img src={image} className="w-16" />
        <div className="w-auto flex flex-col justify-start items-start">
          <h1 className="text-xl font-semibold text-white">Jane Doe</h1>
          <span className="text-sm font-medium text-gray-300">Orlando, FL</span>
          <div className="w-auto flex justify-start items-center gap-1">
            <FaStar className="text-white text-sm" />
            <FaStar className="text-white text-sm" />
            <FaStar className="text-white text-sm" />
            <FaStar className="text-white text-sm" />
            <FaStar className="text-white text-sm" />
          </div>
        </div>
      </div>

      <div className="w-full flex text-left justify-center items-center text-sm font-semibold text-gray-200 mt-3">
        "Dignite studio expressed sincere enthusiasm for the undertaking. The
        competent team produced high-quality outcomes at a reasonable cost. We
        sought to create a minimal viable product that could be scaled. The
        experience of dealing with them was wonderful. We are overjoyed that we
        got to meet Dignite Studios. We admire what they do. Their organization
        and project management were outstanding. The group took great pleasure
        in their work. Behind each and every piece of labor was passion."
      </div>
    </div>
  );
};

export default TestimonialCard;
