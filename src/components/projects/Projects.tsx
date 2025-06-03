import React from "react";
import SectionBadge from "@/components/SectionBadge";
import { projectsData } from "@/constants/ProjectsData";
import ProjectCard from "@/components/projects/ProjectCard";
import { ServicesData } from "@/constants/ServicesData";

const Projects = () => {
  return (
    <div
      className={`flex w-full flex-col justify-center items-center mt-20 pb-10`}
      id={`projects`}
    >
      <SectionBadge section="Projects" />
      <div className="mx-5 flex w-full items-center justify-center text-center flex-col space-y-5 mt-10">
        <h1 className="font-medium mx-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:mx-[30vw] lg:break-words leading-tight">
          {projectsData.title}
        </h1>
        <p className="text-gray-500 mx-5 text-sm sm:text-base md:text-lg lg:text-xl lg:mx-[35vw] lg:break-words leading-snug">
          {projectsData.description}
        </p>
      </div>
      <div className={`mx-5`}>
        <ProjectCard />
      </div>
    </div>
  );
};
export default Projects;
