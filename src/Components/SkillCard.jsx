import React from "react";

const SkillCard = ({ text, imageurl }) => {
  return (
    <div className="bg-white/20 p-4 w-[50%] m-4 rounded-xl flex flex-col items-center hover:scale-110 transition-transform duration-300 cursor-pointer">
      <div>
        <img src={imageurl} alt="icon" className="w-16 h-16 mb-4" />
      </div>
      <div className="text-white text-center">{text}</div>
    </div>
  );
};

export default SkillCard;
