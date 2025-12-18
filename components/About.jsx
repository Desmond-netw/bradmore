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
                Bradmore Engineering Consultants is a multidisciplinary
                engineering and construction consultancy dedicated to delivering
                reliable, efficient, and sustainable infrastructure solutions.
                We work closely with public and private sector clients to plan,
                design, and execute projects that meet the highest technical and
                safety standards.
              </p>
              <p className="mt-4 text-secondary leading-relaxed max-w-xl font-secondary">
                With a strong focus on sewer networks, pump stations, and
                critical infrastructure systems, our experienced team combines
                technical excellence with practical field knowledge to ensure
                long-term performance, regulatory compliance, and value for
                money.
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
