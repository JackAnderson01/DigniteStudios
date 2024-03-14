import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ServiceCard from "./ServiceCard";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import {
  AppDes,
  AppDev,
  Avatar,
  Branding,
  Prototyping,
  Research,
  Sales,
  VideoGraphics,
  WebDes,
  WebDev,
} from "../assets/export";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const arr = [
    {
      image: Avatar,
      text: "Research",
      desc: "lorem ipsum dolor summit congo banda tuliet ranger",
    },
    {
      image: Avatar,
      text: "Research",
      desc: "lorem ipsum dolor summit congo banda tuliet ranger",
    },
    {
      image: Avatar,
      text: "Research",
      desc: "lorem ipsum dolor summit congo banda tuliet ranger",
    },
    {
      image: Avatar,
      text: "Research",
      desc: "lorem ipsum dolor summit congo banda tuliet ranger",
    },
  ];
  return (
    <div className="w-full h-auto flex flex-col gap-10  bg-[#0e0e10]  justify-start items-center py-4 lg:py-10 px-4 lg:px-36 xl:px-48 ">
      <span className="text-4xl lg:text-6xl text-center font-extrabold text-white">
        We are trusted worldwide.
      </span>
      <div className="w-full h-full flex justify-center items-center gap-2">
        <Swiper
          slidesPerView={window.innerWidth < 768 ? 1 : 2}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          className="mySwiper w-full lg:w-[90%]"
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {arr?.map((service, key) => {
            return (
              <SwiperSlide key={key}>
                <TestimonialCard
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

export default Testimonials;
