import { Calendar, PencilRuler, User } from "lucide-react";

export const projectsData = {
  title: "Crafted to Impress, Built to Perform",
  description:
    "Explore a showcase of designs that blend creativity, strategy, and seamless execution",
  projects: [
    {
      title: "FVS Agency",
      slug: "fvs-agency",
      description: "A Modern Web Development & Marketing Agency",
      logo: "/clients_logos/fvsagency.svg",
      link: "https://fvsagency.vercel.app/",
      buttonText: "Live Preview",
      image: "/mockups/fvsmockup.svg",
      icons: [
        {
          name: "Client",
          icon: User,
          title: "FVS Agency",
        },
        {
          name: "Service",
          icon: PencilRuler,
          title: "Web Development",
        },
        {
          name: "Date",
          icon: Calendar,
          title: "2025",
        },
      ],
      overviewText: "Overview",
      overview:
        "FVS Agency is a dynamic platform crafted to empower digital ventures with scalable, modern web solutions.\n\n🚀 Built using the latest technologies like Next.js, React, Tailwind CSS and TypeScript, it delivers a fast, responsive, and user-friendly experience.\n\n💼 Designed for our agency, FVS Agency showcases a strong portfolio, SaaS development services, and AI-enhanced tools adapted to help businesses grow and scale.\n\nKey Features:\n\n✅ Built with Next.js and React for seamless server-side rendering and smooth client-side interactions.\n✅ Tailwind CSS for fully responsive, mobile-first design across all devices.\n✅ Modular architecture that allows for scalability and future enhancements.\n✅ AI chatbot integration with customizable knowledge bases to automate customer support.\n✅ Deployed on Vercel for high-speed global performance.\n\n✨ FVS Agency blends high-performance engineering with sleek design to create a powerful digital presence that attracts, engages, and converts.\n",
      images: [
        "/mockups/fvsagency3.png",
        "/mockups/fvsagency2.png",
        "/mockups/fvsagency1.png",
      ],
    },
    {
      title: "Dimasc",
      slug: "dimasc",
      description: "A Modern Digital Marketing SaaS Platform",
      logo: "/clients_logos/dimasc.svg",
      link: "https://dimaglandingpage.vercel.app/",
      buttonText: "Live Preview",
      image: "/mockups/dimascmockup.svg",
      icons: [
        {
          name: "Client",
          icon: User,
          title: "Dimasc",
        },
        {
          name: "Service",
          icon: PencilRuler,
          title: "SaaS Frontend Development",
        },
        {
          name: "Date",
          icon: Calendar,
          title: "2025",
        },
      ],
      overviewText: "Overview",
      overview:
        "This AI Digital Marketing SaaS Platform is a groundbreaking solution built to transform how businesses manage and scale their online presence. Designed in collaboration with a dedicated partner, this powerful tool combines cutting-edge AI technologies with practical marketing workflows to empower users with actionable insights and automation.\n\n" +
        "Built using Next.js and TypeScript, the frontend delivers a seamless, responsive, and intuitive experience. From AI-powered tools to deep data integration, the platform is packed with features to boost productivity and marketing results.\n\n" +
        "✨ Key Features:\n\n" +
        "✅ AI Email Generation for engaging campaigns.\n" +
        "✅ AI Idea Generation for endless marketing inspiration.\n" +
        "✅ AI Script Generator tailored for digital ads and content.\n" +
        "✅ In-depth SEO Generation to boost organic visibility.\n" +
        "✅ Smart Digital Ads Generator for optimized ad content.\n" +
        "✅ CSV/JSON import tool to analyze and visualize ad performance.\n" +
        "✅ Auto-generated PDF reports for professional insights.\n" +
        "✅ A Notion-like Notes system for organized planning.\n" +
        "✅ A flexible Data center to store, edit, and manage all platform inputs.\n\n" +
        "🧠 Throughout the development process, I learned how to:\n" +
        "- Build scalable and modular folder architectures.\n" +
        "- Optimize applications for speed and maintainability.\n" +
        "- Solve complex problems from scratch without prior knowledge.\n" +
        "- Refactor and structure cleaner, more efficient code.\n" +
        "- Implement deep and advanced React functionalities.\n\n" +
        "This project reflects not just powerful AI capabilities, but also a relentless commitment to learning, solving, and delivering a top-tier user experience.\n\n" +
        "🚀 This platform is the future of digital marketing — fast, intelligent, and tailored for growth.",
      images: [
        "/mockups/dimasc1.png",
        "/mockups/dimasc2.png",
        "/mockups/dimasc3.png",
        "/mockups/dimasc4.png",
        "/mockups/dimasc5.png",
        "/mockups/dimasc6.png",
        "/mockups/dimasc7.png",
        "/mockups/dimasc8.png",
        "/mockups/dimasc9.png",
      ],
    },
  ],
};
