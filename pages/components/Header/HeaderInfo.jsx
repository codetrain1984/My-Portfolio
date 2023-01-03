import React from "react";
import { HiOutlineMailOpen } from "react-icons/hi";

export default function HeaderInfo() {
  return (
    <div>
      <div className=" flex items-center text-[#2a2a84] justify-evenly mb-20">
        <h5>
          Design for <br />
          Website
        </h5>
        <h5>
          Phone <br />
          +989123768818
        </h5>
        <div className=" flex items-center">
          <h5 className=" text-[#eab9ae]">
            Drop your Message <br />
            <a className=" hover:border-b border-[#eab9ae]" href="#">
              morezaaa84@gmail.com
            </a>
          </h5>
          <a
            href="#"
            className=" ml-8 border-2 border-[#eab9ae] rounded-full p-3"
          >
            <HiOutlineMailOpen className=" text-[#eab9ae] text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
}
