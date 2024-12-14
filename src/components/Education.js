import React from "react";
import education from "../assets/education.jpeg";
import { IoArrowForward } from "react-icons/io5";
const Education = () => {
  return (
    <div
      id="Education"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">
      <div>
        <h2 className="text-2xl md:text-4xl font-serif font-mediumbold">Education</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80 rounded-lg mt-6 mr-12" src={education} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-serif font-mediumbold leading-normal">
                +2(NON-MEDICAL)
                </h1>
                <p className="text-sm md:text-md font-normal font-mediumbold leading-tight">
                Samar Study Hall
                79.2% March 2021
                Kashipur, Uttarakhand
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-serif font-mediumbold leading-normal">
                ASPIRE LEADERSHIP PROGRAM
                </h1>
                <p className="text-sm md:text-md  leading-tight">
                Aspire Institute
                April 2024
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-serif font-mediumbold leading-normal">
                BACHELOR OF TECHNOLOGY
                </h1>
                <p className="text-sm md:text-md leading-tight">
                Eternal University
                7.04 OCPA till Sep 2024
                Baru Sahib, Sirmaur(H.P.)
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;