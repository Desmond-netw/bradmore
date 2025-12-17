"use client";
import { motion } from "framer-motion";
import Button from "./Button";
export const Hero = () => {
  return (
    <section className="relative h-[70vh] bg-[image:var(--bg-hero)] bg-no-repeat bg-cover bg-center">
      {/* overlay --- */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/0 via-black/50 to-black/70 z-10"></div>
      {/* Hero wrapper */}
      <div className=" h-full flex items-center py-4 px-8 ">
        {/* -----h */}
        <div className="z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="h1 max-w-4xl text-white"
          >
            <span className="text-accent relative inline-block">
              Engineering
              <span className="absolute left-0 -bottom-2 w-full h-1 bg-accent"></span>
            </span>
            Excellence.
            <br />
            <span className="text-brand-yellow">Reliable Solutions.</span>
          </motion.h1>
          {/* subText */}
          <p className="mt-4 mb-6 max-w-2xl text-base text-white xl:text-lg leading-relaxed font-secondary">
            We are dedicated to delivering
            <span className="text-accent font-semibold">
              {" "}
              innovative engineering{" "}
            </span>
            and construction solutions that drive progress for communities and
            industries.
          </p>
          <div>
            {/* CTA btn */}
            <Button text="See Our Work" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
