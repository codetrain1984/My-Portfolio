import React from "react";
import Link from "next/link";
import { MdOutlineArrowDropDown } from "react-icons/md";

const Navbar = () => {
  return (
    <div className=" flex items-center bg-[transparent] w-full h-[60px] sm:h-[90px] md:h-[120px]">
      <h1 className=" px-12 text-[#323377]">
        <span className=" text-[#c7e1f3] font-extrabold sm:text-9xl">Mo</span>
        Rez
      </h1>
      <div className=" w-full h-full flex items-center justify-end">
        <ul className=" sm:mr-20">
          <Link className=" text-white ml-2 text-lg" href="/home">
            Home
          </Link>
          <Link className=" text-white ml-2 text-lg" href="/work">
            Work
          </Link>
          <Link className=" text-white ml-2 text-lg" href="/servic">
            Service
          </Link>
          <Link className=" text-white ml-2 text-lg" href="/blog">
            Blog
          </Link>
          <Link className=" text-white ml-2 text-lg" href="/contact">
            Contact
          </Link>
        </ul>
        <button className="flex items-center border-2 border-white px-4 py-2.5 rounded-full text-white hover:bg-white hover:text-purple-600 mr-10">
          Language
          <span className=" text-lg">
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
