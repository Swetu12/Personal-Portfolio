import React from "react";
import { projectsData } from "@/constants/ProjectsData";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ReactLenis from "lenis/react";

export const metadata = {
  title: "Web & Software Developer | Frontend & Backend Solutions",
  description:
    "Hi, I'm Alex – a passionate Web Developer specializing in modern, fast, and scalable websites. I focus on frontend development and Strapi backend integration, delivering seamless digital experiences that help businesses grow online.",
  alternates: {
    canonical: "https://www.halexxwebdev.com",
  },
  openGraph: {
    url: "https://www.halexxwebdev.com",
    title: "Web & Software Developer | Frontend & Backend Solutions",
    description:
      "Providing web development, frontend, backend with Strapi, and website maintenance services.",
    siteName: "Halexx Web Dev",
  },
};

type Props = {
  params: { slug: string };
};

const Projects = ({ params }: Props) => {
  const project = projectsData.projects.find((p) => p.slug === params.slug);
  const paragraphs = project?.overview.split("\n").filter(Boolean);

  if (!project) {
    notFound();
  }

  return (
    <ReactLenis root={true}>
      <div>
        <div
          className={`mt-20 mx-3 md:max-w-[700px] lg:max-w-[1000px] md:mx-auto`}
        >
          <Link href="/">
            <div className="mb-10 flex flex-row items-center space-x-2 hover:cursor-pointer group">
              <ArrowLeft className="w-14 h-14 text-black bg-gray-100 rounded-full p-4 shadow-2xl hover:bg-gray-200 transition-colors" />
              <p className="font-medium shadow-2xl transition-transform duration-300 group-hover:translate-x-2">
                Back to home
              </p>
            </div>
          </Link>

          {/* Project Header */}
          <ScrollReveal>
            <div className={`bg-white rounded-4xl p-1 space-y-3`}>
              <div className="bg-gray-100 flex w-full items-center justify-center rounded-4xl">
                <div className="flex flex-col md:flex-row items-center md:items-center md:justify-between w-full p-3 space-y-3 md:space-y-0 md:space-x-4">
                  <Image
                    src={project.logo}
                    alt={project.title}
                    width={80}
                    height={80}
                    className="p-1 rounded-full"
                  />
                  <div className="flex flex-col items-center md:items-start justify-center md:justify-start text-center md:text-left flex-1">
                    <p className="font-medium">{project.title}</p>
                    <p className="text-gray-500 text-sm">
                      {project.description}
                    </p>
                  </div>
                  <Link href={project.link} target={`_blank`}>
                    <Button className="rounded-full mt-3 md:mt-0 p-7 hover:cursor-pointer font-medium bg-button">
                      {project.buttonText}
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="relative max-w-[380px] md:max-w-[700px] lg:max-w-[1000px] hover:cursor-pointer mx-auto h-auto rounded-4xl overflow-hidden shadow-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Icons */}
          <ScrollReveal>
            <div className="mt-5 space-y-3 md:space-y-0 md:flex md:space-x-2 md:items-stretch w-full">
              {project.icons.map((icon, index) => {
                const Icon = icon.icon;
                return (
                  <div key={index} className="flex-1">
                    <div className="h-full bg-white rounded-4xl shadow-2xl flex flex-col items-center justify-center space-y-4 p-6">
                      <div className="flex items-center justify-center">
                        <Icon className="w-16 h-16 text-black bg-gray-100 rounded-full p-4" />
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-500">{icon.name}</p>
                        <p className="font-medium">{icon.title}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Overview */}
          <ScrollReveal>
            <div className="bg-white rounded-4xl shadow-2xl mt-8 p-1 md:p-3">
              <h2 className="text-2xl font-semibold mb-4 ml-5 mt-5 text-gray-800">
                {project.overviewText}
              </h2>
              <div className="bg-gray-100 p-6 rounded-4xl text-gray-700 leading-relaxed space-y-4">
                {paragraphs?.map((para, index) => (
                  <p key={index} className="flex items-start gap-2">
                    {para.trim().startsWith("✅") ? (
                      <>
                        <span>✅</span>
                        <span>{para.replace("✅", "").trim()}</span>
                      </>
                    ) : (
                      <span>{para}</span>
                    )}
                  </p>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Project Images */}
          <ScrollReveal>
            <div
              className={`bg-white rounded-4xl shadow-2xl p-1 space-y-2 md:p-3 mt-5`}
            >
              {project.images.map((image, index) => (
                <div
                  className="relative max-w-[380px] md:max-w-[700px] lg:max-w-[1000px] hover:cursor-pointer mx-auto h-auto aspect-video rounded-4xl overflow-hidden shadow-lg"
                  key={index}
                >
                  <Image
                    src={image}
                    alt={`${project.title} image ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1000px"
                    className="object-cover"
                    quality={90}
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </ReactLenis>
  );
};

export default Projects;
