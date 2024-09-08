import React, { useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import whatsup from "../assets/whatsup.png";
import phone from "../assets/phone.png";
import cleanairmax from "../assets/cleanairmax.png";
import niketnairmaxblack from "../assets/niketnairmaxblack.png";
import niketnairmaxbrown from "../assets/niketnairmaxbrown.png";

import { TbPointFilled } from "react-icons/tb";
import { HiOutlineMinus } from "react-icons/hi2";

const Gallery = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="max-w-full min-h-screen bg-white font-montserrat ">
      <div
        name="gallery"
        className="flex  max-w-full flex-col mx-4 items-center justify-center min-h-screen "
      >
        <h1 className="md:text-5xl text-4xl font-bold  text-[#FF30E3] uppercase text-center ">
          smashy footware
        </h1>
        <h2 className="font-montserrat font-thin text-[#FF30E3] my-4 text-3xl md:text-4xl uppercase text-center ">
          Welcome to smashy footware!!
        </h2>
        <p className="text-[#FF30E3] max-w-3xl text-center">
          Step into a world of comfort and style. Discover our curated
          collection of shoes designed to elevate your every step. From{" "}
          <span className="text-[#EC3015]">casual kicks</span> to{" "}
          <span className="text-[#EC3015]">formal footwear</span>, we have
          something to suit every occasion.
        </p>
        <p className="my-8 text-center font-montserrat  text-[#EC3015] uppercase text-xl font-semibold">
          EXPLORE OUR RANGE AND FIND YOUR PERFECT PAIR TODAY.
        </p>

        {/* THE GALLERY */}
        <div className="flex    rounded-full  ease-linear items-center space-x-6 justify-end  shadow-sm shadow-black/20 ">
          <h1 className="uppercase font-semibold text-[#FF30E3] pl-6 text-xxs md:text-sm ">
            the Gallery
          </h1>
          <div className="border-2 flex justify-end  border-[#FF30E3] text-white  pl-6  rounded-full">
            <div className="bg-[#EC3015] flex space-x-3  justify-end rounded-full items-center ">
              <h1 className="text-xxs md:text-sm font-thin px-3">
                ORDER YOURS
              </h1>
              <div className="px-4 rounded-full relative flex flex-col  bg-[#FF30E3] text-sm py-2 ">
                <MdAddShoppingCart
                  onClick={() => setClicked((prev) => !prev)}
                  className=" cursor-pointer  ease-in-out hover:scale-110 hover:text-[#EC3015]"
                />
                {clicked && (
                  <div
                    className="absolute transition-opacity duration-1000 space-y-2    -top-28 left-2 py-4 bg-[#FF30E3]/10 backdrop-blur-sm
                      items-center justify-center rounded-full flex flex-col"
                  >
                    <a href="whatsapp://send?phone=+27815218030">
                      <img
                        src={whatsup}
                        alt="WhatsApp Smashy"
                        className="w-8 hover:-translate-y-1 duration-200 ease-linear"
                      />
                    </a>

                    <a href="tel: +27 81 521 8030">
                      <img
                        src={phone}
                        alt="Call Smashy"
                        className="w-8 hover:-translate-y-1 duration-200 ease-linear"
                      />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/*Nike TN AIR CREAM  */}
        <div className="flex max-w-[340px]  md:max-w-full items-center my-20 justify-center ">
          <div className="relative grid grid-cols-2 text-white space-y-2 justify-center py-4 rounded-3xl pr-14 md:px-20 px-10 bg-[#FF30E3] ">
            <img
              src={cleanairmax}
              alt="niketnairmax"
              className=" absolute inset-0 md:hover:scale-110 duration-200 ease-in-out hover:contrast-125  md:w-5/6 w-[200px] md:-top-0 top-5 -left-0  md:-left-80"
            />
            <div></div>
            <div className="flex text-white md:px-8 md:py-8 shadow-md shadow-black/10  bg-white/10 p-2 rounded-md backdrop-blur-md text-xs flex-col space-y-1 translate-x-6 md:space-y-3">
              <h1 className="font-bold ">NIKE TN AIR MAX +(plus)</h1>
              <h2 className="font-bold text-xxs">AVAILABLE IN-SIZES</h2>
              <div className="flex items-center space-x-1">
                <TbPointFilled className="text-white" />
                <h3 className=" font-extralight text-xs md:text-sm text-white">
                  2 TO 9
                </h3>
              </div>
              <div className="flex  text-white items-center">
                <h2 className="font-extralight text-xxs md:text-sm">
                  LIMITED COLORS
                </h2>
              </div>
              <button
                onClick={() => setClicked((prev) => !prev)}
                className="bg-white hover:bg-[#EC3015] hover:text-white duration-200 ease-in- font-bold px-10 py-2 text-[#EC3015] rounded-full text-center"
              >
                Order
                {clicked && (
                  <div
                    className="absolute transition-opacity duration-1000 space-y-2  left-16  -top-0  py-4 bg-[#FF30E3]/10 backdrop-blur-sm
                      items-center justify-center rounded-full flex flex-col"
                  >
                    <a href="whatsapp://send?phone=+27815218030">
                      <img
                        src={whatsup}
                        alt="WhatsApp Smashy"
                        className="w-8 hover:-translate-y-1 duration-200 ease-linear"
                      />
                    </a>

                    <a href="tel: +27 81 521 8030">
                      <img
                        src={phone}
                        alt="Call Smashy"
                        className="w-8 hover:-translate-y-1 duration-200 ease-linear"
                      />
                    </a>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
        {/*Nike TN AIR Black And Brown  */}
        <div className="flex max-w-[320px]  md:max-w-full mx-2 items-center my-20 justify-center">
          <div className="relative  flex text-white space-y-2 justify-center items-start py-16  md:py-20 rounded-3xl   md:px-40 px-10 bg-[#FF30E3] ">
            <div
              className="absolute md:hover:scale-110 duration-300 ease-in-out inset-0 left-12 
            md:left-[350px] -top-14 flex space-y-2 flex-col items-center  text-red-500 
             bg-white/10 shadow-md shadow-black/10 rounded-3xl backdrop-blur-sm justify-center w-[200px] h-[100px]"
            >
              <h1 className="text-[#FF30E3] font-bold">PURCHASE</h1>
              <h2 className="text-[#EC3015] font-light text-sm">TODAY</h2>
              <button
                onClick={() => setClicked((prev) => !prev)}
                className="bg-white hover:bg-[#EC3015] hover:text-white duration-200 ease-in-out px-6 cursor-pointer z-10 font-bold rounded-full flex items-center justify-center"
              >
                Order
                {clicked && (
                  <div
                    className="absolute transition-opacity duration-1000 space-y-2  left-20  md:-top-10 -top-16  py-4 bg-[#FF30E3]/80
                      items-center justify-center rounded-full flex flex-col"
                  >
                    <a href="whatsapp://send?phone=+27815218030">
                      <img
                        src={whatsup}
                        alt="WhatsApp Smashy"
                        className="w-8 hover:-translate-y-1 duration-200 ease-linear"
                      />
                    </a>

                    <a href="tel: +27 81 521 8030">
                      <img
                        src={phone}
                        alt="Call Smashy"
                        className="w-8 hover:-translate-y-1 duration-200 ease-linear"
                      />
                    </a>
                  </div>
                )}
              </button>
            </div>
            <div className="absolute hidden md:flex md:hover:scale-110 duration-300 ease-in-out inset-0  -left-10 -top-14  space-y-2 flex-col items-center    bg-gradient-to-r from-[#FF30E3]/20 via-white/40  animate-bounce to-[#FF30E3]/10 shadow-md shadow-black/10 rounded-full backdrop-blur-sm justify-center w-[100px] h-[100px]">
              <h1 className="font-bold text-[#EC3015] font-montserrat">
                Specials
              </h1>
            </div>
            <h1 className="font-bold ">NIKE TN AIR MAX +(plus)</h1>
            <img
              src={niketnairmaxbrown}
              alt="niketnairmaxbrown"
              className=" absolute inset-0 md:hover:scale-110 duration-200 ease-in-out
               hover:contrast-125 md:w-[400px] w-[200px] md:-top-16 -top-3op-5 -left-2  md:-left-40"
            />
            <img
              src={niketnairmaxblack}
              alt="niketnairmaxblack"
              className=" absolute inset-0 md:hover:scale-110 duration-200 ease-in-out 
                md:w-[400px] w-[200px] md:top-16 top-28 left-24  md:left-72"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
/*

 */
