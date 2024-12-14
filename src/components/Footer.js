import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="Footer"
      className="flex justify-around bg-[#172458] text-white p-10 md:p-12 items-center">
      <div>
        <h1 className="text-2xl md:text-6xl font-serif font-mediumbold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-serif font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex font-serif gap-1 items-center">
          <MdOutlineEmail size={20} /><a href="komaldeep246@gmail.com">
          komaldeep246@gmail.com
        </a></li>
        <li className="flex gap-1 font-serif items-center">
          <CiLinkedin /><a href="https://www.linkedin.com/in/komaldeep-kaur-70b20723b/">
          linkdlin.com/komaldeep
        </a></li>
        <li className="flex gap-1 font-serif items-center">
          <FaGithub /><a href="https://github.com/Kdeep2403">
          github.com/kdeep2403
        </a></li>
      </ul>
    </div>
  );
};

export default Footer;