"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Smartphone, Zap } from "lucide-react";

const faqData = [
  {
    id: "item-1",
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in modern web technologies including React, Next.js, TypeScript, Node.js, and Tailwind CSS. I also have experience with databases like PostgreSQL and MongoDB, and deployment platforms like Vercel and AWS.",
    icon: <Code className="w-4 h-4" />,
    category: "Technical",
  },
  {
    id: "item-2",
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity and scope. A simple landing page typically takes 1-2 weeks, while a full-stack web application can take 4-8 weeks. I provide detailed timelines during our initial consultation.",
    icon: <Zap className="w-4 h-4" />,
    category: "Process",
  },
  {
    id: "item-3",
    question: "Do you provide responsive design?",
    answer:
      "All websites I develop are fully responsive and optimized for desktop, tablet, and mobile devices. I follow mobile-first design principles to ensure optimal performance across all screen sizes.",
    icon: <Smartphone className="w-4 h-4" />,
    category: "Design",
  },
  {
    id: "item-4",
    question: "What's included in your web development service?",
    answer:
      "My services include UI/UX design, frontend and backend development, database setup, API integration, performance optimization, SEO implementation, testing, and deployment. I also provide post-launch support and maintenance.",
    icon: <Palette className="w-4 h-4" />,
    category: "Services",
  },
  {
    id: "item-5",
    question: "Do you offer ongoing maintenance and support?",
    answer:
      "Yes, I offer comprehensive maintenance packages including security updates, performance monitoring, content updates, bug fixes, and feature enhancements. Support packages are customized based on your specific needs.",
    icon: <Zap className="w-4 h-4" />,
    category: "Support",
  },
  {
    id: "item-6",
    question: "Can you work with existing codebases?",
    answer:
      "Definitely! I have experience working with legacy code, refactoring existing applications, adding new features to established projects, and migrating applications to modern frameworks. I always conduct a thorough code review first.",
    icon: <Code className="w-4 h-4" />,
    category: "Technical",
  },
];

const categoryColors = {
  Technical: "bg-blue-100 text-blue-800 border-blue-200",
  Process: "bg-green-100 text-green-800 border-green-200",
  Design: "bg-purple-100 text-purple-800 border-purple-200",
  Services: "bg-orange-100 text-orange-800 border-orange-200",
  Support: "bg-pink-100 text-pink-800 border-pink-200",
};

export default function FAQSection() {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* FAQ Accordion */}
        <div className="space-y-4">
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-4 rounded-full"
          >
            {faqData.map((faq, index) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="group border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <AccordionTrigger className="flex items-center rounded-full gap-4 px-6 py-5 text-left hover:no-underline hover:bg-gray-50/50 transition-colors duration-200 [&[data-state=open]]:bg-gray-50/80">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-200">
                      {faq.icon}
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-3">
                        <h3 className="font-semibold text-gray-900 text-lg leading-tight">
                          {faq.question}
                        </h3>
                        <Badge
                          variant="outline"
                          className={`text-xs font-medium ${categoryColors[faq.category as keyof typeof categoryColors]}`}
                        >
                          {faq.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="pl-14 pr-4">
                    <p className="text-gray-600 leading-relaxed text-base">
                      {faq.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
