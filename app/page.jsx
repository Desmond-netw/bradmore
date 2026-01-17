"use client";
import { useEffect, useState } from "react";
// Components imports

import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Topbar from "@/components/Topbar";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Contacts from "@/components/Contacts";
import Mandate from "@/components/Mandate";
import Testimonials from "@/components/Testimonials";
import VisionMission from "@/components/VisionMission";

const Home = () => {
  // handle scroll
  const [HeaderActive, setHeaderActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(HeaderActive);
  return (
    <div>
      <Topbar />
      {/* stiatic headers */}
      <div className="relative z-10">
        <Header />
      </div>
      {/* Animated Header */}
      <div
        className={` w-full tansition-transform duration-500 fixed top-0 left-0 z-50 ${
          HeaderActive ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Header />
      </div>

      <Hero />
      <About />
      <Stats />
      <Mandate />
      <VisionMission/>
      <Services />
      <Work />
      <Testimonials/>
      {/* <Faq /> */}
      <Contacts />
      <Footer />
    </div>
  );
};

export default Home;
