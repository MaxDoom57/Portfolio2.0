import React from "react";
import ProjectCard from "./ProjectCard";
import card1 from "../Assets/card1.png";
import card2 from "../Assets/card2.jpg";
import card3 from "../Assets/card3.png";

const Projects = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div>
        <h1 className="text-c5 font-roboto text-3xl">Projects</h1>
      </div>

      <div className="mt-4">
        <h2 className="text-white font-roboto">
          Take a look at my projects, frelecting my passion for coding and
          crafting effective solutions
        </h2>
      </div>
      <div className="flex grid-cols-3 gap-8 mt-10">
        <ProjectCard
          imgurl={card1}
          title={"Faculty Medical Center Management System"}
          description={
            "A web-based system developed to streamline healthcare workflows like patient management and appointment scheduling."
          }
        />
        <ProjectCard
          imgurl={card2}
          title={"Job Finding System"}
          description={
            "A web scraping tool built to automate the collection of job listings."
          }
        />
        <ProjectCard
          imgurl={card3}
          title={"Travel Booking Website UI Design"}
          description={
            "Created a sleek, user-friendly interface for a travel booking platform using Figma."
          }
        />
      </div>
      <div>
        <button className="px-4 py-2 rounded-lg bg-c4 mt-10 text-white font-roboto">
          See more
        </button>
      </div>
    </div>
  );
};

export default Projects;
