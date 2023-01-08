import React from "react";
import { TbQrcode } from "react-icons/tb";
import { FiMonitor } from "react-icons/fi";
import { SiAdobephotoshop } from "react-icons/si";

export default function ServiceInfo() {
  return (
    <div
      className="bg-blue-300 grid w-full h-full
     sm:flex sm:items-center sm:justify-between"
    >
      <div className=" bg-red-500 w-11/12 flex flex-col items-center justify-center sm:w-1/5 mt-20">
        <span className="text-4xl text-center text-[#2a2a84] mb-16">
          <TbQrcode />
        </span>
        <h2 className="mb-10 text-center">Web design</h2>
        <p className=" text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia maxime
          eius non, ullam asperiores nostrum temporibus est qui!
        </p>
      </div>
      <div className=" bg-red-500 w-11/12 sm:w-1/5 flex flex-col items-center justify-center m-auto mt-20">
        <span className="text-4xl text-[#2a2a84] mb-16">
          <FiMonitor />
        </span>
        <h2 className="mb-10">Web developing</h2>
        <p className=" text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia maxime
          eius non, ullam asperiores nostrum temporibus est qui!
        </p>
      </div>
      <div className=" bg-red-500 w-11/12 sm:w-1/5 flex flex-col items-center justify-center m-auto mt-20">
        <span className="text-4xl text-[#2a2a84] mb-16">
          <SiAdobephotoshop />
        </span>
        <h2 className="mb-10">Web design</h2>
        <p className=" text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia maxime
          eius non, ullam asperiores nostrum temporibus est qui!
        </p>
      </div>
    </div>
  );
}
