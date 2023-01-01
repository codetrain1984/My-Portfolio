import React from "react";
import Link from "next/link";
import { MdOutlineArrowDropDown } from "react-icons/md";

const Navbar = () => {
  return (
    <div className=" flex items-center bg-[transparent] w-full h-[60px] sm:h-[90px] md:h-[120px]">
      <h1 className=" px-12 text-[#323377] text-3xl sm:text-6xl">
        <span className=" text-[#43647c] font-extrabold text-5xl sm:text-8xl">
          Mo
        </span>
        Rez.
      </h1>
      <div className=" w-full h-full flex items-center justify-end">
        <ul className=" hidden sm:block sm:mr-20 transition duration-500 ease-in">
          <Link className=" text-white ml-5 hover:border-b " href="/home">
            Home
          </Link>
          <Link className=" text-white ml-5 hover:border-b " href="/work">
            Work
          </Link>
          <Link className=" text-white ml-5 hover:border-b " href="/servic">
            Service
          </Link>
          <Link className=" text-white ml-5 hover:border-b " href="/blog">
            Blog
          </Link>
          <Link className=" text-white ml-5  hover:underline " href="/contact">
            Contact
          </Link>
        </ul>
        <button
          className="flex items-center text-sm
          
          border-2 border-[#323377] sm:border-white px-2 py-1
         sm:px-4 sm:py-2.5 rounded-full transition duration-500 ease-in-out sm:text-white hover:bg-[#323377] hover:text-white sm:hover:bg-white sm:hover:text-[#323377] mr-10"
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
