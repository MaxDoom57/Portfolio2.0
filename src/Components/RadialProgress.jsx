import React from "react";

const RadialProgress = ({ percentage, imageUrl, text }) => {
  return (
    <div className="flex flex-col items-center justify-center m-4">
      {/* Circular Progress Bar */}
      <div className="relative flex items-center justify-center">
        <div className="w-28 h-28 rounded-full relative">
          <svg className="absolute top-0 left-0 w-full h-full">
            {/* Background Circle */}
            <circle
              cx="50%"
              cy="50%"
              r="45%"
              className="fill-none stroke-white/20"
              strokeWidth="8"
            />
            {/* Foreground Circle */}
            <circle
              cx="50%"
              cy="50%"
              r="45%"
              className="fill-none stroke-c5 origin-center -rotate-90"
              strokeWidth="8"
              strokeDasharray="283"
              strokeDashoffset={283 - (283 * percentage) / 100}
              strokeLinecap="round"
              style={{ transition: "stroke-dashoffset 0.3s ease" }}
            />
          </svg>
          {/* Image at the Center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={imageUrl}
              alt="center-img"
              className="w-16 h-16 rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Text Below the Circle */}
      <h2 className="text-white mt-4">{text}</h2>
    </div>
  );
};

export default RadialProgress;
