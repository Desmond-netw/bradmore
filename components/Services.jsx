import { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Button from "./lib/Button";
import {
  PiWallFill,
  PiWrenchFill,
  PiUserGearFill,
  PiMouseLeftClickFill
} from "react-icons/pi";
import { Description } from "@radix-ui/react-dialog";
import Pretitle from "./lib/Pretitle";
// service data
const serviceData = [
  {
    name: "planning",
    icons: <PiWrenchFill style={{width:"40", height:"40"}}/>,
    title: "Planning & Expansion of Sewer Networks",
    description:
      "We design and expand robust sewer systems tailored to the unique needs of each project, ensuring long-term performance and scalability.",
    serviceList: [
      "Sewer Pump Sation Construction",
      "Sewer Pipe Supply & Installation",
      "Concrete Work",
      "Sewer Pumps Installation & Maintenance",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-1.jpg" },
      { url: "/assets/img/services/thumb-2.jpg" },
    ],
  },
  {
    name: "Construction",
    icons: <PiWallFill style={{width:"40", height:"40"}} />,
    title: "General Construction & Maintenance",
    description:
      "Our comprehensive services include infrastructure upgrades, routine maintenance, and emergency repairs, supporting the full lifecycle of your assets.",
    serviceList: [
      "Structural Design",
      "Site Prep",
      "Concrete Work",
      "Repairs",
      "Exterior Finnish",
      "Painting",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-3.jpg" },
      { url: "/assets/img/services/thumb-4.jpg" },
    ],
  },
  {
    name: "consulting",
    icons: <PiUserGearFill style={{width:"40", height:"40"}}/>,
    title: "Technical & Operational Excellence",
    description:
      "Our experienced technical team leads the way in implementing best practices, adhering to statutory requirements, and maintaining the highest industry standards. We conduct technical audits, supervise commissioning, develop safety procedures, and provide hands-on field support to solve complex challenges",
    serviceList: [
      "Dispatch field Services",
      "Restoration",
      "Supervising & Commisioning",
      "Safety Compliences",
      "Standard Compliences",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-5.jpg" },
      { url: "/assets/img/services/thumb-6.jpg" },
    ],
  },
  {
    name: "IT Services",
    icons: <PiMouseLeftClickFill style={{width:"40", height:"40"}} />,
    title: "IT Consultancy and Technical services",
    description: "Transforming IT Infrastructure for Modern Enterprises. We deliver IT Consultancy, sales and security solutions tailored for organizations seeking reliability, scalability, and robust protection in today's digital landscape",
    serviceList: [
      "Deliverying projects that meet or exceed international standards",
      "Ensuring full complience with regulatroy bodies",
      "Implementing audit recommendations and fostering continuous improvement",
      "Mentoring and Supervising technical staff for sustanied operationale excellence",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-5.jpg" },
      { url: "/assets/img/services/thumb-6.jpg" },
    ],
  },
];
export const Services = () => {
  const [activeTab, setActiveTab] = useState("planning");
  return (
    <section id="serivces" className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        {/* services header */}
        <div className="text-center   mb-20">
          <h2 className="h2 mb-3"> What We Offer</h2>
          <Pretitle text="Our Service" center/>
          <p className="mb-1 max-w-[480px] mx-auto">
            Offering tailored Sewer construction solutions, from planning to
            completion, with a focus on quality and innovation.
          </p>
        </div>
        {/* service tabs */}
        <div>
          <Tabs
            defaultValue="planning"
            onValueChange={(value) => setActiveTab(value)}
            className="flex flex-col xl:flex-row w-full gap-[30px]"
          >
            <TabsList className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-[30px] w-full  h-full rounded-none p-0 bg-transparent xl:w-[345px]">
              {serviceData.map((item) => {
                return (
                  <TabsTrigger
                    key={item.name}
                    value={item.name}
                    className="w-full rounded-none h-[100px] flex items-center p-0 relative shadow-custom outline-none"
                  >
                    <div
                      className={`w-[100px] h-[100px] flex items-center justify-center absolute left-0 ${
                        activeTab === item.name
                          ? "bg-primary text-white"
                          : "bg-accent text-primary"
                      }`}
                    >
                      <div className="text-5xl">{item.icons}</div>
                    </div>
                    <div className="uppercase font-primary text-base font-semibold tracking-[0.6px] w-[100px] ml-16">
                      {item.name}
                    </div>
                  </TabsTrigger>
                );
              })}
            </TabsList>
             {/* -- tabs content -- */}
             <div className="flex-1 bg-white shadow-custom h-[490px] p-[30px]">
              {serviceData.map((item) => (
              <TabsContent key={item.name} value ={item.name} className="m-0">
                {/* conents div */}
                <div >
                  {/* image wrapper*/}
                  <div className="flex md:flex-col gap-5 xl:gap-[30px]">
                    {item.thumbs.map((thumb, index)=> (
                      <div key={index} className="relative w-[140px] xl:w-[200px] h-[140px] xl:h-[200px]">
                        <Image src={thumb.url} fill alt={`${item.name} thumbnail ${index + 1}`} sizes="(max-width: 768px) 100vw, 50vw"></Image>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
             ))}
             </div>
          </Tabs>
        </div>
        {/* end service tabs */}
      </div>
    </section>
  );
};

export default Services;
