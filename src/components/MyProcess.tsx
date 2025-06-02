"use client";

import React from "react";
import SectionBadge from "@/components/SectionBadge";
import { myprocess } from "@/constants/MyProcess";
import { motion } from "framer-motion";
import { ServicesData } from "@/constants/ServicesData";

const MyProcess = () => {
  return (
    <div
      className="flex w-full flex-col justify-center items-center mt-20 pb-10"
      id={`process`}
    >
      <SectionBadge section="Process" />
      <div className="mx-5 flex w-full items-center justify-center text-center flex-col space-y-5 mt-10 pb-10">
        <h1 className="font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:mx-[30vw] lg:break-words leading-tight">
          {myprocess.title}
        </h1>
        <p className="text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl lg:mx-[35vw] lg:break-words leading-snug">
          {myprocess.description}
        </p>
      </div>
      <TimelineFunc />
    </div>
  );
};

export default MyProcess;

export function TimelineFunc() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gray-300"></div>

        <div className="space-y-12">
          {myprocess.steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative flex items-start"
            >
              {/* Timeline dot */}
              <div className="relative z-10 flex-shrink-0 mt-1.5 ml-1">
                <div className="w-4 h-4 bg-black rounded-full border-4 border-white shadow-md"></div>
                <div className="absolute inset-0 w-4 h-4 bg-blue-500 rounded-full animate-ping opacity-20"></div>
              </div>

              {/* Timeline content */}
              <div className="ml-8 flex-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
                  className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-semibold text-white bg-black px-3 py-1 rounded-full">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.planText}
                  </h3>

                  <p className="text-gray-700 leading-relaxed">{item.plan}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
