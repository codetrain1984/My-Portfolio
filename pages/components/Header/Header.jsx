import React from "react";
import Navbar from "../Navbar";
import Image from "next/image";

const Header = () => {
  return (
    <div className=" bg-[url('/Images/background-1.svg')] bg-no-repeat bg-cover h-screen">
      <Navbar />
      <div className=" left-30 w-[350px] h-[350px] border-4 border-[#9aadce] rounded-full">
        <div className=" bg-[#323377] w-[330px] h-[330px] rounded-full">
          <Image
            className=" w-full h-full rounded-full object-cover"
            src="/Images/wallpapers.jpg"
            alt="/"
            width={330}
            height={330}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
