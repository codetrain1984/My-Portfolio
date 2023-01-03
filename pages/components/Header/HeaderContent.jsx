import React from "react";
import Image from "next/image";

const HeaderContent = () => {
  return (
    <div className="flex items-center ml-36">
      <div
        className="flex items-center justify-center w-[220px] sm:w-[330px] h-[220px] sm:h-[330px] mr-11
       border-4 border-[#554a8e] rounded-full"
      >
        <div className=" w-[200px] sm:w-[310px] h-[200px] sm:h-[310px] rounded-full">
          <Image
            className=" w-full h-full rounded-full object-cover"
            src="/Images/Moreza.jpg"
            alt="/"
            width={330}
            height={330}
          />
        </div>
      </div>
      <div className="text-white ml-56">
        <h1 className=" font-roboto">
          This is Mo Reza <br />
          Frontend Developer
        </h1>
        <h5>React JS</h5>
      </div>
    </div>
  );
};

export default HeaderContent;
