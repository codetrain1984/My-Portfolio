import React from "react";
import Link from "next/link";
import { MdOutlineArrowDropDown } from "react-icons/md";

const Navbar = () => {
  return (
    <div className=" fixed flex items-center bg-[transparent] w-full h-[60px] sm:h-[90px] md:h-[120px]">
      <h1 className=" px-6 sm:px-12 text-[#2a2a84] text-3xl sm:text-6xl">
        <span className=" text-[#eab9ae] font-extrabold text-5xl sm:text-8xl">
          Mo
        </span>
        Rez.
      </h1>
      <div className=" w-full h-full flex items-center justify-end">
        <ul className=" hidden sm:block sm:mr-20 transition duration-500 ease-in">
          <Link
            className=" text-[#2a2a84] font-[600] text-md ml-5 transition duration-300 ease-in-out hover:text-white"
            href="/home"
          >
            Home
          </Link>
          <Link
            className=" text-[#2a2a84] font-[600] text-md ml-5 transition duration-300 ease-in-out hover:text-white hover:text-xl "
            href="/work"
          >
            Work
          </Link>
          <Link
            className=" text-[#2a2a84] font-[600] text-md ml-5 transition duration-300 ease-in-out hover:text-white hover:text-xl "
            href="/servic"
          >
            Service
          </Link>
          <Link
            className=" text-[#2a2a84] font-[600] text-md ml-5 transition duration-300 ease-in-out hover:text-white hover:text-xl "
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className=" text-[#2a2a84] font-[600] text-md ml-5 transition duration-300 ease-in-out hover:text-white hover:text-xl "
            href="/contact"
          >
            Contact
          </Link>
        </ul>
        <button
          className="flex items-center text-sm font-bold
          
          border-2 border-[#eab9ae] sm:border-white px-2 py-1
         sm:px-4 sm:py-2.5 rounded-full transition duration-500 ease-in-out sm:text-[#2a2a84] hover:bg-[#eab9ae] text-[#eab9ae] hover:text-[#2a2a84] sm:hover:bg-white sm:hover:text-[#2a2a84] mr-3 sm:mr-12"
        >
          Language
          <span className=" sm:text-xl">
            <MdOutlineArrowDropDown />
          </span>
        </button>

        <div
          id="dropdown"
          className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
        >
          <ul
            className="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefault"
          >
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Persian
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                English
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
