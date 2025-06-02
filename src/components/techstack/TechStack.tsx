"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

interface TechStackItem {
  name: string;
  description: string;
  progress: number;
  logo: string;
}

const techStack: TechStackItem[] = [
  {
    name: "Figma",
    description: "Designing intuitive with seamless collaboration",
    logo: "placeholder.com/150x100?text=Figma",
    progress: 90,
  },
  {
    name: "Figma",
    description: "Designing intuitive with seamless collaboration",
    logo: "placeholder.com/150x100?text=Figma",
    progress: 85,
  },
  {
    name: "Figma",
    description: "Designing intuitive with seamless collaboration",
    logo: "placeholder.com/150x100?text=Figma",
    progress: 70,
  },
  {
    name: "Figma",
    description: "Designing intuitive with seamless collaboration",
    logo: "placeholder.com/150x100?text=Figma",
    progress: 65,
  },
  {
    name: "Figma",
    description: "Designing intuitive with seamless collaboration",
    logo: "placeholder.com/150x100?text=Figma",
    progress: 50,
  },
];

interface ProgressCardProps {
  tech: TechStackItem;
  delay: number;
}

function ProgressCard({ tech, delay }: ProgressCardProps) {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(tech.progress);
    }, delay);

    return () => clearTimeout(timer);
  }, [tech.progress, delay]);

  return (
    <div className="relative overflow-hidden rounded-xl">
      {/* Glass card container */}
      <Card className="relative z-10 border-0 bg-white/20 backdrop-blur-md p-6 overflow-hidden">
        {/* Animated progress background */}
        <div
          className="absolute inset-0 bg-black transition-all duration-1500 ease-out"
          style={{
            width: `${animatedProgress}%`,
            left: 0,
            top: 0,
            bottom: 0,
          }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-xl bg-white/30 backdrop-blur-sm flex items-center justify-center shadow-sm">
              <img
                src={tech.logo || "/placeholder.svg"}
                alt={`${tech.name} logo`}
                className="w-8 h-8 object-contain"
              />
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
              <span className="text-sm font-medium text-white/90 bg-black/40 px-2 py-0.5 rounded-full backdrop-blur-sm">
                {tech.progress}%
              </span>
            </div>

            <p className="text-sm text-white/80">{tech.description}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default function TechStack() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="grid gap-4">
        {techStack.map((tech, index) => (
          <ProgressCard key={tech.name} tech={tech} delay={index * 200} />
        ))}
      </div>
    </div>
  );
}
