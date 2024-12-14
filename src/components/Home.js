import React from "react";
import photo from "../assets/photo.jpeg";
import TextChange from "./TextChange";

const Home = () => {
  return (
    <div className="text-white flex justify-center mt-10 mb-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-mediumbold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl font-serif font-mediumbold tracking-tight ">
          I'm from Uttarakhand and currently I'm a student at Eternal University.
        </p>
        <button className="mt-5 md:md-10 text-white font-serif py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-normal rounded-3xl bg-[#465697]"><a href="#Footer">
          Contact Me
        </a></button>
      </div>
      <div>
        <img
          className="rounded-full h-80 w-80 ml-20 shadow-lg border-4 border-white justify-center"
          src={photo}
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default Home;