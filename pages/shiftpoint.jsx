import React from "react";
import Image from "next/image";
import Link from "next/link";
import timeQpTimesheet from "../public/projects/timeQpTimesheet.png";
import { RiRadioButtonFill } from "react-icons/ri";
import dashboardImg from "../public/assets/dashboard.png";
import timesheetImg from "../public/assets/timesheetLight.png";
import schedulerImg from "../public/assets/scheduler.png";
import employeeImg from "../public/assets/employeeLight.png";
import userImg from "../public/assets/user.png";
import settingsImg from "../public/assets/settingsLight.png";
import brandLogo from "../public/assets/brandLogo.png";
import { BsChevronDoubleDown, BsChevronDoubleLeft } from "react-icons/bs";

const Shiftpoint = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        id="shiftpoint"
        className="w-full h-[30vh] lg:h-[40vh] relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/90 z-10" />
        <Image
          src={timeQpTimesheet}
          alt="/"
          layout="responsive"
          objectFit="cover"
        />
        <div className="p-6 absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10">
          <div className="flex gap-4 items-center mb-4">
            <Image src={brandLogo} height={60} width={60} alt="/" />
            <h1 className="py-2">Shift Point</h1>
          </div>
          <h3 className="text-slate-400">React JS | Node | MongoDb</h3>
        </div>
      </div>
      {/* Main */}
      <div className="max-w-[1240px] h-[70vh] mx-auto p-2 grid-rows-[min-content_max-content] md:grid-rows-1 grid md:grid-cols-5 gap-8 py-8">
        {/* Overview */}
        <div className="col-span-4 p-6">
          <p>Project</p>
          <h2 className="pb-4 text-indigo-400 ">Overview</h2>
          <p className="mb-6">
            Shift Point is a feature-rich workforce management tool that is
            being developed to assist users track employee time worked, automate
            employee pay rules, and scheduling.
          </p>
          <button className="px-8 py-2 mt-4 mr-8 hover:scale-105 duration-300">
            <Link href="/#projects">Back</Link>
          </button>
          <button className="px-8 py-2 mt-4 mr-8 hover:scale-105 duration-300">
            <a
              href="https://shift-point.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          </button>
          <button className="px-8 py-2 mt-4 mr-8 hover:scale-105 duration-30">
            <a
              href="https://github.com/awhitebird18/shift-point"
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
          </button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl rounded-xl p-4">
          <div className="p-2 ">
            <p className="font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-300 py-2 flex items-center">
                <RiRadioButtonFill className="mr-2" /> React
              </p>
              <p className="text-gray-300 py-2 flex items-center">
                <RiRadioButtonFill className="mr-2" /> Redux
              </p>
              <p className="text-gray-300 py-2 flex items-center">
                <RiRadioButtonFill className="mr-2" /> Sass
              </p>
              <p className="text-gray-300 py-2 flex items-center">
                <RiRadioButtonFill className="mr-2" /> Node
              </p>
              <p className="text-gray-300 py-2 flex items-center">
                <RiRadioButtonFill className="mr-2" /> MongoDb
              </p>
              <p className="text-gray-300 py-2 flex items-center">
                <RiRadioButtonFill className="mr-2" /> Express
              </p>
            </div>
          </div>

          <div className="py-12 flex justify-center absolute left-[50%] translate-x-[-50%] bottom-2 gap-4">
            <BsChevronDoubleDown className="text-indigo-300" size={30} />
            <p>See More Below</p>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto px-6">
        <h2 className="py-12 text-indigo-400">Component Details</h2>
        <div className="flex flex-col gap-y-32">
          {/* Dashboard */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="order-first lg:order-last">
              <h2>Dashboard</h2>
              <p className="p-4">
                The dashbaord was developed to provide the user a combination of
                quick links to navigate the application with the fewest number
                of clicks and a summary of only the most relevant data relating
                to employee time worked.
              </p>

              <h3>Features</h3>
              <ul className="p-4 flex flex-col gap-2">
                <li>Quick navigation Links</li>
                <li>Company Bulletins</li>
                <li>Summarized Timesheet Data</li>
                <li>User Task List</li>
              </ul>
            </div>
            <div className="shadow-xl shadow-indigo-800 rounded-lg overflow-hidden">
              <Image
                src={dashboardImg}
                alt="/"
                layout="responsive"
                objectFit="cover"
              />
            </div>
          </div>

          {/* Timesheet */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="">
              <h2>Timesheet</h2>
              <p className="p-4">
                It all begins with capturing employee time worked. Our employee
                timesheets provides all of the detail required to ensure
                employee time is captured correctly without having to sweat the
                finer employee pay rules.
              </p>
              <p className="p-4">
                With Shift Point, you setup the automated rules just the way you
                need and we will handle the rest.
              </p>

              <h3>Features</h3>
              <ul className="p-4 flex flex-col gap-2">
                <li>Automate Overtime, Breaks, Shift Premiums and More!</li>
                <li>Simple Approval Process</li>
                <li>
                  Our detailed filters allow you to view the data you need
                </li>
                <li>Export timesheet data at anytime</li>
              </ul>
            </div>
            <div className="shadow-xl shadow-indigo-800 rounded-lg overflow-hidden">
              <Image
                src={timesheetImg}
                alt="/"
                layout="responsive"
                objectFit="cover"
              />
            </div>
          </div>

          {/* Scheduler */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="order-first lg:order-last">
              <h2>Scheduler</h2>
              <p className="p-4">
                Ensure you always have sufficient coverage with the Shift Point
                Scheduler. With ease of use tools, you will have a have the
                ability to work on your schedules efficiently to spend more time
                on the things that matter - running your business!
              </p>

              <h3>Features</h3>
              <ul className="p-4 flex flex-col gap-2">
                <li>Color coding allows shifts to stand out</li>
                <li>Move or copy shifts with Drag n Drop</li>
                <li>Publish schedules at anytime</li>
                <li>Create as many schedules as you need!</li>
              </ul>
            </div>
            <div className="shadow-xl shadow-indigo-800 rounded-lg overflow-hidden">
              <Image
                src={schedulerImg}
                alt="/"
                layout="responsive"
                objectFit="cover"
              />
            </div>
          </div>

          {/* Employee Management */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2>Employee Management</h2>
              <p className="p-4">
                Add as many employee profiles as required and easily assign to
                users with the timesheets or schedules. With our rich employee
                customization, you may assign employee specific pay rules.
              </p>

              <h3>Features</h3>
              <ul className="p-4 flex flex-col gap-2">
                <li>Easily assign manager access to new employees</li>
                <li>Assign employee specific pay rules for the timesheets</li>
                <li>
                  Detail employee profiles allows you to capture all relevant
                  data
                </li>
              </ul>
            </div>
            <div className="shadow-xl shadow-indigo-800 rounded-lg overflow-hidden">
              <Image
                src={employeeImg}
                alt="/"
                layout="responsive"
                objectFit="cover"
              />
            </div>
          </div>

          {/* Employee Management */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="order-first lg:order-last">
              <h2>User Management</h2>
              <p className="p-4">
                With Shift Point, you can easily assign users with just the
                right access to ensure your time management tasks are assigned
                appropriately. Whether they need access to our timesheets or
                scheduler and only access to specific employees, we have got you
                covered.
              </p>

              <h3>Features</h3>
              <ul className="p-4 flex flex-col gap-2">
                <li>Assign just the right amount of access</li>
                <li>Easily create and manager user accounts</li>
                <li>Interact with your users directly within Shift Point</li>
              </ul>
            </div>

            <div className="shadow-xl shadow-indigo-800 rounded-lg overflow-hidden">
              <Image
                src={userImg}
                alt="/"
                layout="responsive"
                objectFit="cover"
              />
            </div>
          </div>

          {/* App Settings */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2>App Settings</h2>
              <p className="p-4">
                Time Management is complicated and there is no one size fits
                all. That is why we offer powerful tools to capture and automate
                employee pay rules with an emphasis on flexibility. With our app
                settings, you have complete control over employee pay rules and
                can really dig into the nitty-gritty.
              </p>

              <h3>Features</h3>
              <ul className="p-4 flex flex-col gap-2">
                <li>Set and adjust timesheet rules at anytime</li>
                <li>
                  Ability to customize and assign positions, departments, and
                  earnings
                </li>
                <li>Settings are in plain enlish and easy to navigate</li>
              </ul>
            </div>
            <div className=" shadow-xl shadow-indigo-800 rounded-lg overflow-hidden">
              <Image
                src={settingsImg}
                alt="/"
                layout="responsive"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-12 flex">
        <Link href="/#projects">
          <div className="rounded-full shadow-lg shadow-indigo-700 p-4 cursor-pointer hover:scale-105 ease-in duration-300 text-slate-200 flex gap-4 items-center">
            <BsChevronDoubleLeft />
            <p>Go Back</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Shiftpoint;
