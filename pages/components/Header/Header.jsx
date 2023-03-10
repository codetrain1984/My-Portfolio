import React from "react";
import Navbar from "./Navbar";
import HeaderContent from "./HeaderContent";
import HeaderInfo from "./HeaderInfo";

const Header = () => {
  return (
    <div className="bg-[url('/Images/background-2.svg')] bg-no-repeat sm:bg-right-bottom sm:bg-cover h-screen sm:flex sm:flex-col sm:justify-between ">
      <Navbar />
      <HeaderContent />
      <HeaderInfo />
    </div>
  );
};

export default Header;
