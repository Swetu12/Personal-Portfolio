'use client'

import React, { useState } from "react";
import SectionBadge from "@/components/SectionBadge";
import { testimonials } from "@/constants/Testimonials";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const nextReview = () => {
    setCurrent((prev) => (prev + 1) % testimonials.reviews.length);
  };

  const prevReview = () => {
    setCurrent((prev) =>
        prev === 0 ? testimonials.reviews.length - 1 : prev - 1
    );
  };

  const review = testimonials.reviews[current];

  return (
      <div
          className="flex w-full flex-col justify-center items-center mt-20 pb-10"
          id="testimonials"
      >
        <SectionBadge section="Testimonials" />
        <div className="mx-5 flex w-full items-center justify-center text-center flex-col space-y-5 mt-10 pb-10">
          <h1 className="mx-5 font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:mx-[30vw] leading-tight">
            {testimonials.title}
          </h1>
          <p className="mx-5 text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl lg:mx-[35vw] leading-snug">
            {testimonials.description}
          </p>
        </div>

        {/* Only render the current review */}
        <div className="mx-5 mt-10 lg:max-w-[1000px] transition-all duration-500">
          <div className="bg-white rounded-4xl p-1 shadow-2xl">
            <div className="bg-gray-100 rounded-4xl p-7 md:p-14">
              <div className="flex flex-row items-center space-x-3">
                <Image
                    src={review.image}
                    alt={review.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                />
                <div>
                  <h1 className="font-medium">{review.name}</h1>
                  <p className="text-gray-500 text-sm">{review.job}</p>
                </div>
              </div>
              <p className="mt-5">{review.review}</p>
              <div className="flex flex-row space-x-1 mt-5">
                {Array(5)
                    .fill(null)
                    .map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-black" />
                    ))}
              </div>
            </div>
            <div className="w-full flex items-center justify-center space-x-2 pb-3 mt-5">
              <Button className="rounded-full" onClick={prevReview}>
                <ArrowLeft />
              </Button>
              <Button className="rounded-full" onClick={nextReview}>
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Testimonials;
