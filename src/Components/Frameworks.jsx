import React from "react";

const Frameworks = ({ imgurl, text }) => {
  return (
    <div className="flex items-center space-x-2 outline outline-c5 outline-1 px-2 py-1 m-2">
      <div>
        <img src={imgurl} alt="icon" className="w-8 h-8" />
      </div>
      <div className="text-white">
        <h2>{text}</h2>
      </div>
    </div>
  );
};

export default Frameworks;
