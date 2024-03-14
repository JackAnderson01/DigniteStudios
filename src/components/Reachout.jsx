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
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../utils/motion";

const Reachout = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-full h-auto flex flex-col lg:flex-row gap-6 lg:gap-3 justify-start  items-start py-12 px-4 lg:px-8 xl:px-48 bg-[#dd1b38]"
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="w-full lg:w-[50%] h-full flex flex-col gap-5 justify-center md:items-center lg:items-start items-start"
      >
        <span className="text-5xl  md:text-center lg:text-left font-extrabold text-white">
          Reach Out To Dignite <br />
          Studios.
        </span>
        <div className="flex w-full justify-start md:justify-center lg:justify-start items-start gap-2">
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
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="w-full lg:w-[50%] h-full flex flex-col gap-5 justify-center md:items-center lg:items-start lg:ml-12 items-start"
      >
        <span className="text-5xl font-extrabold text-white">Contact Us.</span>
        <span className="w-auto h-auto text-white flex justify-center items-center gap-2">
          <FaPhoneAlt className="text-xl " />
          <span className="font-semibold text-xl">866-978-2220</span>
        </span>
        <span className="w-auto h-auto text-white flex justify-center items-center gap-2">
          <MdEmail className="text-xl " />
          <span className="font-semibold text-xl">info@dignitestudios.com</span>
        </span>
      </motion.div>
    </motion.div>
  );
};

export default Reachout;
