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
import { AuroraBackground } from "@/components/ui/aurora-background";

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
