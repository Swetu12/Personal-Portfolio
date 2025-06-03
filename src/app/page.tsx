import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Projects from "@/components/projects/Projects";
import Testimonials from "@/components/Testimonials";
import MyProcess from "@/components/MyProcess";
import Pricing from "@/components/pricing/Pricing";
import TechStackComponent from "@/components/techstack/TechStackComponent";
import Faq from "@/components/faq/Faq";
import ReactLenis from "lenis/react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Web & Software Developer | Frontend & Backend Solutions",
  description:
    "Hi, I'm Alex – a passionate Web Developer specializing in modern, fast, and scalable websites. I focus on frontend development and Strapi backend integration, delivering seamless digital experiences that help businesses grow online.",
  alternates: {
    canonical: "https://www.halexxwebdev.com/",
  },
  openGraph: {
    url: "https://www.halexxwebdev.com",
    title: "Web & Software Developer | Frontend & Backend Solutions",
    description:
      "Providing web development, frontend, backend with Strapi, and website maintenance services.",
    siteName: "Halexx Web Dev",
  },
};

const Page = () => {
  return (
    <>
      <ReactLenis root={true}>
        <Navbar />
        <Hero />
        <ScrollReveal>
          <Services />
        </ScrollReveal>
        <ScrollReveal>
          <Projects />
        </ScrollReveal>
        <ScrollReveal>
          <Testimonials />
        </ScrollReveal>
        <ScrollReveal>
          <MyProcess />
        </ScrollReveal>
        <ScrollReveal>
          <Pricing />
        </ScrollReveal>
        <ScrollReveal>
          <TechStackComponent />
        </ScrollReveal>
        <ScrollReveal>
          <Faq />
        </ScrollReveal>
      </ReactLenis>
    </>
  );
};

export default Page;
