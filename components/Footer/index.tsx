import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#0F0F0F] w-full p-20">
      <div className="flex flex-col items-center justify-center gap-8">
        <Image
          className=""
          src="/logo.svg"
          width={90}
          height={90}
          alt="Picture of the author"
        />
        <div className="flex flex-row wrap gap-12">
          <a href="#" className="hover:text-white text-[#676767]">
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

        <div className="text-[#676767]">
          <p>
            © All rights reserved by{" "}
            <span className="text-[#5B78F6]">WordPress River</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
