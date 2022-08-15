import React from "react";
import ProjectItem from "./ProjectItem";
import ShiftPointLogo from "../public/assets/brandLogo.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full h-screen pt-16">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What Ive Built</h2>
        <div className="grid grid-cols-2 gap-8">
          <ProjectItem
            backgroundImg={ShiftPointLogo}
            title="Shift Point"
            tech="React JS"
            projectUrl="/shiftpoint"
          />

          <div>
            <div className="mb-8">
              <h2>Overview</h2>
              <p className="py-4">
                Shift Point is a feature-rich workforce management tool that is
                being developed to assist users track employee time worked,
                automate employee pay rules, and scheduling.
              </p>
            </div>

            <h2 className="text-slate-400">Technologies:</h2>

            <div className="grid grid-cols-2 py-4">
              <div>
                <h3 className="text-lg">Front End</h3>
                <ul className="flex flex-col gap-2 py-4">
                  <li>React JS</li>
                  <li>Redux</li>
                  <li>Sass</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg">Back End</h3>
                <ul className="flex flex-col gap-2 py-4">
                  <li>Node Js</li>
                  <li>Express</li>
                  <li>MongoDb</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
