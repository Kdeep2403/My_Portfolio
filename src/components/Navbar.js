import React, { useState } from "react";

// import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu] = useState(false);
//   const [showMenu, setShowmenu] = useState(true);
  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-8 md:px-20">
      <span className="text-3xl font-bold font-serif tracking-wide">My Portfolio</span>

      <ul
        className={`${
          menu ? "block" : "hidden"
        }     mx-24 py-2  font-semibold md:mt-1 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
      >
        <a href="#Education">
          <li className="text-md transition-all font-serif duration-300 p-1 md:p-0">
            Education
          </li>
        </a>
        <a href="#Skills">
          <li className="text-md transition-all font-serif duration-300 p-1 md:p-0">
            Skills
          </li>
        </a>
        <a href="#Projects">
          <li className="text-md transition-all font-serif duration-300 p-1 md:p-0">
            Projects
          </li>
        </a>
        <a href="#Footer">
          <li className="text-md transition-all font-serif duration-300 p-1 md:p-0">
            Contact
          </li>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;