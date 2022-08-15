import React from "react";
import Image from "next/image";
import Link from "next/link";
import contactImg from "../public/assets/contact.jpg";

import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen pt-40">
      <div className="max-w-[1240px] m-auto px-2 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full rounded-xl p-4 shadow-indigo-700 border-slate-700 border">
            <div className="lg:p-4 h-full">
              <div className="rounded-xl hover:scale-105 ease-in duration-300 ">
                <Image className="rounded-xl" src={contactImg} alt="/" />
              </div>
              <h2 className="py-2">Aaron Whitebird</h2>
              <p>Front-End Developer</p>
              <p className="py-4 text-slate-400 font-thin">
                I am currently available for full-time front-end developer
                roles.
              </p>
              <div>
                <p className="uppercase pt-8">Connect with me</p>

                <div className="flex gap-6 items-center justify-between max-w-[min-content] py-4">
                  <a
                    href="https://github.com/awhitebird18"
                    target="_blank"
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
          {/* Right */}
          <div className="col-span-3 w-full h-auto shadow-xl rounded-xl lg:p-4">
            <div className="p-4">
              <form
                name="contact-form"
                data-netlify="true"
                action="/success"
                method="POST"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="grid md:grid-cols-2 gap-4 w-full pb-2">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="uppercase text-sm py-2">
                      Name
                    </label>
                    <input
                      className="border rounded-lg p-3 flex border-slate-700 bg-slate-900"
                      type="text"
                      id="name"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border rounded-lg p-3 flex border-slate-700 bg-slate-900"
                      type="text"
                      id="phone"
                      name="phone"
                    />
                  </div>
                  <div className="flex flex-col py-2 col-span-full">
                    <label htmlFor="email" className="uppercase text-sm py-2">
                      Email
                    </label>
                    <input
                      className="border rounded-lg p-3 flex border-slate-700 bg-slate-900"
                      type="email"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div className="flex flex-col py-2 col-span-full">
                    <label htmlFor="subject" className="uppercase text-sm py-2">
                      Subject
                    </label>
                    <input
                      className="border rounded-lg p-3 flex border-slate-700 bg-slate-900"
                      type="text"
                      id="subject"
                      name="subject"
                    />
                  </div>
                  <div className="flex flex-col py-2 col-span-full">
                    <label htmlFor="message" className="uppercase text-sm py-2">
                      Message
                    </label>
                    <textarea
                      className="border rounded-lg p-3 border-slate-700 bg-slate-900"
                      rows="10"
                      id="message"
                      name="message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full p-4 text-gray-100 mt-4 col-span-full"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="py-12 flex justify-center">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-indigo-700 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-indigo-300" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
