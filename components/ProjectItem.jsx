import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectItem = ({ backgroundImg, projectUrl, title, tech }) => {
  return (
    <div className="relative grid grid-cols-[max-content_1fr] items-center justify-center h-auto w-full shadow-lg shadow-indigo-700 rounded-xl p-10">
      <div className="flex">
        <Image
          className="rounded-xl group-hover:opacity-50"
          src={backgroundImg}
          alt="/"
        />
      </div>

      <div className="text-7xl pl-6 text-slate-50 whitespace-nowrap">
        {title}
      </div>
      <div className="absolute bottom-4 right-4 hover:scale-105 duration-500 ">
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg text-slate-50font-bold text-lg cursor-pointer p-10 bg-slate-700 shadow-lg shadow-slate-800">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
