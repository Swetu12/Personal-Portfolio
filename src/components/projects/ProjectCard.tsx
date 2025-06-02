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
    <div className="mt-20 space-y-5">
      {projectsData.projects.map((project, index) => (
        <div key={index}>
          <Link href={`/projects/${project.slug}`}>
            <div
              className="relative max-w-[380px] md:max-w-[600px] hover:cursor-pointer mx-auto h-auto rounded-4xl overflow-hidden shadow-lg"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className={clsx(
                  "w-full h-auto object-cover transition-transform duration-500 ease-in-out",
                  {
                    "scale-110": hoveredIndex !== index,
                    "scale-100": hoveredIndex === index,
                  },
                )}
              />

              <div className="absolute inset-0 p-1 flex items-end">
                <div
                  className={clsx(
                    "bg-white flex flex-row space-x-2 items-center rounded-full w-full",
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
                    width={60}
                    height={60}
                    className="p-1 rounded-full"
                  />
                  <div className="flex w-full items-center justify-between pr-1">
                    <div>
                      <p className="font-medium">{project.title}</p>
                      <p className="text-gray-500 text-xs hidden md:block">
                        {project.description}
                      </p>
                    </div>
                    <Button className="flex items-center hover:cursor-pointer hover:bg-gray-300 justify-center flex-row bg-gray-200 rounded-full py-6 px-1 text-black">
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
