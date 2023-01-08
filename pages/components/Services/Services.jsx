/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import ServiceInfo from "./ServiceInfo";

export default function Services() {
  return (
    <div className=" w-full h-screen">
      {/* <div className="w-full h-full absolute">
        <img
          className=" w-full h-full  mix-blend-overlay object-cover"
          src="/Images/social.png"
          alt="/"
        />
      </div> */}
      <h1 className=" text-center">Services offers</h1>
      <ServiceInfo />
    </div>
  );
}
