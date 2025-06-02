"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    image: "/placeholder.svg?height=240&width=320",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=240&width=320",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=240&width=320",
  },
  {
    id: 4,
    image: "/placeholder.svg?height=240&width=320",
  },
  {
    id: 5,
    image: "/placeholder.svg?height=240&width=320",
  },
  {
    id: 6,
    image: "/placeholder.svg?height=240&width=320",
  },
  {
    id: 7,
    image: "/placeholder.svg?height=240&width=320",
  },
  {
    id: 8,
    image: "/placeholder.svg?height=240&width=320",
  },
];

export default function ProjectSlider() {
  const [translateX, setTranslateX] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const cardWidth = 420; // Width of each frame + gap
  const totalWidth = projects.length * cardWidth;

  // Duplicate projects for seamless looping
  const duplicatedProjects = [...projects, ...projects, ...projects];

  useEffect(() => {
    if (!isAutoPlaying || isPaused) return;

    const interval = setInterval(() => {
      setTranslateX((prev) => {
        const newTranslateX = prev - 1;
        // Reset when we've moved past the first set of duplicated items
        if (Math.abs(newTranslateX) >= totalWidth) {
          return 0;
        }
        return newTranslateX;
      });
    }, 30); // Smooth 30fps animation

    return () => clearInterval(interval);
  }, [isAutoPlaying, isPaused, totalWidth]);

  const slideLeft = () => {
    setIsAutoPlaying(false);
    setTranslateX((prev) => {
      const newTranslateX = prev + cardWidth;
      if (newTranslateX > 0) {
        return -(totalWidth - cardWidth);
      }
      return newTranslateX;
    });
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const slideRight = () => {
    setIsAutoPlaying(false);
    setTranslateX((prev) => {
      const newTranslateX = prev - cardWidth;
      if (Math.abs(newTranslateX) >= totalWidth) {
        return 0;
      }
      return newTranslateX;
    });
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  return (
    <div className="relative w-full max-w-full mx-auto">
      {/* Slider Container */}
      <div className="relative">
        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-slate-200 dark:border-slate-700 shadow-xl hover:bg-white dark:hover:bg-slate-900 hover:scale-110 transition-all duration-200"
          onClick={slideLeft}
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-slate-200 dark:border-slate-700 shadow-xl hover:bg-white dark:hover:bg-slate-900 hover:scale-110 transition-all duration-200"
          onClick={slideRight}
        >
          <ChevronRight className="w-5 h-5" />
        </Button>

        {/* Slider Track */}
        <div
          className="overflow-x-hidden rounded-2xl bg-transparent p-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={sliderRef}
            className="flex gap-8 transition-transform duration-300 ease-out"
            style={{ transform: `translateX(${translateX}px)` }}
          >
            {duplicatedProjects.map((project, index) => (
              <div
                key={`${project.id}-${index}`}
                className="flex-shrink-0 w-96 md:w-[600px] group cursor-pointer"
              >
                {/* Frame Container */}
                <div className="relative p-4 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                  {/* Inner Frame */}
                  <div className="relative bg-white dark:bg-slate-900 p-3 rounded-xl shadow-inner">
                    {/* Thumbnail */}
                    <div className="relative overflow-hidden rounded-lg bg-slate-50 dark:bg-slate-800">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={`Project ${project.id}`}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />

                      {/* Corner Decorations */}
                      <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-white/50 rounded-tl-md" />
                      <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-white/50 rounded-tr-md" />
                      <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-white/50 rounded-bl-md" />
                      <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-white/50 rounded-br-md" />
                    </div>
                  </div>

                  {/* Frame Shadow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-black/10 pointer-events-none" />

                  {/* Frame Highlight */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tl from-transparent via-transparent to-white/20 pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Auto-play Indicator */}
        <div className="flex items-center justify-center mt-6 gap-3">
          <div
            className={`w-2 h-2 rounded-full transition-colors ${isAutoPlaying && !isPaused ? "bg-green-500" : "bg-slate-300 dark:bg-slate-600"}`}
          />
          <span className="text-sm text-slate-500 dark:text-slate-400">
            {isAutoPlaying && !isPaused ? "Auto-playing" : "Paused"}
          </span>
        </div>
      </div>
    </div>
  );
}
