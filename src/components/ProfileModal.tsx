import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { halexxProfile } from "@/constants/HalexxProfile";
import Image from "next/image";

const ProfileModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: () => void;
}) => {
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        {halexxProfile.map((profile, index) => (
          <DialogContent
            className="sm:max-w-3xl rounded-2xl shadow-xl border border-gray-200 p-6 bg-white overflow-y-scroll max-h-[90vh]"
            key={index}
          >
            {/* Header */}
            <DialogHeader className="flex flex-row items-center gap-4">
              <Image
                src={profile.image}
                alt={profile.name}
                width={60}
                height={60}
                className="rounded-full border border-gray-300 shadow-sm"
              />
              <div className="flex flex-col">
                <DialogTitle className="text-xl font-semibold text-gray-900">
                  {profile.name}
                </DialogTitle>
                <DialogDescription className="text-sm text-gray-500">
                  {profile.title}
                </DialogDescription>
              </div>
            </DialogHeader>

            {/* Body */}
            <div className="py-6 space-y-10 text-gray-800 bg-gray-200 rounded-2xl p-6">
              {/* Bio */}
              <div className="space-y-2">
                <h2 className="text-lg font-semibold">{profile.bio.title}</h2>
                <p className="text-sm text-gray-600">
                  {profile.bio.description}
                </p>
              </div>

              {/* Skills */}
              <div>
                <h2 className="text-lg font-semibold">
                  🛠️ {profile.bio.mySkills}
                </h2>
                <ul className="mt-3 space-y-1 text-sm">
                  {profile.bio.skills.map((skill, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span>🔹</span> <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Experience */}
              <div>
                <h2 className="text-lg font-semibold">
                  💼 {profile.bio.myExperience}
                </h2>
                <ul className="mt-3 space-y-3 text-sm">
                  {profile.bio.experience.map((exp, index) => (
                    <li key={index}>
                      <p className="font-medium">
                        {exp.title} at{" "}
                        <span className="text-gray-500">{exp.company}</span>
                      </p>
                      <p className="text-xs text-gray-400 italic">
                        {exp.duration}
                      </p>
                      <p className="text-sm mt-1">{exp.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer */}
            <DialogFooter>
              <DialogClose asChild>
                <Button
                  variant="secondary"
                  className="transition-all hover:scale-105"
                >
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        ))}
      </Dialog>
    </>
  );
};
export default ProfileModal;
