import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import whatsup from "../assets/whatsup.png";
import { Link } from "react-scroll";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const toggleNavBar = () => {
    setOpen(!open);
  };
  return (
    <nav className="sticky  shadow-md border border-white/20 shadow-[#FF30E3]/20 realtive font-montserrat   backdrop-blur-sm top-0 z-20 bg-[#FF30E3]/10 ">
      <div className=" flex items-center justify-between mx-4 md:mx-8 py-8  md:py-4">
        {/* Smashy Logo */}
        <h1 className="text-xl font-semibold text-[#EC3015]  hover:text-[#FF30E3] duration-200 ease-in-out cursor-pointer">
          Shashy
        </h1>
        {/*Desktop Nav Items */}
        <ul className="hidden md:flex text-base space-x-20 text-[#EC3015] ">
          <Link
            to="home"
            smooth={true}
            duration={100}
            className="hover:text-[#FF30E3]  cursor-pointer duration-200 ease-in-out"
          >
            Home
          </Link>
          <Link
            to="gallery"
            smooth={true}
            duration={100}
            className="hover:text-[#FF30E3]  cursor-pointer duration-200 ease-in-out"
          >
            Gallery
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={100}
            className="hover:text-[#FF30E3]  cursor-pointer duration-200 ease-in-out"
          >
            Contact
          </Link>
        </ul>

        {/* open */}
        <div className="md:hidden sm:flex flex-col justify-end z-50">
          <button onClick={toggleNavBar}>
            {open ? (
              <GiHamburgerMenu className="text-3xl text-[#EC3015]  " />
            ) : (
              <IoCloseSharp className="text-3xl text-[#EC3015]" />
            )}
          </button>
        </div>
      </div>

      {/* <div className="absolute md:top-[650px] top-[700px] left-2 inset-0">
        <a href="whatsapp://send?phone=+27815218030">
          <img
            src={whatsup}
            alt=""
            className="w-10 animate-pulse hover:cursor-pointer hover:scale-105 duration-200 ease-in-out "
          />
        </a>
      </div> */}
      {/* Mobile Screen Nav Items */}
      {open && (
        <div
          className="sticky right-0 z-50 w-full   flex flex-col
          justify-center items-center md:hidden"
        >
          <ul className=" flex flex-col justify-center items-center  text-[#EC3015] py-6 space-y-8 font-semibold font-montserrat text-base ">
            <li className="hover:text-[#FF30E3] cursor-pointer duration-200 ease-in-out">
              Home
            </li>
            <Link
              to="gallery"
              smooth={true}
              duration={100}
              className="hover:text-[#FF30E3] cursor-pointer duration-200 ease-in-out"
            >
              Gallery
            </Link>
            <li className="hover:text-[#FF30E3] cursor-pointer duration-200 ease-in-out">
              Contact
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
