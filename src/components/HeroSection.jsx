import React from "react";
import niketnairmax from "../assets/niketnairmax.png";
import smashy1 from "../assets/smashy1.png";
import smashy2 from "../assets/smashy2.png";
import smashy3 from "../assets/smashy3.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import whatsup from "../assets/whatsup.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";

const HeroSection = () => {
  return (
    <div className=" relative max-w-full font-montserrat min-h-screen flex items-center bg-gradient-to-b from-[#FF30E3]/80 to-white justify-center">
      <div className="hidden   absolute inset-0 left-1/2 rounded-full h-[300px] w-[300px] animate-blob top-48 filter blur-3xl bg-[#FF30E3] "></div>
      <div className="hidden  absolute inset-0 left-2/3 rounded-full h-[300px] w-[300px] animate-blob top-44 filter blur-3xl bg-[#FF30E3] opacity-50 "></div>
      <div className="hidden  absolute inset-0 left-1/3 rounded-full anima animate-blob h-[300px] w-[300px] top-48 filter blur-3xl bg-white  "></div>
      <div className="hidden relative shadow-md shadow-[#EC3015]/5  w-[1000px] font-sora py-10 rounded-xl md:flex flex-col items-center mt-20 justify-center mx-auto bg-white/10 backdrop-blur-3xl ">
        <img
          src={niketnairmax}
          alt="nike tn air max"
          className="absolute  hover:scale-110 duration-100 ease-in-out  w-1/2 rotate-45 -inset-10 left -top-32 "
        />
        <img
          src={smashy1}
          alt="nike tn air max"
          className="absolute hover:scale-110 duration-100 ease-in-out  w-1/5  inset-0 left-[800px]  -top-36 "
        />
        <img
          src={smashy3}
          alt="nike tn air max"
          className="absolute hover:scale-110 duration-100 ease-in-out  w-1/4  inset-0 left-[750px]  -top-0 "
        />
        <img
          src={smashy2}
          alt="nike tn air max"
          className="absolute hover:scale-110 duration-100 ease-in-out  w-1/5  inset-0 left-[800px]  top-14 "
        />
        <img
          src={niketnairmax}
          alt="nike tn air max"
          className="absolute hover:scale-110 duration-100 ease-in-out  w-1/3  inset-0 left-[750px]  top-60 "
        />

        <h2 className="font-black text-[#EC3015] italic -translate-x-36 ">
          SMASHY
        </h2>
        <div className="relative">
          <h1 className="text-9xl font-bold italic text-[#FF30E3] scale-105 filter blur-sm ">
            FOOT
          </h1>
          <h1 className="text-9xl font-bold italic  text-white inset-0 absolute">
            FOOT
          </h1>
        </div>
        <h2 className="font-bold text-[#EC3015]  italic text-end translate-x-36">
          WEAR
        </h2>
        <div className="flex my-6 space-y-3 flex-col text-[#FF30E3]  items-start z-10 justify-center">
          <h1 className="font-bold ">KEEP WALKING</h1>
          <p className="text-xs font-semibold font-montserrat">
            100% Trusted Products
          </p>
          <p className="text-xs font-semibold font-montserrat">
            Nationwide Dilivery {"(2-5 Working days)"}
          </p>
          <div className="text-[#EC3015]  flex space-x-3 items-center">
            <button>ORDER</button>
            <FaLongArrowAltRight className="cursor-pointer hover:translate-x-4 duration-200 ease-linear" />
          </div>
          <div className="flex space-x-3 pt-6 justify-center  items-center">
            <img
              src={facebook}
              alt="facebook icon"
              className="w-6 hover:scale-110 duration-200 ease-in-out cursor-pointer"
            />
            <img
              src={whatsup}
              alt="whatsup icon"
              className="w-6 hover:scale-110 duration-200 ease-in-out cursor-pointer"
            />
            <img
              src={instagram}
              alt="instagram icon"
              className="w-6 hover:scale-110 duration-200 ease-in-out cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="absolute inset-0 bg-white rounded-full top-56 left-20 filter animate-blob blur-3xl   w-[200px] h-[200px]"></div>
      <div className="absolute inset-0 bg-purple-600/50 animate-blob rounded-full top-56 left-[150px] filter blur-3xl   w-[200px] h-[200px]"></div>
      <div className="absolute inset-0 bg-white/70 rounded-full animate-blob top-[400px] left-20 filter blur-3xl   w-[200px] h-[200px]"></div>
      <div className="relative font-sora shadow-md shadow-[#EC3015]/5 bg-white/10 md:hidden backdrop-blur-xl  w-[320px] h-[500px] mx-4 rounded-xl flex  flex-col items-center justify-center">
        <img
          src={niketnairmax}
          alt="niketnairmax"
          className="-rotate-0 absolute inset-0 w-[500px]  -top-52 z-20"
        />
        <h2 className="font-black text-[#EC3015] italic -translate-x-20">
          SMASHY
        </h2>
        <div className="relative">
          <h1 className="text-8xl font-bold italic text-[#FF30E3] filter blur-sm ">
            FOOT
          </h1>
          <h1 className="text-8xl font-bold italic  text-white inset-0 absolute">
            FOOT
          </h1>
        </div>
        <h2 className="font-bold text-[#EC3015]  italic text-end translate-x-20 ">
          WEAR
        </h2>
        <div className="flex my-6 space-y-3 flex-col text-[#FF30E3]  items-start z-10 justify-center">
          <h1 className="font-bold ">KEEP WALKING</h1>
          <p className="text-xs font-semibold font-montserrat">
            100% Trusted Products
          </p>
          <p className="text-xs font-semibold font-montserrat">
            Nationwide Dilivery {"(2-5 Working days)"}
          </p>
          <div className="text-[#EC3015]  flex space-x-3 items-center">
            <button>ORDER</button>
            <FaLongArrowAltRight className="cursor-pointer hover:translate-x-4 duration-200 ease-linear" />
          </div>
          <div className="flex space-x-6 pt-6 justify-center  items-center">
            <img
              src={facebook}
              alt="facebook icon"
              className="w-8 hover:scale-110 duration-200 ease-in-out cursor-pointer"
            />
            <img
              src={whatsup}
              alt="whatsup icon"
              className="w-8 hover:scale-110 duration-200 ease-in-out cursor-pointer"
            />
            <img
              src={instagram}
              alt="instagram icon"
              className="w-8 hover:scale-110 duration-200 ease-in-out cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
