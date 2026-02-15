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
      "Bradmore Engineering Consultants provides comprehensive sewer network planning and expansion services, supporting both new developments and upgrades to existing systems.",
    serviceList: [
      "Sewer network feasibility studies",
      "Load and capacity assessments",
      "Network expansion planning",
      "Integration with existing sewer infrastructure",
      "Design coordination and constructability reviews",
      "Compliance with sanitation and environmental regulations",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-1.jpg" },
      { url: "/assets/img/services/thumb-2.jpg" },
    ],
  },
  {
    name: "PUMP STATION",
    icons: <PiWallFill style={{width:"40", height:"40"}} />,
    title: "SEWER PUMP STATION CONSTRUCTION",
    description:
      "We specialize in the construction of sewage transfer and pumping stations, designed to safely and efficiently transport wastewater across varying elevations and distances.",
    serviceList: [
      "Civil works (excavation, foundations, chambers)",
      "Wet well and dry well construction",
      "Mechanical pump installation",
      "Electrical works and control panels",
      "Safety systems and access structures",
      "Testing, commissioning, and handover",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-3.jpg" },
      { url: "/assets/img/services/thumb-4.jpg" },
    ],
  },
  {
    name: "Pipe Supply",
    icons: <PiUserGearFill style={{width:"40", height:"40"}}/>,
    title: "SEWER PIPE SUPPLY & INSTALLATION",
    description:
      "Bradmore Engineering Consultants supplies and installs high-quality sewer pipes suitable for diverse ground conditions, flow requirements, and operational environments (Materials : uPVC, HDPE, Ductile Iron, Reinforced Concrete)",
    serviceList: [
      "•	Trenching and backfilling",
      "•	Pipe jointing and alignment",
      "•	Manhole construction",
      "•	Gravity and pressure sewer systems",
      "•	Testing and quality assurance",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-5.jpg" },
      { url: "/assets/img/services/thumb-6.jpg" },
    ],
  },
  {
    name: "Maintenance",
    icons: <PiMouseLeftClickFill style={{width:"40", height:"40"}} />,
    title: "SEWER PUMP INSTALLATION & MAINTENANCE",
    description: "We deliver professional installation, servicing, and maintenance of sewage pumps to ensure continuous system performance. Our Philosopy include 1. Minimize downtime, 2. Extend equipment life and 3. Ensure compliance and safety",
    serviceList: [
      "Pump selection and sizing support",
      "Installation and commissioning",
      "Preventive maintenance programs",
      "Emergency breakdown response",
      "Pump refurbishment and replacement",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-7.jpg" },
      { url: "/assets/img/services/thumb-8.jpg" },
    ],
  },
  {
    name: "GENERAL CONSTRUCTION",
    icons: <PiWallFill style={{width:"40", height:"40"}} />,
    title: "GENERAL CONSTRUCTION & MAINTENANCE",
    description:
      "Beyond sanitation infrastructure, Bradmore Engineering Consultants offers general civil construction and maintenance services to support infrastructure sustainability. ",
    serviceList: [
      "•	Civil works and structures",
      "•	Rehabilitation and repairs",
      "•	Preventive maintenance programs",
      "•	Utility infrastructure support",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-9.jpg" },
      { url: "/assets/img/services/thumb-10.jpg" },
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
            Offering professional engineering, construction, maintenance, and environmental assessment services through skilled personnel and sound engineers.
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
             <div className=" flex flex-1 bg-white shadow-custom h-[490px] p-[30px]">
              {serviceData.map((item) => (
              <TabsContent key={item.name} value ={item.name} className="m-0">
                {/* conents div */}
                <div className="flex flex-col md:flex-row gap-[30px]" >
                  {/* image wrapper*/}
                  <div className="flex md:flex-col gap-5 xl:gap-[30px]">
                    {item.thumbs.map((thumb, index)=> (
                      <div key={index} className="relative w-[140px] xl:w-[200px] h-[140px] xl:h-[200px]">
                        <Image src={thumb.url} fill alt={`${item.name} thumbnail ${index + 1}`} sizes="(max-width: 768px) 100vw, 50vw"></Image>
                      </div>
                    ))}
                  </div>

                  {/* -- Text & Button */}
                  <div>
                    <div>
                      <h3 className="h3 mb-6">{item.title}</h3>
                      <p className="mb-10">{item.description}</p>
                      {/* --- service list -- */}
                      <ul className="grid grid-cols-2 gap-3 md:gap-4 mb-5">
                        {item.serviceList.map((service, index)=>{
                          return <li key={index} className="flex items-center gap-3 md:gap-4">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                            <div className="capitalize font-medium text-primary text-sm md:text-base">{service}</div>
                          </li>
                        })}
                      </ul>
                      {/* btn -- */}
                      <Button text="Read more"/>
                    </div>
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
