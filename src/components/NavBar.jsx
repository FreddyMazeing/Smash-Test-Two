import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const toggleNavBar = () => {
    setOpen(!open);
  };
  return (
    <nav className="sticky font-montserrat  backdrop-blur-lg top-0 z-20 bg-[#FF30E3]/80 ">
      <div className=" flex items-center justify-between mx-4 md:mx-8 py-8  md:py-4">
        {/* Smashy Logo */}
        <h1 className="text-xl font-semibold  text-[#EC3015] hover:text-[#FF30E3] duration-200 ease-in-out cursor-pointer">
          Shashy
        </h1>
        {/*Desktop Nav Items */}
        <ul className="hidden md:flex text-base space-x-20  text-white ">
          <li className="hover:text-[#EC3015] cursor-pointer duration-200 ease-in-out">
            Home
          </li>
          <li className="hover:text-[#EC3015] cursor-pointer duration-200 ease-in-out">
            Gallery
          </li>
          <li className="hover:text-[#EC3015] cursor-pointer duration-200 ease-in-out">
            Contact
          </li>
        </ul>

        {/* open */}
        <div className="md:hidden sm:flex flex-col justify-end z-50">
          <button onClick={toggleNavBar}>
            {open ? (
              <GiHamburgerMenu className="text-3xl text-white  " />
            ) : (
              <IoCloseSharp className="text-3xl text-white" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Screen Nav Items */}
      {open && (
        <div
          className="sticky right-0 z-10 w-full   flex flex-col
          justify-center items-center md:hidden"
        >
          <ul className=" flex flex-col justify-center items-center  text-white py-6 space-y-8 font-semibold font-montserrat text-base ">
            <li className="hover:text-[#EC3015] cursor-pointer duration-200 ease-in-out">
              Home
            </li>
            <li className="hover:text-[#EC3015] cursor-pointer duration-200 ease-in-out">
              Gallery
            </li>
            <li className="hover:text-[#EC3015] cursor-pointer duration-200 ease-in-out">
              Contact
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
