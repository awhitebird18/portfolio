import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  const handleNav = () => {
    setNav((prev) => !prev);
  };

  useEffect(() => {
    if (router.asPath === "/timeqp") {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: navBg }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-lg shadow-slate-800 z-[100] ease-in duration-500"
          : "fixed w-full h-20 z-[100] ease-in "
      }
    >
      <div
        style={{ color: linkColor }}
        className="flex justify-between items-center w-full h-full px-2 2xl:px-16 bg-slate-900"
      >
        <Link href="/">
          <h1 className="cursor-pointer">AW</h1>
        </Link>

        <div>
          <ul className="hidden md:flex text-slate-50">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>

          <div className="md:hidden cursor-pointer" onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      {/* Mobile Menu */}

      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ease-in duration-200 "
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[70%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] py-2 px-4 ease-in duration-500"
              : "fixed left-[-100%] py-2 px-4 h-screen top-0 ease-in duration-500"
          }
        >
          <div className="flex justify-between items-center">
            <h1>AW</h1>
            <div
              className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer active:bg-gray-200 active:shadow-sm"
              onClick={handleNav}
            >
              <AiOutlineClose size={25} />
            </div>
          </div>

          <div className="border-b border-gray-300 my-4">
            <p>Lets build something legendary together</p>
          </div>

          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Project
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>

            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Lets Connect
              </p>

              <div className="flex items-center justify-between my-6 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
