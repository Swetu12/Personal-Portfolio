"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projectsData } from "@/constants/ProjectsData";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

const ProjectCard = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="mt-20 space-y-7">
      {projectsData.projects.map((project, index) => (
        <div key={index}>
          <Link href={`/projects/${project.slug}`}>
            <div
              className="relative max-w-[500px] md:max-w-[600px] hover:cursor-pointer mx-auto h-auto rounded-4xl overflow-hidden shadow-lg"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={800} // intrinsic width for optimization
                height={480} // intrinsic height for optimization
                sizes="(max-width: 768px) 90vw, 800px" // responsive sizes
                className={clsx(
                  "w-full h-auto object-cover transition-transform duration-500 ease-in-out",
                  {
                    "scale-110": hoveredIndex !== index,
                    "scale-100": hoveredIndex === index,
                  },
                )}
              />

              <div className="absolute inset-0 p-2 flex items-end">
                <div
                  className={clsx(
                    "bg-white flex flex-row space-x-3 items-center rounded-full w-full",
                    "transition-none",
                    "md:transition-transform md:duration-500 md:transform",
                    {
                      "md:translate-y-0": hoveredIndex === index,
                      "md:translate-y-full": hoveredIndex !== index,
                    },
                  )}
                >
                  <Image
                    src={project.logo}
                    alt={project.title}
                    width={80}
                    height={80}
                    className="p-2 rounded-full"
                  />
                  <div className="flex w-full items-center justify-between pr-3">
                    <div>
                      <p className="font-medium text-lg">{project.title}</p>
                      <p className="text-gray-500 text-sm hidden md:block">
                        {project.description}
                      </p>
                    </div>
                    <Button className="md:flex items-center hover:cursor-pointer hidden hover:bg-gray-300 justify-center flex-row bg-gray-200 rounded-full py-7 px-3 text-black">
                      View Project <ArrowRight />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
