import React from "react";
import python from "./Assets/python.png";
import js from "./Assets/js.png";
import node from "./Assets/node.png";
import express from "./Assets/express.png";
import mongo from "./Assets/mongo.png";
import react from "./Assets/react.png";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="h-full bg-gradient-to-b from-c1 via-c2 to-c3">
      <section
        id="home"
        className="bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/21/05/48/2105484dd1d336edcc21ee15693b9664.jpg')",
        }}
      >
        <div className="text-white ">
          <ul className="flex justify-center pt-8 space-x-10 font-segoe font-semibold">
            <li className="cursor-pointer">
              <a href="#home">Home</a>
            </li>

            <li className="cursor-pointer">
              <a href="#about">About Me</a>
            </li>

            <li className="cursor-pointer">
              <a href="#skills">Skills </a>
            </li>

            <li className="cursor-pointer">
              <a href="#projects">Projects</a>
            </li>

            <li className="cursor-pointer">
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </div>

        <div className="flex grid-cols-3">
          <div className="flex items-center h-screen ml-10 w-[40%]">
            <div className="text-center text-white align-middle">
              <h1 className="tracking-[.4em] text-5xl font-bold font-literata">
                SANDARUWAN
              </h1>
              <h1 className="tracking-[.4em] text-5xl font-bold font-literata">
                RATHNAYAKA
              </h1>
              <h2 className="font-roboto font-extralight text-sm">
                &#123;“Programming is my passion - turning challenges into
                solutions”&#125;;
              </h2>
            </div>
          </div>

          <div className="flex items-center justify-center h-screen text-white w-[55%] ">
            <div className="ml-16 relative h-[600px] w-96">
              <div className="absolute top-0 transform left-3/4 -translate-x-1/3">
                <img
                  src={python}
                  alt="python"
                  className="w-16 h-16 rounded-full "
                />
              </div>
              <div className="absolute right-0 transform -translate-y-1/2 translate-x-3/4 top-1/3">
                <img
                  src={react}
                  alt="react"
                  className="w-16 h-16 rounded-full "
                />
              </div>
              <div className="absolute right-0 transform -translate-y-1/2 -translate-x-1/10 top-1/2">
                <img
                  src={node}
                  alt="node.js"
                  className="w-16 h-16 rounded-full "
                />
              </div>
              <div className="absolute left-0 transform translate-y-1/2 bottom-1/4">
                <img
                  src={express}
                  alt="express"
                  className="w-16 h-16 rounded-full "
                />
              </div>
              <div className="absolute bottom-0 transform translate-x-1/2 left-1/2">
                <img
                  src={mongo}
                  alt="mongodb"
                  className="w-16 h-16 rounded-full "
                />
              </div>
              <div className="absolute right-0 transform translate-y-1/2 bottom-1/4">
                <img
                  src={js}
                  alt="javascript"
                  className="w-16 h-16 rounded-full "
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end h-screen w-[5%]">
            <div className="mr-4 space-y-4 text-2xl text-center text-white align-middle">
              <a href="www.facebook.com">
                <i className="fa-brands fa-square-facebook cursor-pointer"></i>
              </a>
              <br />
              <i className="fa-brands fa-square-github cursor-pointer"></i>
              <br />
              <i className="fa-brands fa-linkedin cursor-pointer"></i>
              <br />
              <i className="fa-brands fa-square-instagram cursor-pointer"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center m-8" id="about">
        <About />
      </section>

      <section className="flex justify-center m-8" id="skills">
        <Skills />
      </section>

      <section className="flex justify-center m-8" id="projects">
        <Projects />
      </section>

      <section className="flex justify-center m-2" id="contact">
        <Contact />
      </section>

      <section className="flex justify-center mt-12 bg-gray-900">
        <Footer />
      </section>
    </div>
  );
}

export default App;
