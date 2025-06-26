"use client";

import React, { useState } from "react";
import Image from "next/image";
import { halexxProfile } from "@/constants/HalexxProfile";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import ProfileModal from "@/components/ProfileModal";
import { AuroraBackground } from "@/components/ui/aurora-background";

const Navbar = () => {
  const [isProfileDivHovered, setIsProfileDivHovered] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  return (
    <>
      <div
        className={`w-full flex items-center justify-center mt-10`}
        id={`home`}
      >
        {halexxProfile.map((profile, index) => (
          <div
            key={index}
            className={`w-full md:mx-10 flex items-center justify-center flex-col md:flex-row md:justify-between`}
          >
            <div
              className={`flex flex-col md:flex-row hover:cursor-pointer items-center md:w-1/2 md:justify-start`}
              onMouseEnter={() => setIsProfileDivHovered(true)}
              onMouseLeave={() => setIsProfileDivHovered(false)}
              onClick={() => setIsProfileModalOpen(true)}
            >
              <Image
                src={profile.image}
                alt={profile.name}
                width={60}
                height={60}
                className="rounded-full"
              />
              <div className={`ml-4 mt-2 md:mt-0 text-center md:text-left`}>
                <h1 className={`font-bold text-lg`}>{profile.name}</h1>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={isProfileDivHovered ? "hovered" : "default"}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.15 }}
                    className="text-sm text-gray-500 inset-0"
                  >
                      {isProfileDivHovered ? (
                          "Click to see my bio"
                      ) : (
                          <>
                              <span>{profile.title}</span>
                              <br />
                              <span className="text-xs text-gray-400 md:hidden">click on photo to see my bio</span>
                          </>
                      )}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
            <div
              className={`flex items-center flex-col space-y-5 md:space-y-0 md:w-1/2 md:justify-end md:flex-row md:space-x-5 mt-3 md:mt-0`}
            >
              <div className={`flex items-center space-x-2`}>
                <div className={`w-2 h-2 rounded-full bg-green-500`}></div>
                <p>{profile.availability}</p>
              </div>
              <div
                className={`border-b-2 border-gray-300 w-[300px] md:hidden`}
              ></div>
              <div
                className={`hidden md:block border-l-2 border-gray-300 h-6`}
              ></div>
              <div className={`flex flex-row items-center space-x-5`}>
                {profile.socials.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={index}
                      href={social.url}
                      target="_blank"
                      className={`text-gray-600 bg-white p-2 rounded-sm shadow-lg hover:text-gray-900 transition-transform transform hover:scale-110 hover:rotate-3`}
                    >
                      <Icon size={15} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
        <ProfileModal
          open={isProfileModalOpen}
          setOpen={() => setIsProfileModalOpen(false)}
        />
      </div>
    </>
  );
};
export default Navbar;
