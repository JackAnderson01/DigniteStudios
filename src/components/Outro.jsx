import React from "react";

const Outro = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-10  bg-[#0e0e10]  justify-start items-center py-6 lg:py-14 px-4 lg:px-36 xl:px-48 ">
      <span className="text-6xl text-center font-extrabold text-white">
        15 years of building digital products and we are just getting started!
      </span>
      <button className=" cursor-pointer w-auto px-4 h-14 flex justify-center items-center border-none outline-none rounded-md bg-blue-500 text-[17px] hover:bg-blue-600 text-white font-bold uppercase">
        Start a project
      </button>
    </div>
  );
};

export default Outro;
