import React from "react";
import { RiArrowRightFill } from "react-icons/ri";

const Button = ({ text }) => {
  return (
    <button className="w-52.5 h-13.5 py-1.25 pl-1.25 pr-1.25 flex items-center justify-between group bg-accent">
      <div className="flex-1 text-center tracking-[1.2px] font-primary font-semibold text-primary uppercase">
        {text}
      </div>
      <div className="w-11 h-11 bg-primary flex items-center justify-center">
        <RiArrowRightFill className="text-white text-xl group-hover:rotate-45 transition-all duration-200" />
      </div>
    </button>
  );
};

export default Button;
