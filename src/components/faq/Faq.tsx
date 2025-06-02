import React from "react";
import SectionBadge from "@/components/SectionBadge";
import { projectsData } from "@/constants/ProjectsData";
import ProjectCard from "@/components/projects/ProjectCard";
import FAQSection from "@/components/faq/FaqSection";
import { Button } from "@/components/ui/button";
import { pricingData } from "@/constants/PricingData";
import { ServicesData } from "@/constants/ServicesData";
import { faqData } from "@/constants/FaqData";
import Link from "next/link";

const Faq = () => {
  return (
    <div
      className={`flex w-full flex-col justify-center items-center mt-20 pb-10`}
      id={`faq`}
    >
      <SectionBadge section="FAQ" />
      <div className="mx-5 flex w-full items-center justify-center text-center flex-col space-y-5 mt-10">
        <h1 className="font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:mx-[30vw] lg:break-words leading-tight">
          {faqData.title}
        </h1>
        <p className="text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl lg:mx-[35vw] lg:break-words leading-snug">
          {faqData.description}
        </p>
      </div>
      <div className={`w-full`}>
        <FAQSection />
      </div>
      <div>
        <p>Can't find your answer?</p>
        <Link href={`mailto:alexandrugeroc2007@gmail.com`}>
          <button
            className={`bg-button mt-5 text-white font-medium hover:cursor-pointer rounded-full px-6 py-3 hover:scale-[1.02] transition-transform`}
          >
            Send me an email
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Faq;
