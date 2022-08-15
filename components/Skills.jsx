import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiSass,
  SiGit,
  SiNextdotjs,
  SiRedux,
} from "react-icons/si";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen pt-40">
      <div className="max-w-[1240px] mx-auto flex-flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 shadow-indigo-700">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="bg-[#ff5722] rounded-full p-3 w-min flex items-center justify-center shadow-md">
                <SiHtml5 color="#fff" size={40} />
              </div>
              <div>
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 shadow-indigo-700">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="bg-[#2299f8] rounded-full p-3 w-min flex items-center justify-center shadow-md">
                <SiCss3 color="#fff" size={40} />
              </div>
              <div>
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 shadow-indigo-700">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="bg-[#f0db4f] rounded-full p-3 w-min flex items-center justify-center shadow-md">
                <SiJavascript color="#fff" size={40} />
              </div>
              <div>
                <h3>Javascript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 shadow-indigo-700">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="bg-[#61dbfb] rounded-full p-3 w-min flex items-center justify-center shadow-md">
                <SiReact color="#fff" size={40} />
              </div>
              <div>
                <h3>React Js</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 shadow-indigo-700">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="bg-[#84ce24] rounded-full p-3 w-min flex items-center justify-center shadow-md">
                <SiNodedotjs color="#fff" size={40} />
              </div>
              <div>
                <h3>Node Js</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 shadow-indigo-700">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="bg-[#45adb4] rounded-full p-3 w-min flex items-center justify-center shadow-md">
                <SiTailwindcss color="#fff" size={40} />
              </div>
              <div>
                <h3>Tailwind CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 shadow-indigo-700">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="bg-[#60b24f] rounded-full p-3 w-min flex items-center justify-center shadow-md">
                <SiMongodb color="#fff" size={40} />
              </div>
              <div>
                <h3>Express Js</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 shadow-indigo-700">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="bg-gray-500 rounded-full p-3 w-min flex items-center justify-center shadow-md">
                <SiExpress color="#fff" size={40} />
              </div>
              <div>
                <h3>Express Js</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 shadow-indigo-700">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="bg-[#c36192] rounded-full p-3 w-min flex items-center justify-center shadow-md">
                <SiSass color="#fff" size={40} />
              </div>
              <div>
                <h3>Sass</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 shadow-indigo-700">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="bg-[#f05033] rounded-full p-3 w-min flex items-center justify-center shadow-md">
                <SiGit color="#fff" size={40} />
              </div>
              <div>
                <h3>Git</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 shadow-indigo-700">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="bg-gray-800 rounded-full p-3 w-min flex items-center justify-center shadow-md">
                <SiNextdotjs color="#fff" size={40} />
              </div>
              <div>
                <h3>Next Js</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 shadow-indigo-700">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="bg-[#7749bd] rounded-full p-3 w-min flex items-center justify-center shadow-md">
                <SiRedux color="#fff" size={40} />
              </div>
              <div>
                <h3>Redux Js</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
