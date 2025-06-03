"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  House,
  PencilRuler,
  PenTool,
  MessageSquareText,
  Inbox,
  ShieldQuestion,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const dockItems = [
  { icon: House, label: "Home", color: "text-black", targetId: "home" },
  {
    icon: PencilRuler,
    label: "Services",
    color: "text-black",
    targetId: "services",
  },
  {
    icon: PenTool,
    label: "Projects",
    color: "text-black",
    targetId: "projects",
  },
  {
    icon: MessageSquareText,
    label: "Testimonials",
    color: "text-black",
    targetId: "testimonials",
  },
  { icon: Inbox, label: "Toolkit", color: "text-black", targetId: "toolkit" },
  { icon: ShieldQuestion, label: "FAQ", color: "text-black", targetId: "faq" },
];

export default function DockNavigation() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  const handleScroll = (id: string) => {
    if (pathname !== "/") {
      // Store the target section ID in sessionStorage
      sessionStorage.setItem("scrollToId", id);
      router.push("/");
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // When landing on homepage, scroll to the stored ID if it exists
  useEffect(() => {
    const id = sessionStorage.getItem("scrollToId");
    if (id) {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        sessionStorage.removeItem("scrollToId");
      }
    }
  }, []);

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="relative">
        {/* Dock Container */}
        <div className="flex items-end gap-1 bg-white backdrop-blur-md py-1 px-1 rounded-full shadow-lg border border-white/20 max-w-[90vw] sm:max-w-none">
          <div className="flex items-end gap-1 bg-gray-200 rounded-full sm:px-4">
            {dockItems.map((item, index) => {
              const Icon = item.icon;
              const isHovered = hoveredIndex === index;
              const isAdjacent =
                hoveredIndex !== null && Math.abs(hoveredIndex - index) === 1;
              const scale = isHovered
                ? "scale-125"
                : isAdjacent
                  ? "scale-110"
                  : "scale-100";

              return (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Tooltip */}
                  <div
                    className={`absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded-md whitespace-nowrap transition-all duration-200 ${
                      isHovered
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-1 pointer-events-none"
                    }`}
                  >
                    {item.label}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-900"></div>
                  </div>

                  {/* Icon Button */}
                  <button
                    onClick={() => handleScroll(item.targetId)}
                    className={`relative p-3 rounded-xl hover:cursor-pointer transition-all duration-300 ease-out ${scale} active:scale-95`}
                  >
                    <Icon
                      className={`w-6 h-6 ${item.color} transition-colors duration-200`}
                    />
                    <div
                      className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-400 rounded-full transition-all duration-200 ${
                        isHovered
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-75"
                      }`}
                    ></div>
                  </button>
                </div>
              );
            })}
          </div>

          <Button
            type="submit"
            onClick={() => handleScroll("pricing")}
            className="rounded-full hidden md:flex hover:cursor-pointer p-6 bg-button text-white font-medium hover:scale-[1.02] transition-transform"
          >
            View Plans & Pricing
          </Button>
        </div>

        {/* Dock reflection effect */}
        <div className="absolute top-full left-0 right-0 h-8 bg-gradient-to-b from-white/10 to-transparent rounded-b-2xl transform scale-y-[-1] opacity-30"></div>
      </div>
    </div>
  );
}
