import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaReddit,
  FaTumblr,
  FaTwitter,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Reachout = () => {
  return (
    <div className="w-full h-auto flex flex-col lg:flex-row gap-6 lg:gap-3 justify-start items-start py-12 px-4 lg:px-36 xl:px-48 bg-[#dd1b38]">
      <div className="w-full lg:w-[50%] h-full flex flex-col gap-5 justify-center items-start">
        <span className="text-5xl font-extrabold text-white">
          Reach Out To Dignite <br />
          Studios.
        </span>
        <div className="flex w-full justify-start items-start gap-2">
          <Link
            to="https://www.facebook.com/dignitestudios"
            target="_blank"
            className="w-12 h-12 text-2xl hover:bg-black hover:text-white flex items-center bg-white rounded-full justify-center"
          >
            <FaFacebook />
          </Link>
          <Link
            to="https://www.twitter.com/dignitestudios"
            target="_blank"
            className="w-12 h-12 text-2xl hover:bg-black hover:text-white flex items-center bg-white rounded-full justify-center"
          >
            <FaTwitter />
          </Link>
          <Link
            to="https://www.linkedin.com/company/dignitestudios"
            target="_blank"
            className="w-12 h-12 text-2xl hover:bg-black hover:text-white flex items-center bg-white rounded-full justify-center"
          >
            <FaLinkedin />
          </Link>
          <Link
            to="https://www.instagram.com/dignitestudios"
            target="_blank"
            className="w-12 h-12 text-2xl hover:bg-black hover:text-white flex items-center bg-white rounded-full justify-center"
          >
            <FaInstagram />
          </Link>
          <Link
            to="https://www.pinterest.com/DigniteStudios"
            target="_blank"
            className="w-12 h-12 text-2xl hover:bg-black hover:text-white flex items-center bg-white rounded-full justify-center"
          >
            <FaPinterest />
          </Link>
          <Link
            to="https://www.reddit.com/user/DigniteStudios/"
            target="_blank"
            className="w-12 h-12 text-2xl hover:bg-black hover:text-white flex items-center bg-white rounded-full justify-center"
          >
            <FaReddit />
          </Link>
          <Link
            to="https://www.tumblr.com/dignitestudios"
            target="_blank"
            className="w-12 h-12 text-2xl hover:bg-black hover:text-white flex items-center bg-white rounded-full justify-center"
          >
            <FaTumblr />
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-[50%] h-full flex flex-col gap-5 justify-center items-start">
        <span className="text-5xl font-extrabold text-white">Contact Us.</span>
        <span className="w-auto h-auto text-white flex justify-center items-center gap-2">
          <FaPhoneAlt className="text-xl " />
          <span className="font-semibold text-xl">866-978-2220</span>
        </span>
        <span className="w-auto h-auto text-white flex justify-center items-center gap-2">
          <MdEmail className="text-xl " />
          <span className="font-semibold text-xl">info@dignitestudios.com</span>
        </span>
      </div>
    </div>
  );
};

export default Reachout;
