import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../assets/export";

const Footer = () => {
  return (
    <footer className="w-full h-auto bg-black">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <Link
            to="/"
            class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} class="h-16" alt="Flowbite Logo" />
          </Link>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-bold text-white sm:mb-0 ">
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-[#1c1c1c] sm:mx-auto lg:my-8" />
        <span class="block text-sm text-[#626262] sm:text-center ">
          © 2024{" "}
          <a href="https://flowbite.com/" class="hover:underline">
            DigniteStudios™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
