import React from "react";
import { HiOutlineMailOpen } from "react-icons/hi";

export default function HeaderInfo() {
  return (
    <div className="  mt-28 flex flex-col items-center text-center sm:flex-row sm:items-center sm:justify-evenly text-[#2a2a84] mb-20">
      <h5 className=" ">
        Design for <br />
        Website
      </h5>
      <h5 className=" mt-4">
        Phone <br />
        +989123768818
      </h5>

      <div className="sm:flex sm:items-center mt-4">
        <h5 className=" sm:text-[#eab9ae]">
          Drop your Message <br />
          <a
            className=" hover:border-b-2 border-[#2a2a84] sm:border-[#eab9ae]"
            href="#"
          >
            morezaaa84@gmail.com
          </a>
        </h5>
        <span className="hidden sm:block sm:ml-8 border-2 border-[#eab9ae] rounded-full p-1 sm:p-3">
          <a href="#">
            <HiOutlineMailOpen className=" text-[#eab9ae] sm:text-2xl" />
          </a>
        </span>
      </div>
    </div>
  );
}
