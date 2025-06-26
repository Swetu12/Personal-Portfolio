"use client"
import { ZoomIn, Award } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import {certificates, educationData} from "@/constants/EducationData";
import SectionBadge from "@/components/SectionBadge";
import {techStackData} from "@/constants/TechStackData";
import React from "react";
import TechStack from "@/components/techstack/TechStack";

export default function EducationSection() {
    return (
        <div
            className={`flex w-full flex-col justify-center items-center mt-20 pb-10`}
            id={`Education`}
        >
            <SectionBadge section="Education" />
            <div className="mx-5 flex w-full items-center justify-center text-center flex-col space-y-5 mt-10">
                <h1 className="mx-5 font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:mx-[30vw] lg:break-words leading-tight">
                    {educationData.title}
                </h1>
                <p className="mx-5 text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl lg:mx-[35vw] lg:break-words leading-snug">
                    {educationData.description}
                </p>
            </div>
            <div className={`w-full mt-10`}>
                <section className="py-16 px-4">
                    <div className="max-w-4xl mx-auto">
                        {/* Certificate Gallery */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {certificates.map((cert) => (
                                <Dialog key={cert.id}>
                                    <DialogTrigger asChild>
                                        <Card className="group cursor-pointer overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
                                            <div className="relative aspect-[4/3] overflow-hidden">
                                                <img
                                                    src={cert.image || "/placeholder.svg"}
                                                    alt={cert.alt}
                                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                </div>
                                            </div>
                                        </Card>
                                    </DialogTrigger>
                                    <DialogContent className="min-w-[50vw] max-h-[90vh] w-full p-0 border-0 bg-white rounded-2xl overflow-y-scroll">
                                        <div className="grid md:grid-cols-2 gap-0">
                                            {/* Image Section */}
                                            <div className="relative bg-gray-50 flex items-center justify-center p-4">
                                                <img
                                                    src={cert.image || "/placeholder.svg"}
                                                    alt={cert.alt}
                                                    className="w-full h-auto max-h-[60vh] object-contain rounded-lg shadow-sm"
                                                />
                                            </div>

                                            {/* Content Section */}
                                            <div className="p-8 flex flex-col justify-center">
                                                <div className="space-y-6">
                                                    <div>
                                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{cert.title}</h3>
                                                        <div className="w-12 h-1 bg-black rounded-full"></div>
                                                    </div>

                                                    <p className="text-gray-700 leading-relaxed text-lg">{cert.description}</p>

                                                    <div className="pt-4">
                                                        <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-black rounded-full text-sm font-medium">
                                                            <Award className="w-4 h-4 mr-2" />
                                                            Certified
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
