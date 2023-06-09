import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-0 2xl:px-16">
        <Image
          src="/../public/assets/wrlogo.png"
          alt="/"
          width="80"
          height="20"
        />
        <div className="mr-5">
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b text-[#0A5F7E]">
                Home
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b text-[#0A5F7E]">
                About
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover: border-b text-[#0A5F7E]">
                Skills
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover: border-b text-[#0A5F7E]">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover: border-b text-[#0A5F7E]">
                Blog
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover: border-b text-[#0A5F7E]">
                Contacts
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={nav ? " fixed left-0 top-0 w-full h-screen" : ""}
      >
        <div
          className={
            nav
              ? " md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : " fixed left-[-100%] ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/../public/assets/wrlogo.png"
                alt="/"
                width="80"
                height="20"
              />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer "
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's build something legendary
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm"> Home </li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm"> About </li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm"> Skills </li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm "> Projects </li>
              </Link>
              <Link href="/">
              <li className="py-4 text-sm"> Blog </li>
            </Link>
              <Link href="/">
                <li className="py-4 text-sm"> Contacts </li>
              </Link>
            </ul>
            <div className="pt-18">
              <p className="uppercase tracking-widest text-[#0A5F7E]">
                {" "}
                Let's Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:nscale-105 ease-in duration-300">
                  <AiOutlineMail />
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
