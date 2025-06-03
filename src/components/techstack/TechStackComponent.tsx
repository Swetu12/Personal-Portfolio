import React from "react";
import SectionBadge from "@/components/SectionBadge";
import { projectsData } from "@/constants/ProjectsData";
import ProjectCard from "@/components/projects/ProjectCard";
import TechStack from "@/components/techstack/TechStack";
import { techStackData } from "@/constants/TechStackData";
import { ServicesData } from "@/constants/ServicesData";

const TechStackComponent = () => {
  return (
    <div
      className={`flex w-full flex-col justify-center items-center mt-20 pb-10`}
      id={`toolkit`}
    >
      <SectionBadge section="Toolkit" />
      <div className="mx-5 flex w-full items-center justify-center text-center flex-col space-y-5 mt-10">
        <h1 className="mx-5 font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:mx-[30vw] lg:break-words leading-tight">
          {techStackData.title}
        </h1>
        <p className="mx-5 text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl lg:mx-[35vw] lg:break-words leading-snug">
          {techStackData.description}
        </p>
      </div>
      <div className={`w-full mt-10`}>
        <TechStack />
      </div>
    </div>
  );
};
export default TechStackComponent;
