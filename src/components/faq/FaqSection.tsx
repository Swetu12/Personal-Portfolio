"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Palette,
  Smartphone,
  Zap,
  Wrench,
  RefreshCw,
} from "lucide-react";

const faqData = [
  {
    id: "item-1",
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in modern web technologies including Next.js, React, Tailwind CSS, TypeScript, JavaScript, and Strapi. These tools allow me to build fast, responsive, and scalable web applications from scratch.",
    icon: <Code className="w-4 h-4" />,
    category: "Technical",
  },
  {
    id: "item-2",
    question: "How long does a typical project take?",
    answer:
      "It depends on the complexity and features. A basic landing page usually takes 1–2 weeks, while a dynamic website or CMS-powered platform can take 3–6 weeks. I’ll always provide a clear timeline after we define your goals.",
    icon: <Zap className="w-4 h-4" />,
    category: "Process",
  },
  {
    id: "item-3",
    question: "Do you provide responsive design?",
    answer:
      "Yes, every website I build is fully responsive—optimized for desktops, tablets, and smartphones. I use mobile-first principles to ensure consistent design and functionality across all screen sizes.",
    icon: <Smartphone className="w-4 h-4" />,
    category: "Design",
  },
  {
    id: "item-4",
    question: "What's included in your web development service?",
    answer:
      "I handle both design and development, including frontend and backend setup (with Strapi CMS if needed), SEO, performance optimization, and deployment. You'll also get help with hosting, content structuring, and bug fixes.",
    icon: <Palette className="w-4 h-4" />,
    category: "Services",
  },
  {
    id: "item-5",
    question: "Do you offer ongoing maintenance and support?",
    answer:
      "Yes, I offer flexible support packages that include regular updates, bug fixes, backups, and feature improvements. Whether it’s once a month or on-demand, I’m here to help post-launch.",
    icon: <RefreshCw className="w-4 h-4" />,
    category: "Support",
  },
  {
    id: "item-6",
    question: "Can you work with existing codebases?",
    answer:
      "Absolutely. I’m comfortable jumping into existing projects—whether it’s for feature updates, bug fixing, or a complete refactor. I always start with a detailed code review to understand your setup.",
    icon: <Wrench className="w-4 h-4" />,
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
