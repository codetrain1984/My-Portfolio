import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" bg-purple-600 w-full h-[120px] ">
      <div className=" w-full h-full flex items-center justify-evenly ">
        <h1>
          <span className=" text-white">Mo</span>Rez
        </h1>
        <ul>
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
        <button className=" border-2 border-white p-3 rounded-full text-white hover:bg-white hover:text-purple-600">
          Let's Talk
        </button>
      </div>
    </div>
  );
};

export default Navbar;
