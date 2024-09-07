import React, { useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import whatsup from "../assets/whatsup.png";
import phone from "../assets/phone.png";
import niketnairmax2 from "../assets/niketnairmax2.png";
import niketnairmaxblack from "../assets/niketnairmaxblack.png";
import niketnairmaxbrown from "../assets/niketnairmaxbrown.png";
import nikeairuntempo from "../assets/nikeairuntempo.png";
import smashy4 from "../assets/smashy4.png";
import smashy3 from "../assets/smashy3.png";
import repusen3 from "../assets/repusen3.png";
import repusen2 from "../assets/repusen2.png";
import blackrepusen from "../assets/blackrepusen.png";
import smashyartboard from "../assets/smashyartboard.png";
import ordernow from "../assets/ordernow.png";
import { TbPointFilled } from "react-icons/tb";
import { HiOutlineMinus } from "react-icons/hi2";

const Gallery = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="max-w-full min-h-screen bg-white ">
      <div className="flex  max-w-full flex-col mx-4 items-center justify-center min-h-screen ">
        <h1 className="md:text-5xl text-4xl font-bold font-sora text-[#FF30E3] uppercase text-center ">
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
          <h1 className="uppercase font-semibold text-[#FF30E3] pl-6 text-xs md:text-sm ">
            the Gallery
          </h1>
          <div className="border-2 flex justify-end  border-[#FF30E3] text-white  pl-6  rounded-full">
            <div className="bg-[#EC3015] flex space-x-3  justify-end rounded-full items-center ">
              <h1 className="text-xs md:text-sm font-thin px-3">ORDER YOURS</h1>
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
        <div className="flex max-w-[340px]  md:max-w-full items-center my-20 justify-center">
          <div className="relative grid grid-cols-2 text-white space-y-2 justify-center py-4 rounded-full pr-14 md:px-20 px-10 bg-[#FF30E3] ">
            <img
              src={niketnairmax2}
              alt="niketnairmax"
              className=" absolute inset-0  md:w-full w-[210px] md:-top-36 -top-10 -left-4  md:-left-52"
            />
            <div></div>
            <div className="flex  text-xs flex-col space-y-1 translate-x-6 md:space-y-3">
              <h1 className="font-bold ">NIKE TN AIR MAX +(plus)</h1>
              <h2 className="font-bold text-xs">AVAILABLE IN-SIZES</h2>
              <div className="flex items-center space-x-1">
                <TbPointFilled className="text-[#EC3015]" />
                <h3 className=" font-extralight text-xs md:text-sm">2 TO 9</h3>
              </div>
              <div className="flex space-x-1 items-center">
                <HiOutlineMinus />
                <h2 className="font-extralight text-xs md:text-sm">
                  LIMITED COLORS
                </h2>
                <HiOutlineMinus />
              </div>
              <button
                onClick={() => setClicked((prev) => !prev)}
                className="bg-white font-bold px-10 py-1 text-[#EC3015] rounded-full text-center"
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
          <div className="relative  flex text-white space-y-2 justify-center items-start py-16  md:py-20 rounded-t-full rounded-br-full  md:px-40 px-10 bg-[#FF30E3] ">
            <div className="absolute inset-0 left-4 md:left-80 -top-14 flex space-y-2 flex-col items-center  text-red-500  bg-white/10 shadow-md shadow-black/10 rounded-3xl backdrop-blur-sm justify-center w-[200px] h-[100px]">
              <h1 className="text-[#FF30E3] font-bold">PURCHASE</h1>
              <h2 className="text-[#EC3015] font-light text-sm">TODAY</h2>
              <button
                onClick={() => setClicked((prev) => !prev)}
                className="bg-white px-6 cursor-pointer z-10 font-bold rounded-full flex items-center justify-center"
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
            <h1 className="font-bold ">NIKE TN AIR MAX +(plus)</h1>
            <img
              src={niketnairmaxbrown}
              alt="niketnairmaxbrown"
              className=" absolute inset-0  md:w-2/3 w-[210px] md:-top-16 top-1 -left-12  md:-left-16"
            />
            <img
              src={niketnairmaxblack}
              alt="niketnairmaxblack"
              className=" absolute inset-0  md:w-2/3 w-[230px] md:top-16 top-24 left-16  md:left-52"
            />
          </div>
        </div>

        {/* Repusen ELEMENT */}
        <div className="max-w-[320px] md:max-w-full flex rounded-t-3xl flex-col items-center py-4 px-2 justify-center my-36">
          <div className="bg-[#FF30E3] grid grid-rows-2 gap-48 p-2   rounded-t-lg rounded-b-full ">
            <div className="  flex flex-col justify-center items-center px-4 py-4  space-y-3">
              <h1 className="text-4xl font-bold  uppercase text-white">
                repusen
              </h1>
              <h1 className="text-lg mb-10 -translate-y-3 font-bold uppercase text-[#EC3015]">
                sneakers
              </h1>
              <div className="grid grid-cols-5  items-center gap-2 ">
                <div className="text-center text-[#EC3015] font-bold">3</div>
                <div className="py-1 px-1 bg-white"></div>
                <h3 className="font-light text-white text-sm">SIZES</h3>
                <div className="py-1 px-1 bg-white"></div>
                <div className="text-center text-[#EC3015] font-bold">4</div>
              </div>
              <h1 className="text-xs text-white">3 - 8</h1>
            </div>

            {/* Second Part of Grid */}
            <div className="relative flex items-center justify-center bg-white rounded-full border-8 border-[#EC3015]">
              <div className="bg-white/10 z-10 text-lg shadow-md -translate-y-10 shadow-black/10 text-white font-bold px-4 py-2 rounded-full backdrop-blur-md text-center">
                <h1>SMASHY</h1>
              </div>
              <img
                src={repusen3}
                alt="smashy4"
                className="absolute inset-0 -left-20 -top-24  w-44 hover:-translate-y-4 duration-300 ease-linear"
              />
              <img
                src={repusen2}
                alt="smashy4"
                className="absolute inset-0 left-28 w-44 -top-24 hover:-translate-y-4 duration-300 ease-linear "
              />
              <img
                src={smashy4}
                alt="smashy4"
                className="absolute inset-0 w-44 -top-56 hover:translate-y-4 duration-300 ease-linear "
              />
              <img
                src={blackrepusen}
                alt="smashy4"
                className="absolute inset-0 top-8 -rotate-15 scale-125  hover:-translate-y-4 duration-300 ease-linear z-10"
              />
            </div>
          </div>
          <h1 className="text-[#EC3015] mt-20 font-semibold uppercase text-sm">
            Available in iv colors{" "}
          </h1>
          <div className="grid grid-cols-4 gap-2 items-center justify-center my-2 px-2 py-2">
            <div className="py-2 px-4 rounded-full bg-black duration-200 ease-in-out hover:translate-y-2"></div>
            <div className="py-2 px-4 rounded-full bg-blue-300 duration-200 ease-in-out hover:-translate-y-2"></div>
            <div className="py-2 px-4 rounded-full bg-yellow-200 duration-200 ease-in-out hover:translate-y-2"></div>
            <div className="py-2 px-4 rounded-full bg-white border border-[#FF30E3] duration-200 ease-in-out hover:-translate-y-2"></div>
          </div>
        </div>

        {/*Order Now Smashy */}
        <div className="relative w-[320px] md:max-w-full  flex items-center justify-center mb-20">
          <img
            src={smashy3}
            alt="smashyartboard"
            className="absolute inset-0 -left-2 "
          />
          <img
            src={ordernow}
            alt="smashyartboard"
            className="absolute inset-0 w-32 -translate-y-10 translate-x-2  -left-2 "
          />
          <h1 className="absolute inset-0 text-[#EC3015] font-bold left-8 -top-6 ">
            Order <br /> <span className="text-xl">Now!!</span>
          </h1>
          <img
            src={smashyartboard}
            alt="smashyartboard"
            className="absolute inset-0 left-48  shadow-md shadow-[#FF30E3]/20 backdrop-blur-sm    rounded-full"
          />
          <img
            src={nikeairuntempo}
            alt="smashyartboard"
            className="absolute inset-0 top-96 -left-4   "
          />
          <div className=" absolute inset-0 top-[600px] grid grid-cols-2 gap-4 bg-[#FF30E3]/10 shadow-md shadow-black/20 px-4 h-[100px] justify-center  rounded-2xl items-center">
            <div className="flex flex-col space-y-1 ">
              <h1 className="font-bold text-[#FF30E3]"> nike air untempo</h1>
              <h1 className="font-light text-[#EC3015]">sizes: 2-10</h1>
              <h1 className="font-light text-[#EC3015]">limited color</h1>
            </div>
            <div className="flex flex-col space-y-1 items-center">
              <h1 className="font-bold text-[#FF30E3] uppercase ">Purchase </h1>
              <h1 className="font-light text-[#EC3015]  uppercase">Today</h1>
              <button className="bg-white text-[#EC3015] font-bold text-xl rounded-full px-6 py-1">
                Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
/*

 */
