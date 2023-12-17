"use client";
import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#0F0F0F] py-6 px-4 lg:px-48">
      <div className=" flex items-center justify-between ">
        {/* Logo on the left */}
        <Image
          className=""
          src="/logo.svg"
          width={90}
          height={90}
          alt="Picture of the author"
        />

        {/* Hamburger menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        {/* Menu Container */}
        {isOpen && (
          <div className="md:hidden fixed top-16 left-0 right-0 bg-[#0F0F0F] py-2 pb-6 flex flex-col items-center justify-center gap-2  transition-all duration-300 ease-in-out z-50">
            <a
              href="#"
              className="block hover:text-white text-[#676767] py-2 px-4 ">
              Home
            </a>
            <a
              href="#"
              className="block hover:text-white text-[#676767] py-2 px-4 ">
              About
            </a>
            <a
              href="#"
              className="block hover:text-white text-[#676767] py-2 px-4 ">
              Works
            </a>
            <a
              href="#"
              className="block hover:text-white text-[#676767] py-2 px-4 ">
              Contact
            </a>
            <button className="bg-[#323232] hover:bg-white text-white hover:text-[#323232] text-sm font-semibold py-3 transition ease-in-out  px-8 rounded-2xl ">
              {"Let's Talk"}
            </button>
          </div>
        )}

        {/* Links and button */}
        <div className="hidden md:flex gap-6 md:items-center md:space-x-6">
          <a href="#" className="text-white ">
            Home
          </a>
          <a href="#" className="hover:text-white text-[#676767]">
            About
          </a>
          <a href="#" className="hover:text-white text-[#676767]">
            Works
          </a>
          <a href="#" className="hover:text-white text-[#676767]">
            Contact
          </a>
        </div>
        <div className="hidden md:block">
          <button className="bg-[#323232] hover:bg-white text-white hover:text-[#323232] text-sm font-semibold py-3 transition ease-in-out  px-8 rounded-2xl ">
          {"Let's Talk"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
