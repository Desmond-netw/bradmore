import Pretitle from "./lib/Pretitle";
import { RiCheckboxCircleFill } from "react-icons/ri";

const values = [
  {
    title: "Engineering Integrity",
    desc: "Sound technical solutions guided by best practice.",
  },
  {
    title: "Quality Assurance",
    desc: "Delivering durable and compliant infrastructure.",
  },
  {
    title: "Safety Excellence",
    desc: "Zero harm to people, assets, and the environment.",
  },
  {
    title: "Sustainability",
    desc: "Infrastructure designed for long-term performance.",
  },
  {
    title: "Client Satisfaction",
    desc: "Responsive, transparent, and reliable delivery.",
  },
];

const VisionMission = () => {
  return (
    <section id="vision" className="py-16 xl:py-32 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-16">

          {/* -------- Vision & Mission -------- */}
          <div className="flex-1 max-w-[520px]">
            <Pretitle text="Our Purpose" />
            <h2 className="h2 mb-6">
              Vision, Mission & <span className="text-accent">Values</span>
            </h2>

            {/* Vision */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-primary mb-2">
                Our Vision
              </h4>
              <p className="text-muted leading-relaxed">
                To become a trusted engineering partner of choice, recognized
                for delivering high-quality, resilient, and sustainable
                infrastructure solutions that improve quality of life and
                protect the environment.
              </p>
            </div>

            {/* Mission */}
            <div>
              <h4 className="text-lg font-semibold text-primary mb-2">
                Our Mission
              </h4>
              <p className="text-muted leading-relaxed">
                To provide professional engineering, construction, maintenance,
                and environmental assessment services through skilled personnel,
                sound engineering practices, and strict adherence to safety,
                quality, and environmental standards.
              </p>
            </div>
          </div>

          {/* -------- Core Values -------- */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm border"
                >
                  <div className="flex items-start gap-3">
                    <RiCheckboxCircleFill className="text-accent text-xl mt-1" />
                    <div>
                      <h5 className="font-semibold text-primary mb-1">
                        {value.title}
                      </h5>
                      <p className="text-sm text-muted">
                        {value.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionMission;
