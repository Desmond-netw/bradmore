import { RiPhoneFill, RiMailFill } from "react-icons/ri";
import Socials from "./Socials";
export const Topbar = () => {
  return (
    <section
      id="home"
      className="py-2 xl:h-16 bg-gradient-to-t from-[#ffc221] to-[#ffd76e] text-sm flex items-center"
    >
      <div className="container mx-auto">
        {/* phone, mail and social links */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* phone and mail */}
          <div className=" hidden xl:flex lg:flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary text-white flex justify-center items-center">
                <RiPhoneFill />
              </div>
              <p className="text-primary font-medium">+234 553192758</p>
            </div>
            {/* --------- mail */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary text-white flex justify-center items-center">
                <RiMailFill />
              </div>
              <p className="text-primary font-medium">bradmore@hotmal</p>
            </div>
          </div>
          {/* ---------- social */}
          <Socials />
        </div>
      </div>
    </section>
  );
};

export default Topbar;
