import React from "react";
import Image from "next/image";

const HeaderContent = () => {
  return (
    <div className="flex flex-col items-center sm:flex-row sm:items-center sm:ml-36 sm:mt-28">
      <div
        className="flex items-center justify-center mt-28 w-[140px] sm:w-[330px] h-[140px] sm:h-[330px] sm:mr-11 border-2
       sm:border-4 border-[#554a8e] rounded-full"
      >
        <div className=" w-[130px] sm:w-[310px] h-[130px] sm:h-[310px] rounded-full">
          <Image
            className=" w-full h-full rounded-full object-cover"
            src="/Images/Moreza.jpg"
            alt="/"
            width={330}
            height={330}
          />
        </div>
      </div>
      <div className=" mt-14 text-[#554a8e] text-center sm:ml-56">
        <h1 className=" font-roboto sm:text-white">
          This is Mo Reza <br />
          Frontend Developer
        </h1>
        <h5 className=" sm:text-white">React JS</h5>
      </div>
    </div>
  );
};

export default HeaderContent;
