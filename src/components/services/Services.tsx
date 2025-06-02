import React from "react";
import SectionBadge from "@/components/SectionBadge";
import { ServicesData } from "@/constants/ServicesData";
import ServicesFolders from "@/components/services/ServicesFolders";

const Services = () => {
  return (
    <div
      className="w-full flex flex-col items-center justify-center mt-20 pb-10"
      id={`services`}
    >
      <SectionBadge section="Services" />

      <div className="mx-5 flex w-full items-center justify-center text-center flex-col space-y-5 mt-10">
        <h1 className="font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:mx-[30vw] lg:break-words leading-tight">
          {ServicesData.title}
        </h1>
        <p className="text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl lg:mx-[35vw] lg:break-words leading-snug">
          {ServicesData.description}
        </p>
      </div>

      <div className="mt-5">
        <ServicesFolders />
      </div>
    </div>
  );
};

export default Services;
