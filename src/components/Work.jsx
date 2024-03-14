import React from "react";
import { Ivy, Carnab, DoIt, SkinCare } from "../assets/export";
const Work = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-14  bg-[#000]  justify-start items-center py-4 lg:py-10 px-4 lg:px-36 xl:px-48 ">
      <span className="text-4xl lg:text-6xl lg:mb-14 text-center font-extrabold text-white">
        Our Work Speaks For Itself.
      </span>

      {/* Carnab */}
      <div className="w-full h-auto flex flex-col lg:flex-row justify-start items-start">
        <div className="w-full lg:w-1/2 flex flex-col justify-start md:items-center lg:items-start items-start gap-4">
          <img
            src="https://www.cubix.co/themes/responsiv-clean/assets/images/home/hictic-logo-icn.png"
            className="w-20"
          />

          <span className="text-sm font-medium text-[#dd1b38] uppercase">
            Mobile App
          </span>

          <span className="text-4xl md:text-5xl font-extrabold text-white">
            Carnab
          </span>

          <span className="text-lg md:text-xl md:text-center lg:text-left  font-semibold text-gray-300">
            This app displays automobiles in the most thorough way possible,
            from the outside to the inside, but what distinguishes it from other
            online shops is its test, the 170 POINT INSPECTION.
            <br /> The examination provides extensive details regarding the
            engine, air conditioning, interior, automobile body, etc. A thorough
            report is also available, ensuring openness and credibility.
          </span>

          <button className="w-auto px-4 h-14 rounded-md border-2 border-[#dd1b38] text-[#dd1b38] hover:bg-[#dd1b38] hover:text-white transition-all duration-200 flex items-center justify-center">
            View Case Study
          </button>
        </div>
        <div className="w-full my-4 overflow-hidden lg:w-1/2 flex  justify-center items-center gap-4">
          <img src={Carnab} className="scale-125" />
        </div>
      </div>
      {/* IVY */}
      <div className="w-full h-auto flex flex-col lg:flex-row  justify-start items-start">
        <div className="hidden my-4 overflow-hidden w-full lg:w-1/2 lg:flex  justify-center items-center gap-4">
          <img src={Ivy} className="scale-125" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-start md:items-center lg:items-start items-start gap-4">
          <img
            src="https://www.cubix.co/themes/responsiv-clean/assets/images/home/hictic-logo-icn.png"
            className="w-20"
          />

          <span className="text-sm font-medium text-[#dd1b38] uppercase">
            Mobile App
          </span>

          <span className="text-4xl md:text-5xl font-extrabold text-white">
            I.V.Y Wallet
          </span>

          <span className="text-lg md:text-xl md:text-center lg:text-left  font-semibold text-gray-300">
            This App is an unfastened price range supervisor and spending
            tracker app that’ll assist you control your private budget with
            ease.
            <br /> Imagine it as a virtual economic notebook (guide rate
            tracker) wherein you’ll tune your income, fees, and price range.
            <br /> The gain that our cash calculator offers you is that you may
            tune fees at the go along with an intuitive and easy personalized
            interface (UI).
          </span>

          <button className="w-auto px-4 h-14 rounded-md border-2 border-[#dd1b38] text-[#dd1b38] hover:bg-[#dd1b38] hover:text-white transition-all duration-200 flex items-center justify-center">
            View Case Study
          </button>
        </div>
        <div className="lg:hidden my-4 overflow-hidden w-full lg:w-1/2 flex  justify-center items-center gap-4">
          <img src={Ivy} className="scale-125" />
        </div>
      </div>
      {/* DoIt */}
      <div className="w-full h-auto flex flex-col lg:flex-row justify-start items-start">
        <div className="w-full lg:w-1/2 flex flex-col justify-start md:items-center lg:items-start items-start gap-4">
          <img
            src="https://www.cubix.co/themes/responsiv-clean/assets/images/home/hictic-logo-icn.png"
            className="w-20"
          />

          <span className="text-sm font-medium text-[#dd1b38] uppercase">
            Mobile App
          </span>

          <span className="text-4xl md:text-5xl font-extrabold text-white">
            Do It Relationship
          </span>

          <span className="text-lg md:text-xl md:text-center lg:text-left  font-semibold text-gray-300">
            A self-help app providing a springboard toward a great relationship,
            a middle-ground before therapy, and a complement to therapy.
            <br /> The Duet app is for anyone in a relationship, experiencing
            mild or moderate issues as a couple, or for you who just wants to
            proactively work on your relationship.
          </span>

          <button className="w-auto px-4 h-14 rounded-md border-2 border-[#dd1b38] text-[#dd1b38] hover:bg-[#dd1b38] hover:text-white transition-all duration-200 flex items-center justify-center">
            View Case Study
          </button>
        </div>
        <div className="w-full my-4 overflow-hidden lg:w-1/2 flex  justify-center items-center gap-4">
          <img src={DoIt} className="scale-125" />
        </div>
      </div>
      {/* SKINCARE */}
      <div className="w-full h-auto flex lg:flex-row flex-col justify-start items-start">
        <div className="hidden my-4 overflow-hidden w-1/2 lg:flex  justify-center items-center gap-4">
          <img src={SkinCare} className="scale-125" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-start md:items-center lg:items-start items-start gap-4">
          <img
            src="https://www.cubix.co/themes/responsiv-clean/assets/images/home/hictic-logo-icn.png"
            className="w-20"
          />

          <span className="text-sm font-medium text-[#dd1b38] uppercase">
            Mobile App
          </span>

          <span className="text-4xl md:text-5xl font-extrabold text-white">
            Skin Care App
          </span>

          <span className="text-lg md:text-xl md:text-center lg:text-left font-semibold text-gray-300">
            This app locates skincare items that are appropriate for consumers’
            skin types while also reminding them to utilize their skincare
            products.
            <br /> It also acquires customers’ confidence for them to purchase
            things through the application; because obtaining advice straight
            from the internet might be risky, we needed to ensure that the user
            felt safe.
          </span>

          <button className="w-auto px-4 h-14 rounded-md border-2 border-[#dd1b38] text-[#dd1b38] hover:bg-[#dd1b38] hover:text-white transition-all duration-200 flex items-center justify-center">
            View Case Study
          </button>
        </div>
        <div className="lg:hidden my-4 overflow-hidden w-full lg:w-1/2 flex  justify-center items-center gap-4">
          <img src={SkinCare} className="scale-125" />
        </div>
      </div>
    </div>
  );
};

export default Work;
