import React from "react";
import { HiOutlineMailOpen } from "react-icons/hi";

export default function HeaderInfo() {
  return (
    <div>
      <div className=" flex items-center text-[#323377] justify-evenly mb-20">
        <h5>
          Design for <br />
          Web
        </h5>
        <h5>
          Phone <br />
          +989123768818
        </h5>
        <div className=" flex items-center">
          <h5>
            Drop your Message <br />
            <a className=" hover:border-b border-[#323377]" href="#">
              morezaaa84@gmail.com
            </a>
          </h5>
          <span className=" ml-8 border-2 border-[#323377] rounded-full p-3">
            <HiOutlineMailOpen className=" text-[#323377] text-2xl" />
          </span>
        </div>
      </div>
    </div>
  );
}
