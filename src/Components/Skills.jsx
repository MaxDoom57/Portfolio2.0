import React from "react";
import SkillCard from "./SkillCard";
import frontend from "../Assets/fd.png";
import backend from "../Assets/bd.png";
import machineLearning from "../Assets/ml.png";
import uiDesign from "../Assets/ui.png";
import python from "../Assets/python.png";
import html from "../Assets/html.png";
import js from "../Assets/js.png";
import java from "../Assets/java.png";
import c from "../Assets/c.png";
import css from "../Assets/css.png";
import tailwind from "../Assets/tailwind.png";
import bootstrap from "../Assets/bootstrap.png";
import react from "../Assets/react.png";
import node from "../Assets/node.png";
import express from "../Assets/express.png";
import mongo from "../Assets/mongo.png";
import git from "../Assets/git.png";
import np from "../Assets/np.png";
import pd from "../Assets/pd.png";
import tf from "../Assets/tf.png";
import pt from "../Assets/pt.png";
import skt from "../Assets/skt.png";
import oc from "../Assets/oc.png";
import Matplotlib from "../Assets/Matplotlib.png";
import tkinter from "../Assets/tkinter.png";
import scrapy from "../Assets/scrapy.png";
import qt from "../Assets/qt.png";
import anaconda from "../Assets/anaconda.png";
import figma from "../Assets/figma.png";
import ps from "../Assets/ps.png";
import ai from "../Assets/ai.png";

import RadialProgress from "./RadialProgress";
import Frameworks from "./Frameworks";

const Skills = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center font-roboto">
      <div className="text-center text-c5 mb-8">
        <h1 className=" text-3xl">Skills</h1>
      </div>

      {/* Skill Cards Section */}
      <div className="flex justify-center w-[80%] space-x-8 mb-16">
        <SkillCard text="Frontend Development" imageurl={frontend} />
        <SkillCard text="Backend Development" imageurl={backend} />
        <SkillCard text="Machine Learning" imageurl={machineLearning} />
        <SkillCard text="UI/UX Design" imageurl={uiDesign} />
      </div>

      {/* Radial Progress Section */}
      <div className="flex justify-center space-x-8">
        <RadialProgress imageUrl={html} percentage="100" text="HTML" />
        <RadialProgress imageUrl={python} percentage="85" text="PYTHON" />
        <RadialProgress imageUrl={js} percentage="85" text="JAVA-SCRIPT" />
        <RadialProgress imageUrl={java} percentage="70" text="JAVA" />
        <RadialProgress imageUrl={c} percentage="60" text="C#" />
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col items-center">
          <div className="flex">
            <Frameworks imgurl={css} text="CSS" />
            <Frameworks imgurl={tailwind} text="Tailwind CSS" />
            <Frameworks imgurl={bootstrap} text="Bootstrap" />
            <Frameworks imgurl={react} text="React Js" />
            <Frameworks imgurl={node} text="Node Js" />
            <Frameworks imgurl={express} text="Express Js" />
            <Frameworks imgurl={mongo} text="MondoDB" />
            <Frameworks imgurl={git} text="Git" />
            <Frameworks imgurl={np} text="Numpy" />
            <Frameworks imgurl={pd} text="Pandas" />
          </div>
          <div className="flex">
            <Frameworks imgurl={tf} text="Tensorflow" />
            <Frameworks imgurl={pt} text="Pytorch" />
            <Frameworks imgurl={skt} text="Scikit-learn" />
            <Frameworks imgurl={oc} text="Opencv" />
            <Frameworks imgurl={Matplotlib} text="Matplotlib" />
            <Frameworks imgurl={tkinter} text="Tkinter" />
            <Frameworks imgurl={scrapy} text="Scrapy-shell" />
            <Frameworks imgurl={qt} text="Qt designer" />
            <Frameworks imgurl={anaconda} text="Anaconda" />
          </div>
          <div className="flex">
            <Frameworks imgurl={figma} text="Figma" />
            <Frameworks imgurl={ps} text="Photoshop" />
            <Frameworks imgurl={ai} text="Illustrator" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
