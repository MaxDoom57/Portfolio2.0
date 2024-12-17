import React from "react";
import myimage from "../Assets/myphoto.png";
import cover from "../Assets/cover.png";

const About = () => {
  return (
    <div className="w-[95%] rounded-3xl bg-gradient-to-t from-c1 via-c2 to-c3 grid-cols-2 gap-[3%] flex">
      {/* Left Section */}
      <div className="w-[50%] flex items-center justify-center relative">
        {/* Cover Image */}
        <img src={cover} alt="cover" className="z-0 w-full" />
        {/* Circular Profile Image */}
        <div className="absolute bg-gradient-to-t from-c1 via-c2 to-c3 flex items-center justify-center rounded-full outline outline-pink-500 outline-3 w-[450px] h-[450px] z-10">
          <img src={myimage} alt="myimage" className="rounded-full" />
        </div>
      </div>

      <div className="w-[45%] flex flex-col items-center justify-center text-white h-full">
        <h1 className="text-c5 mb-8 text-3xl font-roboto">About Me</h1>
        <h3 className="text-center">
          <span className="text-2xl">
            <i className="fa-solid fa-quote-left"></i>{" "}
          </span>{" "}
          I’m Sandaruwan, a student at the University of Sri Jayewardenepura,
          Faculty of Technology, currently studying the B.ICT (Bachelor of
          Information and Communication Technology) degree program. I focus on
          full-stack development, machine learning, and UI/UX design. I’m
          passionate about solving problems and creating innovative solutions,
          aiming to become a software engineer known for creativity and
          reliability as a team player.
          <span className="text-2xl">
            <i className="fa-solid fa-quote-right"></i>
          </span>
        </h3>
        <button className="px-4 py-2 rounded-lg bg-c4 mt-10 font-roboto">
          <a href="https://drive.google.com/file/d/1j-xzL1WU9Fsp4WxdnLHx9G0_Ybp3WGfU/view?usp=sharing">
            Download CV <i className="fa-regular fa-circle-down"></i>
          </a>
        </button>
      </div>
    </div>
  );
};

export default About;
