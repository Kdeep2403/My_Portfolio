import React from "react";
import { FaAws, FaCss3, FaFigma, FaHtml5, FaJs, FaNode, FaPython, FaReact } from "react-icons/fa";


const Skills = () => {
  return (
    <div id="Skills" className="pt-10 pl-20 pr-20 ml-10 text-white">
      <h1 className="text-3xl md:text-4xl text-white font-serif font-mediumbold">Skills</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex md:w-4/5 gap-8 md:p-12">
          <span className="p-3 bg-zinc-950 flex flex-col items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
            <h5 className="text-white font-serif font-semibold items-center">HTML</h5>
          </span>

          <span className="p-3 bg-zinc-950 flex flex-col items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
            <h5 className="text-white font-serif font-semibold items-center">CSS</h5>
          </span>

          <span className="p-3 bg-zinc-950 flex flex-col items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
            <h5 className="text-white font-serif font-semibold items-center">JS</h5>
          </span>

          <span className="p-3 bg-zinc-950 flex flex-col items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
            <h5 className="text-white font-serif font-semibold items-center">React</h5>
          </span>

          <span className="p-3 bg-zinc-950 flex flex-col items-center rounded-2xl">
            <FaFigma color="#E829E8FF" size={50} />
            <h5 className="text-white font-serif font-semibold items-center">Figma</h5>
          </span>

          <span className="p-3 bg-zinc-950 flex flex-col items-center rounded-2xl">
            <FaPython color="#499DE2FF" size={50} />
            <h5 className="text-white font-serif font-semibold items-center">Python</h5>
          </span>

          <span className="p-3 bg-zinc-950 flex flex-col items-center rounded-2xl">
            <FaNode color="#6cc24a" size={50} />
            <h5 className="text-white font-serif font-semibold items-center">Node</h5>
          </span>
          <span className="p-3 bg-zinc-950 flex flex-col items-center rounded-2xl">
            <FaAws color="#FF9900" size={50} />
            <h5 className="text-white font-serif font-semibold items-center">AWS</h5>
          </span>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default Skills;