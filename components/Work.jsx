import Image from "next/image";
import Link from "next/link";
import Pretitle from "./lib/Pretitle";
import { RiArrowRightUpLine, RiCheckboxCircleFill } from "react-icons/ri";

// Work data
const workData = [
  {
    img: "/assets/img/work/restoration.jpg",
    name: "Restoration",
    description:
      "Expert restoration services ensuring durability, safety, and compliance across infrastructure projects.",
    href: "#",
  },
  {
    img: "/assets/img/work/construction.jpg",
    name: "Construction",
    description:
      "High-quality construction solutions delivered with precision, safety, and efficiency.",
    href: "#",
  },
  {
    img: "/assets/img/work/consulting.jpg",
    name: "Consulting",
    description:
      "Professional engineering consulting to guide planning, execution, and compliance.",
    href: "#",
  },
  {
    img: "/assets/img/work/renovation.jpg",
    name: "Renovation",
    description:
      "Modern renovation solutions enhancing performance, reliability, and lifespan.",
    href: "#",
  },
];

const Work = () => {
  return (
    <section id="projects" className="py-16 xl:pt-32">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-[540px] mx-auto mb-12 xl:mb-20">
          <Pretitle text="Our Work" center />
          <h2 className="h2 mb-3">Discover Our Projects</h2>
          <p className="max-w-[450px] mx-auto">
            Bradmore delivers expert engineering services with innovation,
            quality, and operational excellence.
          </p>
        </div>

        {/* Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {workData.map((item, index) => (
            <div
              key={index}
              className="relative h-[460px] overflow-hidden group rounded-lg"
            >
              {/* Image */}
              <Image
                src={item.img}
                fill
                alt={item.name}
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Details */}
              <div className="absolute bottom-0 left-0 right-0 z-10 p-6 text-white translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="  flex items-center gap-2 mb-2">
                  <RiCheckboxCircleFill className="text-accent text-xl" />
                  <h4 className="font-bold uppercase tracking-wide">
                    {item.name}
                  </h4>
                </div>

                <p className="text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 text-accent font-semibold uppercase text-sm"
                >
                  View Project
                  <RiArrowRightUpLine className="text-lg" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
