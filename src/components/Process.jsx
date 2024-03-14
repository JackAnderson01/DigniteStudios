import React from "react";

const Process = () => {
  return (
    <div className="w-full h-auto flex flex-col bg-black gap-6 justify-center items-center py-4 lg:py-10 px-4 lg:px-36 xl:px-48 ">
      <span className="text-4xl lg:text-5xl text-center font-extrabold text-white">
        Our Process Is Simple
      </span>
      <div className="w-full h-auto flex justify-center items-center">
        <img src="/process.gif" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Process;
