import Image from "next/image";
import Link from "next/link";
import Pretitle from "./lib/Pretitle";

import { RiArrowRightUpLine, RiCheckboxCircleFill } from "react-icons/ri";

//  work data
const workData = [
  {
    img:"/assets/img/work/restoration.jpg",
    name: "restoration",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat magni pariatur distinctio quos corporis dolor sapiente, nostrum qui? Nam nostrum eveniet obcaecati impedit similique expedita rem laborum distinctio omnis eum?,",
    href: "",
  },
   {
    img:"/assets/img/work/construction.jpg",
    name: "construction",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat magni pariatur distinctio quos corporis dolor sapiente, nostrum qui? Nam nostrum eveniet obcaecati impedit similique expedita rem laborum distinctio omnis eum?,",
    href: "",
  },
  {
    img:"/assets/img/work/consulting.jpg",
    name: "consulting",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat magni pariatur distinctio quos corporis dolor sapiente, nostrum qui? Nam nostrum eveniet obcaecati impedit similique expedita rem laborum distinctio omnis eum?,",
    href: "",
  },
   {
    img:"/assets/img/work/renovation.jpg",
    name: "renovation",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat magni pariatur distinctio quos corporis dolor sapiente, nostrum qui? Nam nostrum eveniet obcaecati impedit similique expedita rem laborum distinctio omnis eum?,",
    href: "",
  },
]
const Work = () => {
  return (
    <div id="projects" className="py-16 xl:py-[30px]">
      <div className="container mx-auto">
        <div className="text-center max-w-[540px] mx-auto xl:mb-20">
          {/* work title */}
        <Pretitle text="Our Work" center />
        <h2 className="h2 mb-3">Discover Our Projects</h2>
        <p className="mb-[11px] max-w-[450px] mx-auto">
          Bradmore is providing expert services designer to deliver quality and innovation in every project we undertake.
        </p>
        </div>
        {/* Work Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {workData.map((item,index)=> {
            return <div key={index}
            className="relative w-full h-[492px] flex-1 overflow-hidden group flex">
             <Image src={item.img} fill alt={`${item.name} ${index +1}` } quality={100} />
             {/* details */}
             <div>
              <div className="flex items-center gap-1"> 
                <h4>{item.name}</h4>
                <div>
                  <RiCheckboxCircleFill/>
                  <p>{item.description}</p>
                </div>
              </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
