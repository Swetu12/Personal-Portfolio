import React from "react";
import SectionBadge from "@/components/SectionBadge";
import { projectsData } from "@/constants/ProjectsData";
import { PricingCard } from "@/components/pricing/PricingCard";
import { ServicesData } from "@/constants/ServicesData";
import { pricingData } from "@/constants/PricingData";

const Pricing = () => {
  return (
    <div
      className={`flex w-full flex-col justify-center items-center mt-20 pb-10`}
      id={`pricing`}
    >
      <SectionBadge section="Pricing" />
      <div className="mx-5 flex w-full items-center justify-center text-center flex-col space-y-5 mt-10">
        <h1 className="font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:mx-[30vw] lg:break-words leading-tight">
          {pricingData.title}
        </h1>
        <p className="text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl lg:mx-[35vw] lg:break-words leading-snug">
          {pricingData.description}
        </p>
      </div>
      <div className={`mt-10`}>
        <PricingCard />
      </div>
    </div>
  );
};
export default Pricing;
