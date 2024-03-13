import React from "react";
import { Dubai, Wyoming } from "../assets/export";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoMdArrowBack } from "react-icons/io";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const ContactUs = () => {
  return (
    <div className="h-screen w-screen flex justify-start items-start">
      <div className="w-1/2 h-full flex flex-col gap-6 items-center justify-center bg-gradient-to-r from-[#f15c20] to-[#e00e2dd8]">
        <Swiper
          slidesPerView={1}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper w-full"
        >
          <SwiperSlide className="flex flex-col gap-6 items-center justify-center">
            <span className="text-5xl font-extrabold text-white">
              Florida - Lake Lynda Drive
            </span>
            <span className="text-gray-200 text-[19px] font-medium">
              3505 Lake Lynda Drive Suite 200, Orlando, FL 32817
            </span>
            <span className="w-auto px-4 h-12 rounded-full flex items-center justify-center bg-black text-[#fff] text-[19px] font-medium">
              Branch Office
            </span>

            <img src={Dubai} className="w-[90%]" />
            <Link
              className="w-32 h-10 mt-4 bg-white/[0.2] hover:border-b hover:border-white text-white font-medium flex justify-center items-center"
              to="https://www.google.com/maps/place//@28.599880,-81.221460,15z/data=!3m1!4b1?entry=ttu"
            >
              View Location
            </Link>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col gap-4 items-center justify-center">
            <span className="text-5xl font-extrabold text-white">
              Casper - W 2nd Street
            </span>
            <span className="text-gray-200 text-[19px] font-medium">
              312 W 2nd Street, Casper, WY 82601
            </span>
            <span className="w-auto px-4 h-12 rounded-full flex items-center justify-center bg-black text-[#fff] text-[19px] font-medium">
              Head Office
            </span>

            <img src={Wyoming} className="w-[90%]" />
            <Link
              className="w-32 h-10 mt-4 bg-white/[0.2] hover:border-b hover:border-white text-white font-medium flex justify-center items-center"
              to="https://www.google.com/maps/place//@42.849390,-106.329070,15z/data=!3m1!4b1?entry=ttu"
            >
              View Location
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-1/2 h-full flex items-center justify-center px-6 bg-black relative">
        <Link
          to="/"
          className="absolute top-4 left-3 w-10 h-10 flex items-center justify-center rounded-full bg-[#0e0e10] border-2 border-gray-400 text-gray-400 hover:bg-gradient-to-r from-[#f15c20] to-[#e00e2dd8] hover:text-white hover:border-orange-500"
        >
          <IoMdArrowBack />
        </Link>
        <div className="w-full h-auto flex flex-col gap-6 justify-start items-center">
          <span className="text-5xl font-extrabold text-white">
            Let's start a project together
          </span>
          <span className="text-gray-200 text-[19px] font-medium">
            We make all your dreams come true in a successful project.
          </span>
          <input
            type={"text"}
            placeholder={"Name"}
            className="w-full h-12 bg-[#0e0e10] border border-gray-700 text-gray-100 text-sm font-medium px-3 rounded-sm transition-all duration-100 outline-none hover:border-[#dd1b38] focus:border-[#dd1b38]"
          />

          <input
            type={"text"}
            placeholder={"Email"}
            className="w-full h-12 bg-[#0e0e10] border border-gray-700 text-gray-100 text-sm font-medium px-3 rounded-sm transition-all duration-100 outline-none hover:border-[#dd1b38] focus:border-[#dd1b38]"
          />

          <input
            type={"text"}
            placeholder={"Phone"}
            className="w-full h-12 bg-[#0e0e10] border border-gray-700 text-gray-100 text-sm font-medium px-3 rounded-sm transition-all duration-100 outline-none hover:border-[#dd1b38] focus:border-[#dd1b38]"
          />

          <textarea
            className="w-full p-3 bg-[#0e0e10] text-sm h-40 resize-none border border-gray-700 rounded-sm transition-all duration-100 outline-none hover:border-[#dd1b38] focus:border-[#dd1b38]"
            placeholder={"Message"}
          ></textarea>

          {/* <div className="w-full h-auto flex gap-1">
            <input
              type={"date"}
              placeholder={"Date"}
              className="w-1/2 h-12 bg-[#0e0e10] border border-gray-700 text-gray-100 text-sm font-medium px-3 rounded-sm transition-all duration-100 outline-none hover:border-[#dd1b38] focus:border-[#dd1b38]"
            />
            <input
              type={"time"}
              placeholder={"Time"}
              className="w-1/2 h-12 bg-[#0e0e10] border border-gray-700 text-gray-100 text-sm font-medium px-3 rounded-sm transition-all duration-100 outline-none hover:border-[#dd1b38] focus:border-[#dd1b38]"
            />
          </div> */}

          {/* Buttons container */}
          <diV className="w-full flex gap-2 justify-start items-center">
            <button className="w-full h-10 bg-[#dd1b38] transition-all duration-150 hover:opacity-95 text-xs font-bold flex items-center justify-center text-white uppercase">
              Submit
            </button>
          </diV>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
