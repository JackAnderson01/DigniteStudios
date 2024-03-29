import React from "react";
import ServiceCard from "./ServiceCard";
import {
  AppDes,
  AppDev,
  Branding,
  Prototyping,
  Research,
  Sales,
  VideoGraphics,
  WebDes,
  WebDev,
} from "../assets/export";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, textVariant } from "../utils/motion";

const Services = () => {
  const arr = [
    {
      image: Research,
      text: "Research",
      desc: "lorem ipsum dolor summit congo banda tuliet ranger",
    },
    {
      image: Branding,
      text: "Branding",
      desc: "lorem ipsum dolor summit congo banda tuliet ranger",
    },
    {
      image: WebDes,
      text: "Web Designing",
      desc: "lorem ipsum dolor summit congo banda tuliet ranger",
    },
    {
      image: WebDev,
      text: "Web Development",
      desc: "lorem ipsum dolor summit congo banda tuliet ranger",
    },
    {
      image: AppDes,
      text: "App Designing",
      desc: "lorem ipsum dolor summit congo banda tuliet ranger",
    },
    {
      image: AppDev,
      text: "App Development",
      desc: "lorem ipsum dolor summit congo banda tuliet ranger",
    },
    {
      image: Sales,
      text: "Sales & Marketing",
      desc: "lorem ipsum dolor summit congo banda tuliet ranger",
    },
    {
      image: VideoGraphics,
      text: "Graphics & Videos",
      desc: "lorem ipsum dolor summit congo banda tuliet ranger",
    },
    {
      image: Prototyping,
      text: "Prototyping",
      desc: "lorem ipsum dolor summit congo banda tuliet ranger",
    },
  ];
  return (
    <div
      id="services"
      className="w-full h-auto xl:h-[26rem] flex flex-col lg:flex-row gap-3 justify-start items-start py-12 px-4 lg:px-8 xl:px-48 bg-[#0e0e10]"
    >
      <div className="w-full lg:w-[40%] h-full flex flex-col gap-5 justify-center md:items-center lg:items-start items-start">
        <span className="text-[#dd1b38] text-sm  font-semibold">
          DESIGN. DEVELOPMENT. CONSULTANCY.
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl md:text-center lg:text-left font-extrabold text-white">
          One team
          <br />
          to create it all
        </h1>
        <span className="text-gray-400 text-lg md:text-xl  font-semibold">
          Need a full design & development package? we got you covered.
        </span>

        <button className="w-auto px-4 h-14 rounded-full border-2 border-[#dd1b38] text-[#dd1b38] hover:bg-[#dd1b38] hover:text-white transition-all duration-200 flex items-center justify-center">
          See What We Can Do
        </button>
      </div>

      <div className="w-full lg:w-[60%] mt-6 lg:mt-0 h-full flex justify-center items-center gap-2">
        <Swiper
          slidesPerView={window.innerWidth < 768 ? 1 : 2}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          className="mySwiper w-full"
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {arr?.map((service, key) => {
            return (
              <SwiperSlide key={key}>
                <ServiceCard
                  image={service.image}
                  text={service.text}
                  desc={service.desc}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Services;
