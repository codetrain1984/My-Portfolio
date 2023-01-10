import React from "react";
import { TbQrcode } from "react-icons/tb";
import { FiMonitor } from "react-icons/fi";
import { SiAdobephotoshop } from "react-icons/si";

export default function ServiceInfo() {
  return (
    <div
      className="w-full h-full grid grid-cols-1 sm:grid-cols-3 mb-20
     "
    >
      <div className="w-11/12 flex flex-col items-center justify-center sm:w-3/5 m-auto mt-20">
        <span className="text-4xl text-center text-[#2a2a84] mb-10">
          <TbQrcode />
        </span>
        <h2 className="mb-10 text-center">Web design</h2>
        <p className=" text-center px-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia maxime
          eius non, ullam asperiores nostrum temporibus est qui!
        </p>
      </div>
      <div className="w-11/12 sm:w-3/5 flex flex-col items-center justify-center m-auto mt-20">
        <span className="text-4xl text-[#2a2a84] mb-10">
          <FiMonitor />
        </span>
        <h2 className="mb-10">Web developing</h2>
        <p className=" text-center px-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia maxime
          eius non, ullam asperiores nostrum temporibus est qui!
        </p>
      </div>
      <div className="w-11/12 sm:w-3/5 flex flex-col items-center justify-center m-auto mt-20">
        <span className="text-4xl text-[#2a2a84] mb-10">
          <SiAdobephotoshop />
        </span>
        <h2 className="mb-10">Graphic Design</h2>
        <p className=" text-center px-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia maxime
          eius non, ullam asperiores nostrum temporibus est qui!
        </p>
      </div>
    </div>
  );
}
