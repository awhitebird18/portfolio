import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-left">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-start items-center">
        <div>
          <p className="text-xl tracking-widest text-slate-500">
            Hi, my name is
          </p>
          <h1 className="py-4 text-[#5651e5]">Aaron Whitebird</h1>
          <h2 className="py-2">A Front-End Web Developer</h2>
          <p className="py-4max-w-[70%] m-auto mb-16 font-light text-gray-400">
            I am a front-end web developer specializing in building exceptional
            digital experiences. Currently, I am focused on building responsive
            front-end web applications while learning back-end technologies.
          </p>
          <div className="flex gap-6 items-center justify-between max-w-[min-content]">
            <a
              href="https://github.com/awhitebird18"
              target="_blank"
              rel="noreferrer"
              className="rounded-full shadow-lg shadow-indigo-700 p-4 cursor-pointer hover:scale-105 ease-in duration-300 text-slate-50"
            >
              <FaGithub />
            </a>
            <div className="rounded-full shadow-lg shadow-indigo-700 p-4 cursor-pointer hover:scale-105 ease-in duration-300 text-slate-50">
              <Link href="/#contact">
                <AiOutlineMail />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
