
import {RiChat1Line, RiMap2Line, RiSmartphoneLine} from "react-icons/ri";
import Socials from "./lib/Socials"
import Form from "./lib/Form";


const Contacts = () => {
  return (
    <div id="contact" className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        <div className="w-full xl:h-[730px] shadow-custom p-4 xl:p-8 xl:px-[90px] xl:py-[36px] border-t-4 border-accent">
          <div className="flex flex-col xl:flex-row h-full gap-[40px] xl:gap-[90px]">
            {/* -- info ------ */}
            <div className="w-full">Info</div>
            {/* -- form---- */}
            <div className="flex-1">
              <h2 className="h2 mb-3">Request A Qoute</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione commodi debitis rem distinctio, eaque nihil quo dolor, consectetur sit odio error quos! Quidem inventore, consectetur alias explicabo id in quam.
              </p>
              {/* form */}
              <Form/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
