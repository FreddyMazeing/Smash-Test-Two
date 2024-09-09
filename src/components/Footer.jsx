import React from "react";
import nikeairuntempo from "../assets/nikeairuntempo.png";
import nikeairuntempocopy from "../assets/nikeairuntempocopy.png";
import smashy4 from "../assets/smashy4.png";
import smashy3 from "../assets/smashy3.png";
import repusen3 from "../assets/repusen3.png";
import repusen2 from "../assets/repusen2.png";
import three from "../assets/three.png";
import four from "../assets/four.png";
import blackrepusen from "../assets/blackrepusen.png";
import jixian from "../assets/jixian.png";
import jordan from "../assets/jordan.png";
import untempohand from "../assets/untempohand.png";
import untempo from "../assets/untempo.png";
import smashyartboard from "../assets/smashyartboard.png";
import ordernow from "../assets/ordernow.png";
import smashyfooter from "../assets/smashyfooter.png";
import circle2 from "../assets/circle2.png";
import whatsup from "../assets/whatsup.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";

const Footer = () => {
  return (
    <div className="flex  max-w-full flex-col font-montserrat mx-4 items-center justify-center min-h-screen">
      {/* Grid */}
      <div className="grid md:grid-cols-2 max-w-[320px] min-h-screen my-48 gap-28  items-center justify-center md:max-w-full ">
        {/* Repusen ELEMENT */}
        <div className="max-w-[320px] md:max-w-full flex  flex-col items-center py-4 px-2 justify-center ">
          <div className=" relative bg-[#FF30E3] grid grid-rows-2 gap-28 md:gap-20 p-2   rounded-3xl ">
            <button
              className="absolute inset-0 bg-[#FF30E3]/10 rounded-full -top-6 
              text-xl hover:scale-110 duration-200 shadow-md shadow-black/10 md:left-[70px] left-16 
                w-[150px] h-[40px] backdrop-blur-sm font-bold hover:text-[#ff0000] hover:tracking-wider text-[#EC3015]"
            >
              Order
            </button>
            <div className="  flex flex-col justify-center items-center px-4 py-4  space-y-3">
              <h1 className="text-4xl font-bold  uppercase text-white">
                repusen
              </h1>
              <h1 className="text-lg mb-10 -translate-y-3 font-bold uppercase text-[#EC3015]">
                sneakers
              </h1>
              <div className="grid grid-cols-5  items-center justify-center gap-2 ">
                <img src={three} alt="three" className="w-8" />
                <div className="py-1 px-1 bg-white"></div>
                <h3 className="font-light text-white text-sm">SIZES</h3>
                <div className="py-1 px-1 bg-white"></div>
                <img src={four} alt="four" className="w-10" />
              </div>
              <h1 className="text-xs text-white">3 - 8</h1>
            </div>

            {/* Second Part of Grid */}
            <div className="relative flex items-center justify-center bg-white rounded-full border-8 border-[#EC3015]">
              <div className="bg-white/10 z-10 text-lg shadow-md -translate-y-10 shadow-black/10 text-white font-bold px-4 py-2 rounded-full backdrop-blur-md text-center">
                <h1 className="text-[#FF30E3]">SMASHY</h1>
              </div>
              <img
                src={repusen3}
                alt="smashy4"
                className="absolute inset-0 md:-left-10  -left-4 -top-24 w-32    md:w-44 hover:-translate-y-4 duration-300 ease-linear"
              />
              <img
                src={repusen2}
                alt="smashy4"
                className="absolute inset-0 md:left-28 left-36 md:w-44  w-32 -top-24 hover:-translate-y-4 duration-300 ease-linear "
              />
              <img
                src={smashy4}
                alt="smashy4"
                className="absolute inset-0 w-32 md:w-40 md:-top-32 -top-32 md:left-8 left-14 hover:translate-y-4 duration-300 ease-linear "
              />
              <img
                src={blackrepusen}
                alt="smashy4"
                className="absolute inset-0 top-8  md:top-14 md:-rotate-15 md:scale-125 md:left-0 -left-6 hover:-translate-y-4 duration-300 ease-linear z-10"
              />
            </div>
          </div>
          <h1 className="text-[#EC3015] mt-32 font-semibold uppercase text-sm">
            Available in iv colors{" "}
          </h1>
          <div className="grid grid-cols-4 gap-2 items-center justify-center my-2 px-2 py-2">
            <div className="py-2 px-4 rounded-full bg-black hover:bg-slate-900  duration-100 ease-in-out hover:translate-y-2"></div>
            <div className="py-2 px-4 rounded-full bg-blue-300 hover:bg-blue-500 duration-100 ease-in-out hover:translate-y-2"></div>
            <div className="py-2 px-4 rounded-full bg-yellow-200 hover:bg-yellow-500 duration-200 ease-in-out hover:translate-y-2"></div>
            <div className="py-2 px-4 rounded-full bg-white border border-[#FF30E3] hover:border-pink-800 duration-100 ease-in-out hover:translate-y-2"></div>
          </div>
        </div>

        {/*Order Now Smashy */}
        <div className="max-w-[320px] md:max-w-full flex   flex-col items-center py-4 px-2 justify-center ">
          <div className="relative w-[320px] md:max-w-full  flex items-center justify-center mb-20">
            <img
              src={ordernow}
              alt="smashyartboard"
              className="absolute inset-0 w-24 md:w-28 -translate-y-10 translate-x-2  left-4 "
            />
            <img
              src={smashy3}
              alt="smashyartboard"
              className="absolute md:hover:scale-110 duration-300 ease-in-out inset-0 left-8 w-48 md:w-60  "
            />

            <h1 className="absolute inset-0 text-[#EC3015] font-bold left-12 md:left-14 -top-8 md:-top-6 ">
              Order <br /> <span className="text-xl">Now!!</span>
            </h1>
            <img
              src={smashyartboard}
              alt="smashyartboard"
              className="absolute  inset-0 md:-top-20 w-20 left-48 md:w-24"
            />
            <img
              src={nikeairuntempo}
              alt="smashyartboard"
              className="absolute md:hover:scale-110 duration-300 ease-in-out  inset-0 top-64 left-6 md:top-64 md:-left-4 md:w-48  w-48 "
            />
            <div className=" absolute inset-0 top-96 md:top-96 grid grid-cols-2 gap-4 bg-[#FF30E3]/10 shadow-md shadow-black/10 px-4 h-[100px]  justify-center  rounded-2xl items-center">
              <div className="flex flex-col space-y-1 ">
                <h1 className="font-bold text-[#FF30E3]"> nike air untempo</h1>
                <h1 className="font-light text-[#EC3015] text-xs">
                  sizes: 2-10
                </h1>
                <h1 className="font-light text-[#EC3015] text-xs">
                  limited color
                </h1>
              </div>
              <div className="flex flex-col space-y-1 items-center">
                <h1 className="font-bold text-[#FF30E3] text-xs uppercase ">
                  Purchase{" "}
                </h1>
                <h1 className="font-light text-[#EC3015] text-xs  uppercase">
                  Today
                </h1>
                <button className="bg-white hover:bg-[#EC3015] hover:text-white duration-200 ease-in-out text-[#EC3015] font-bold text-xl rounded-full px-6 py-1">
                  Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Choose Yours */}
      <div className="flex flex-col space-y-3 translate-y-56 md:translate-y-0 items-center justify-center md:max-w-full min-h-screen max-w-[320px] my-10">
        <h1 className="text-3xl text-[#EC3015]  uppercase font-bold text-center">
          CHOOSE YOURS
        </h1>
        <h1 className="text-xl text-[#FF30E3] font-light text-center">
          WALK IN STYLE
        </h1>
        <p className="text-[#EC3015] font-bold uppercase text-xxs  ">
          we have all your{" "}
          <span className="text-xs font-light"> FAVOURITES</span>
        </p>
        <div className=" lowercase relative max-w-[#320]  md:w-full md:h-screen min-h-screen   translate-y-40  p-12 md:p-0">
          <img
            src={circle2}
            alt="circle"
            className="absolute inset-0 md:left-2  -top-5 md:w-full "
          />

          {/* Untempo white */}
          <div className=" absolute inset-0 left-28 md:left-60 h-[100px] md:w-[200px] w-[130px] -top-28 text-xs flex flex-col p-1  space-y-2 items-center justify-center border-[#FF30E3] border-2 rounded-3xl">
            <h1 className="font-bold text-[#EC3015]">nike air untempo</h1>
            <h1 className="font-light text-[#FF30E3]  text-xxs md:text-xs">
              sizes: 2-10
            </h1>
            <h1 className="font-light text-[#FF30E3]  text-xxs md:text-xs">
              limited colors
            </h1>
          </div>
          {/* Untempo white */}
          <img
            src={nikeairuntempocopy}
            alt="nikeairuntempo"
            className="absolute duration-300 ease-in-out md:hover:-rotate-12 hover:contrast-125 md:hover:scale-105 inset-0 w-24 md:w-36  md:left-48 left-28 -top-6 md:-top-20 "
          />
          {/* Ji Xian sneakers
           */}
          <div className=" absolute inset-0 left-28 md:left-80 h-[100px] w-[130px] md:w-[200px] md:top-20 top-40 text-xs  md:text-lg flex flex-col p-1 md:space-y-1 space-y-2 items-center justify-center border-[#FF30E3] border-2 rounded-3xl">
            <h1 className="font-bold text-[#EC3015]">Ji Xian sneakers</h1>
            <h1 className="font-light text-[#FF30E3] text-xxs md:text-xs">
              sizes: 4-8
            </h1>
            <h1 className="font-light text-[#FF30E3] text-xxs md:text-xs">
              3 colours
            </h1>
          </div>
          {/* Ji Xian sneakers */}
          <img
            src={jixian}
            alt="jixian"
            className="absolute duration-300 ease-in-out md:hover:-rotate-12  md:hover:scale-105 inset-0 w-32 md:w-60 md:left-52 left-20 top-20 "
          />

          {/* Nike Air Jordan 4s
           */}
          <div className=" absolute inset-0 md:-left-52 md:top-28 -left-12 md:h-[130px] md:w-[200px]  h-[80px] w-[130px] top-40 text-xs md:text-lg flex flex-col p-1  space-y-2 items-center justify-center border-[#FF30E3] border-2 rounded-3xl">
            <h1 className="font-bold text-[#EC3015]">nike air jordan 4s</h1>
            <h1 className="font-light text-[#FF30E3]  text-xxs md:text-xs">
              sizes: 1-8
            </h1>
            <h1 className="font-light text-[#FF30E3]  text-xxs md:text-xs">
              All colours
            </h1>
          </div>
          {/* Nike Air Jordan 4s */}
          <img
            src={jordan}
            alt="jordan"
            className="absolute duration-300 ease-in-out md:hover:rotate-12 md:hover:scale-105 inset-0 w-32 md:w-60 md:-left-32  -left-16   top-4 "
          />

          {/* Nike Air untempo
           */}
          <div className=" absolute inset-0 -left-14 md:-left-40 h-[80px] md:w-[150px] w-[130px] -top-32 text-xs flex flex-col p-1  space-y-2 items-center justify-center border-[#FF30E3] border-2 rounded-3xl">
            <h1 className="font-bold text-[#EC3015]">nike air untempo</h1>
            <h1 className="font-light text-[#FF30E3]  text-xxs md:text-xs">
              sizes: 2-10
            </h1>
            <h1 className="font-light text-[#FF30E3]  text-xxs md:text-xs">
              limited colors
            </h1>
          </div>
          {/*Nike Air untempo  */}
          <img
            src={untempohand}
            alt="jordan"
            className="absolute duration-300 ease-in-out md:hover:translate-y-2 hover:translate-y-2 inset-0 w-20 md:w-28  md:-left-4 md:-top-48  -left-2 -top-28 "
          />
          <img
            src={untempo}
            alt="jordan"
            className="absolute duration-300 ease-in-out md:hover:-rotate-12  hover:-translate-y-2 md:hover:-translate-y-0 md:hover:scale-105 inset-0 w-32 md:w-60  md:-left-28 md:-top-40  -left-12 -top-20 "
          />
          <button className="md:absolute top-24 left-20 md:px-8 px-4 py-2  bg-[#EC3015] rounded-full text-white font-bold">
            Order
          </button>
        </div>
      </div>
      <div className="relative flex items-center justify-center md:pb-0 pb-20 w-[320px] md:-translate-y-28 flex-col md:w-full h-[100px]  ">
        <img
          src={smashyfooter}
          alt=""
          className="absolute md:left-[530px] inset-0 w-96"
        />
        <h1 className="md:text-8xl text-5xl uppercase text-[#FF30E3] font-bold z-10 translate-y-60 md:translate-y-48 ">
          Smashy
        </h1>
        <div className="z-10 translate-y-72 bg-white/10 backdrop-blur-sm border border-[#FF30E3] py-2 px-6 rounded-xl max-w-[320px]  md:max-w-full flex flex-col justify-center items-center space-y-3">
          <h1 className="md:px-96 uppercase text-center md:text-2xl font-bold text-white">
            <span className="text-[#FF30E3]">thank you,</span>{" "}
            <span className="md:text-white text-[#FF30E3]">our lovely</span>
            <span className="text-[#FF30E3]"> customers</span>
          </h1>
          <h1 className="text-[#EC3015] md:text-base text-xs font-semibold">
            VISIT US AGAIN WE LOVE YOU!!
          </h1>
          <div className="grid grid-cols-3 gap-4">
            <img
              src={instagram}
              alt="instagram"
              className="w-8 cursor-pointer duration-200 ease-in-out hover:scale-110"
            />
            <img
              src={whatsup}
              alt="instagram"
              className="w-8 cursor-pointer duration-200 ease-in-out hover:scale-110"
            />
            <img
              src={facebook}
              alt="instagram"
              className="w-8 cursor-pointer duration-200 ease-in-out hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
