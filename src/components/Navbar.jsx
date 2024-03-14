import React from "react";
import { Logo } from "../assets/export";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div
      id="mynav"
      className="w-full h-auto lg:h-24 nav-transparent flex justify-between items-center"
    >
      <Link to="/">
        <img src={Logo} className="w-28" />
      </Link>

      <div className="w-auto mx-auto hidden lg:flex justify-start items-center h-full lg:gap-8 xl:gap-12 ">
        <button className="text-lg font-semibold text-white bg-transparent border-none outline-none">
          Services
        </button>
        <button className="text-lg font-semibold text-white bg-transparent border-none outline-none">
          Work
        </button>
        <button className="text-lg font-semibold text-white bg-transparent border-none outline-none">
          Faq
        </button>
        <button className="text-lg font-semibold text-white bg-transparent border-none outline-none">
          Testimonials
        </button>
        <Link
          to="/contact-us"
          className="text-lg font-semibold text-white bg-transparent border-none outline-none"
        >
          Contact
        </Link>
      </div>
      <div className="w-auto flex gap-6 justify-start items-center">
        <span className="hidden w-auto h-auto text-white lg:flex justify-center items-center gap-2">
          <FaPhone className="text-lg " />
          <span className="font-semibold">866-978-2220</span>
        </span>
        <button className="cursor-pointer w-32 lg:w-48 h-10 lg:h-12 rounded-md flex justify-center items-center bg-gradient-to-r from-[#f15c20] to-[#e00e2dd8] transition-all duration-200 hover:opacity-90 uppercase outline-none border-none text-white text-[12px] lg:text-[16px] font-bold">
          Estimate Product
        </button>
      </div>
    </div>
  );
};

export default Navbar;
