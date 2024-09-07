import React, { useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import whatsup from "../assets/whatsup.png";
import phone from "../assets/phone.png";

const Gallery = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="max-w-full min-h-screen bg-white ">
      <div className="flex  max-w-full flex-col mx-4 items-center justify-center ">
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

        {/* The Gallery Component */}
        <div className="flex  rounded-full  ease-linear items-center space-x-6 justify-end  shadow-sm shadow-black/20 ">
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
                    <a href="whatsapp://send?phone=+27781351373">
                      <img
                        src={whatsup}
                        alt="WhatsApp Smashy"
                        className="w-8"
                      />
                    </a>

                    <a href="tel: +27 81 521 8030">
                      <img src={phone} alt="Call Smashy" className="w-8" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
