import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 ">
        <div className="col-span-2 ">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I AM</h2>

          <p className="py-2 text-gray-400 font-light">
            I am currently working for a payroll software company where I lead
            implementation projects to ensure our clients, businesses accross
            Canada, have the best possible onboarding experience.
          </p>
          <p className="py-2 text-gray-400 font-light">
            Having a passion for technology and seeing the impact of well
            developed applications, my aim is to use my strong creativity and
            problem solving skills to build tools that will provide amazing user
            experiences.
          </p>
        </div>
        <div className="flex h-auto m-auto shadow-lg rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300 shadow-indigo-700">
          <Image
            className="rounded-xl"
            src="/../public/assets/developer.jpg"
            height={500}
            width={500}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
