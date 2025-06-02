import { GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react";

export const halexxProfile = [
  {
    image: "/hero/halexx.webp",
    name: "Alexandru Geroc",
    title: "Web Developer",
    availability: "Open For Work",
    bio: {
      title: "👋 Nice to see you here, I'm Aiden Wolfe.",
      description:
        "I’m a passionate web developer and UI/UX designer dedicated to building visually stunning and highly functional digital experiences. With expertise in Figma, Framer, Photoshop, and Illustrator, I bridge the gap between design and development, ensuring every project is both aesthetically captivating and technically seamless.",
      mySkills: "My Skills",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
      ],
      myExperience: "Work Experience",
      experience: [
        {
          title: "Web Developer",
          company: "Freelance",
          duration: "2022 - Present",
          description:
            "Developed and maintained responsive websites and web applications for various clients, ensuring optimal performance and user experience.",
        },
        {
          title: "UI/UX Designer",
          company: "Freelance",
          duration: "2021 - Present",
          description:
            "Designed user interfaces and experiences for web applications, focusing on usability and aesthetics.",
        },
      ],
    },
    socials: [
      {
        name: "GitHub",
        url: "https://github.com/Swetu12",
        icon: GithubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/geroc-alexandru-553838321/",
        icon: LinkedinIcon,
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/halexx.webdev/",
        icon: InstagramIcon,
      },
    ],
  },
];
