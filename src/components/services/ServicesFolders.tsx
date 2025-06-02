import React from "react";
import { ServicesData } from "@/constants/ServicesData";
import Folder from "../Folder/Folder";

const ServicesFolders = () => {
  return (
    <div className={`mt-20 grid grid-cols-1 md:grid-cols-2 gap-5`}>
      {ServicesData.services.map((service, index) => (
        <div
          key={index}
          className={`flex flex-col items-center justify-center bg-white shadow-2xl pt-20 px-20 pb-5 rounded-2xl`}
        >
          <div>
            <Folder
              size={2}
              color="#EBEBEB"
              className="custom-folder"
              items={service.images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`service-image-${i}`}
                  className="w-full h-full object-cover"
                />
              ))}
            />
          </div>
          <p className={`mt-14 font-medium`}>{service.title}</p>
        </div>
      ))}
    </div>
  );
};
export default ServicesFolders;
