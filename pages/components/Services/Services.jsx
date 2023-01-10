/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import ServiceInfo from "./ServiceInfo";

export default function Services() {
  return (
    <div className="w-full sm:h-[50vh] my-20 ">
      <h1 className=" text-center">My Offered Services</h1>
      <ServiceInfo />
    </div>
  );
}
