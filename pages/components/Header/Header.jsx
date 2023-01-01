import React from "react";
import Navbar from "../Navbar";
import HeaderContent from "./HeaderContent";
import HeaderInfo from "./HeaderInfo";

const Header = () => {
  return (
    <div className=" bg-[url('/Images/background-1.svg')] bg-no-repeat bg-right sm:bg-cover h-screen flex flex-col justify-between ">
      <Navbar />
      <HeaderContent />
      <HeaderInfo />
    </div>
  );
};

export default Header;
