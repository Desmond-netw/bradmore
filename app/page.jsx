// Components imports

import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Topbar from "@/components/Topbar";

const Home = () => {
  return (
    <div>
      <Topbar />
      <Header />
      <Hero />
      <About />
    </div>
  );
};

export default Home;
