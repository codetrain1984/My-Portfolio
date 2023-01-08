import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center sm:flex-row sm:items-center sm:justify-center sm:bg-[url('/Images/blob-haikei(4).svg')] sm:bg-left sm:bg-no-repeat mt-36">
      <div className="w-2/3 text-center mt-4 sm:w-1/4 sm:mr-16 ">
        <p className=" uppercase text-[#2a2a84] text-lg font-bold mb-6">
          About me
        </p>
        <h1 className=" uppercase text-[#2a2a84] mb-10 ">Personal Details</h1>
        <p className="text-[#2a2a84] text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          architecto consectetur consequatur cum sint nobis exercitationem
          ipsum. Velit saepe harum ullam iure odio minus magnam?
        </p>
      </div>
      <div className="">
        <Image
          src="/Images/code-typing11.png"
          alt="/"
          width={500}
          height={450}
        />
      </div>
    </div>
  );
}
