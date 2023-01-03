import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className=" w-full h-screen flex items-center justify-center bg-[url('/Images/blob-haikei(4).svg')] bg-no-repeat">
      <div className=" w-1/4 mr-16 ">
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

      <Image src="/Images/code-typing.webp" alt="/" width={500} height={450} />
    </div>
  );
}
