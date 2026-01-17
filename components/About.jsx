import Image from "next/image";
import Pretitle from "./lib/Pretitle";
import Button from "./lib/Button";

export const About = () => {
  return (
    <div id="about" className="pt-16 xl:pt-32 ">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 xl:gap-0 xl:flex-row xl:items-center">
          {/* PreTitile */}
          <div className="flex-1">
            <div className="max-w-135">
              <Pretitle text="About us" center={false} />
              <h2 className="h2 mt-4 text-primary">
                Engineering expertise you can trust
              </h2>
              <p className="mt-6 text-secondary leading-relaxed max-w-xl font-secondary">
                Bradmore Engineering Consultants is a professional engineering and construction firm specializing in sanitation infrastructure, sewer network development, pumping systems, and general civil construction services. The company provides end-to-end solutions covering planning, design support, construction, installation, operation, and long-term maintenance of critical infrastructure assets and environmental impact assessment and environmental management services.
              </p>
              <p className="mt-4 text-secondary leading-relaxed max-w-xl font-secondary">
               We operate at the intersection of engineering precision, construction excellence, and operational sustainability, ensuring that every project we deliver contributes meaningfully to public health, environmental protection, and urban development.
              </p>
              {/* signature */}
              <div>
                <Image
                  src="/assets/img/about/Signature.svg"
                  width={300}
                  height={40}
                  alt="Nhyira signature"
                />
              </div>
              {/* contact btn */}
              <Button text="Contact us" />
            </div>
          </div>
          {/* About Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full h-[300px] sm:h[360px] md:h-[420px] xl:w-[444px] xl:h-[493px] ">
              <div className="hidden xl:flex w-[444px] h-[493px] bg-accent absolute -top-4 -left-4 -z-10 rounded-lg"></div>
              <Image
                src="/assets/img/about/img.jpg"
                fill
                alt="about_image"
                sizes="(max-with:768px) 100vw, 444px"
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
