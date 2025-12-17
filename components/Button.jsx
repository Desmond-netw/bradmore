import React from "react";
import { RiArrowRightFill } from "react-icons/ri";

const Button = ({ text }) => {
  return (
    <button className="w-52.5 h-13.5 py-1.25 pl-1.25 flex items-center justify-between group bg-accent">
      <div>{text}</div>
      <div>
        <RiArrowRightFill />
      </div>
    </button>
  );
};

export default Button;
