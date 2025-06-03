"use client";

import React from "react";
import SectionBadge from "@/components/SectionBadge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { halexxProfile } from "@/constants/HalexxProfile";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";

const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result.error || "Something went wrong");
      toast.success("Message sent successfully");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="flex w-full items-center justify-center mt-20 px-4">
      <Toaster position={`top-center`} richColors className={`absolute`} />
      <div className="bg-white w-full max-w-[1000px] rounded-4xl shadow-2xl p-1 md:p-3">
        <div className="bg-gray-100 rounded-4xl p-6 sm:p-10 flex flex-col items-center justify-center">
          <SectionBadge section="Contact" />
          <div className="text-center flex flex-col space-y-3 mt-5 max-w-3xl px-4">
            <h1 className="font-medium text-3xl md:text-5xl lg:text-6xl">
              Get in Touch
            </h1>
            <p className="text-gray-500 text-base md:text-lg lg:text-xl">
              Have a project in mind? I'll respond as fast as possible.
            </p>
          </div>

          <form className="mt-10 flex flex-col items-center space-y-4 w-full">
            <div className="w-full max-w-[500px]">
              <Input
                type="text"
                placeholder="Enter your name"
                className="rounded-full bg-white shadow-2xl p-6 w-full"
                {...register("name", { required: "Name is required" })}
              />
              {errors && errors.name && (
                <p className={`text-sm mt-3 ml-5 text-red-500`}>
                  {String(errors.name.message)}
                </p>
              )}
            </div>
            <div className="w-full max-w-[500px]">
              <Input
                type="email"
                placeholder="Enter your email"
                className="rounded-full bg-white shadow-2xl p-6 w-full"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors && errors.email && (
                <p className={`text-sm mt-3 ml-5 text-red-500`}>
                  {String(errors.email.message)}
                </p>
              )}
            </div>
            <div className="w-full max-w-[500px]">
              <Textarea
                placeholder="Enter your message"
                className="rounded-2xl bg-white shadow-2xl p-6 w-full"
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters",
                  },
                })}
              />
              {errors && errors.message && (
                <p className={`text-sm mt-3 ml-5 text-red-500`}>
                  {String(errors.message.message)}
                </p>
              )}
            </div>
            <div className="w-full max-w-[500px]">
              <Button
                type="submit"
                onClick={handleSubmit(onSubmit)}
                className="w-full rounded-full hover:cursor-pointer p-6 bg-button text-white font-medium hover:scale-[1.02] transition-transform"
              >
                Send Message
              </Button>
            </div>
          </form>

          <div className="text-center mt-6 space-y-2">
            <p className="text-gray-500 text-sm">Let's Connect</p>
            <div>
              <Link
                href="mailto:alexandrugeroc2007@gmail.com"
                className="font-medium"
              >
                alexandrugeroc2007@gmail.com
              </Link>
            </div>
          </div>

          <div className="flex flex-row items-center space-x-3 mt-5">
            {halexxProfile.map((profile) =>
              profile.socials.map((social, i) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={i}
                    href={social.url}
                    target="_blank"
                    className="text-gray-600 bg-white p-2 rounded-sm shadow-lg hover:text-gray-900 transition-transform transform hover:scale-110 hover:rotate-3"
                  >
                    <Icon size={15} />
                  </Link>
                );
              }),
            )}
          </div>
        </div>
        <div className="text-sm text-center w-full mt-5 pb-3">
          © Copyright 2025. Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Contact;
