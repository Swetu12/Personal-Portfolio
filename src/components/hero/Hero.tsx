"use client";

import React from "react";
import { Star } from "lucide-react";
import { heroData } from "@/constants/HeroData";
import { Button } from "@/components/ui/button";
import ProjectSlider from "@/components/hero/ProjectSlider";

const Hero = () => {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="mt-10 w-full flex-col flex items-center justify-center">
        {/* Star Rating */}
        <div className="bg-white px-2 py-1 rounded-full">
          <div className="flex flex-row space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-black" />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center space-y-5 justify-center mt-5 w-full">
          <div className="text-center px-4 sm:px-6 md:px-10 lg:px-[10vw] space-y-2 w-full max-w-screen-xl">
            <h1 className="font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:break-words leading-tight">
              {heroData.title}
            </h1>
            <p className="text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl lg:mx-10 leading-snug">
              {heroData.description}
            </p>
          </div>

          <Button
            onClick={() => handleScroll("pricing")}
            className="rounded-full p-7 hover:cursor-pointer font-medium bg-button"
          >
            {heroData.button}
          </Button>
        </div>

        {/* Slider */}
        <div className="mt-10 w-full">
          <ProjectSlider />
        </div>
      </div>
    </>
  );
};

export default Hero;
