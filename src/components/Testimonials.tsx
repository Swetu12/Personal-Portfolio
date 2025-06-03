import React from "react";
import SectionBadge from "@/components/SectionBadge";
import { testimonials } from "@/constants/Testimonials";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServicesData } from "@/constants/ServicesData";

const Testimonials = () => {
  return (
    <div
      className={`flex w-full flex-col justify-center items-center mt-20 pb-10`}
      id={`testimonials`}
    >
      <SectionBadge section="Testimonials" />
      <div className="mx-5 flex w-full items-center justify-center text-center flex-col space-y-5 mt-10 pb-10">
        <h1 className="mx-5 font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:mx-[30vw] lg:break-words leading-tight">
          {testimonials.title}
        </h1>
        <p className="mx-5text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl lg:mx-[35vw] lg:break-words leading-snug">
          {testimonials.description}
        </p>
      </div>
      {testimonials.reviews.map((review, index) => (
        <div key={index} className={`mx-5 mt-10 lg:max-w-[1000px]`}>
          <div className={`bg-white rounded-4xl p-1 shadow-2xl`}>
            <div className={`bg-gray-100 rounded-4xl p-7 md:p-14`}>
              <div className={`flex flex-row items-center space-x-3`}>
                <Image
                  src={review.image}
                  alt={review.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h1 className={`font-medium`}>{review.name}</h1>
                  <p className="text-gray-500 text-sm">{review.job}</p>
                </div>
              </div>
              <p className={`mt-5`}>{review.review}</p>
              <div className={`flex flex-row space-x-1 mt-5`}>
                <Star className={`w-4 h-4 fill-black`} />
                <Star className={`w-4 h-4 fill-black`} />
                <Star className={`w-4 h-4 fill-black`} />
                <Star className={`w-4 h-4 fill-black`} />
                <Star className={`w-4 h-4 fill-black`} />
              </div>
            </div>
            <div
              className={`w-full flex items-center justify-center space-x-2 pb-3 hover:cursor-pointer mt-5`}
            >
              <Button className={`rounded-full`}>
                <ArrowLeft />
              </Button>
              <Button className={`rounded-full`}>
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Testimonials;
