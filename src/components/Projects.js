import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="pt-10 pl-20 pr-20 ml-10 text-white ">
      <h1 className="text-3xl md:text-4xl text-white font-serif font-mediumbold">Projects</h1>
      <div className="py-12 px-6 font-serif font-mediumbold text-justify flex flex-wrap gap-5">
          <ProjectCard
            title="Quiz Website"
            main="This is a quiz website created in html, css and js. Quiz Website aimed at enhancing the educational experience and fostering creative thinking skills among students."/>
          <ProjectCard
              title="Portfolio Website"
              main="This portfolio website is built using React for dynamic component management and Tailwind CSS for a modern, responsive design."/>
          <ProjectCard
            title="Blogging Website"
            main="This is a blogging website created in react, node js, express and mongodb woth tailwindCSS and used some component library."/>
      </div>
    </div>
  );
};

export default Projects;