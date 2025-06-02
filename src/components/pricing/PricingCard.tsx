import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { pricingData } from "@/constants/PricingData";
import Link from "next/link";

export const PricingCard = () => {
  return (
    <div className="rounded-2xl p-6 w-full max-w-xl mx-auto">
      <Tabs
        defaultValue="standard"
        className="w-full flex items-center justify-center"
      >
        <TabsList className="bg-gray-100 rounded-full p-1 flex gap-2 mb-6">
          <TabsTrigger
            value="standard"
            className="rounded-full px-6 py-3 min-w-[120px] hover:cursor-pointer
             data-[state=active]:bg-gray-200
             data-[state=active]:text-black"
          >
            Standard
          </TabsTrigger>
          <TabsTrigger
            value="enterprise"
            className="rounded-full px-6 py-3 min-w-[120px] hover:cursor-pointer
             data-[state=active]:bg-gray-200
             data-[state=active]:text-black"
          >
            Enterprise
          </TabsTrigger>
        </TabsList>

        <TabsContent value="standard">
          <div className={`bg-white rounded-4xl p-1 shadow-2xl `}>
            <div className={`bg-gray-200 rounded-4xl p-1 pb-5`}>
              <div className={`m-5`}>
                <div>
                  <h1 className={`font-medium text-xl`}>
                    {pricingData.standardPlan.title}
                  </h1>
                  <p className={`text-sm text-gray-500`}>
                    {pricingData.standardPlan.subtitle}
                  </p>
                </div>
                <div className={`bg-white rounded-2xl p-3 mt-5`}>
                  <p className={`text-sm`}>
                    {pricingData.standardPlan.description}
                  </p>
                </div>
              </div>
              <div className={`mx-5`}>
                {pricingData.standardPlan.features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-2 p-2 border-t-2 border-gray-300`}
                  >
                    <span className="text-green-500">✔️</span>
                    <p className="text-sm">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={`mx-5 mt-5 flex items-start flex-col w-full pb-5`}>
              <div>
                <h1 className="text-3xl font-bold">
                  {pricingData.standardPlan.price.split("/")[0]}
                  <span className="text-sm text-gray-500">
                    /{pricingData.standardPlan.price.split("/")[1]}
                  </span>
                </h1>
              </div>
              <div className={`flex items-center justify-center mt-3`}>
                <Link
                  href={`https://calendly.com/alexandrugeroc2007/halexxwebdev-services-video-call`}
                  target={`_blank`}
                >
                  <button
                    className={`bg-button text-white hover:cursor-pointer font-medium rounded-full px-6 py-3 hover:scale-[1.02] transition-transform`}
                  >
                    {pricingData.standardPlan.buttonText}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="enterprise">
          <div className={`bg-white rounded-4xl p-1 shadow-2xl`}>
            <div className={`bg-gray-200 rounded-4xl p-1 pb-5`}>
              <div className={`m-5`}>
                <div>
                  <h1 className={`font-medium text-xl`}>
                    {pricingData.enterprisePlan.title}
                  </h1>
                  <p className={`text-sm text-gray-500`}>
                    {pricingData.enterprisePlan.subtitle}
                  </p>
                </div>
                <div className={`bg-white rounded-2xl p-3 mt-5`}>
                  <p className={`text-sm`}>
                    {pricingData.enterprisePlan.description}
                  </p>
                </div>
              </div>
              <div className={`mx-5`}>
                {pricingData.enterprisePlan.features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-2 p-2 border-t-2 border-gray-300`}
                  >
                    <span className="text-green-500">✔️</span>
                    <p className="text-sm">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={`mx-5 mt-5 flex items-start flex-col w-full pb-5`}>
              <div>
                <h1 className="text-3xl font-bold">
                  {pricingData.enterprisePlan.price.split("/")[0]}
                  <span className="text-sm text-gray-500">
                    /{pricingData.standardPlan.price.split("/")[1]}
                  </span>
                </h1>
              </div>
              <div className={`flex items-center justify-center mt-3`}>
                <Link
                  href={`https://calendly.com/alexandrugeroc2007/halexxwebdev-services-video-call`}
                  target={`_blank`}
                >
                  <button
                    className={`bg-button text-white font-medium hover:cursor-pointer rounded-full px-6 py-3 hover:scale-[1.02] transition-transform`}
                  >
                    {pricingData.enterprisePlan.buttonText}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
