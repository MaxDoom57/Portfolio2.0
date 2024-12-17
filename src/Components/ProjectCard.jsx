import React from "react";
import more from "../Assets/more.png";

const ProjectCard = ({ imgurl, title, description }) => {
  return (
    <div className="bg-slate-900 w-[300px] rounded-xl flex flex-col h-full ">
      <div>
        <img
          src={imgurl}
          alt="card img"
          className="w-[300px] h-[160px] rounded-t-xl"
        />
      </div>

      {/* Content */}
      <div className="m-3 flex flex-col flex-grow">
        <div className="my-2">
          <h2 className="text-white text-left font-roboto font-bold text-xl">
            {title}
          </h2>
        </div>
        <div className="text-white flex-grow my-2">
          <p>{description}</p>
        </div>

        {/* Read More Section */}
        <div className="flex items-center  my-2 mt-2">
          <h3 className="cursor-pointer text-[#045CFF]">Read more</h3>
          <img
            src={more}
            alt="more icon"
            className="w-4 h-4 cursor-pointer ml-2"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
