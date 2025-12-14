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

const Home = () => {
  return (
    <div>
      <Topbar />
      <Header />
      <Hero />
      <About />
      <Stats />
      <Services />
      <Work />
      <Faq />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Home;
