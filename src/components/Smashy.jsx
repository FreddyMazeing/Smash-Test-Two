import React from "react";
import smashy1 from "../assets/smashy1.png";
import smashy2 from "../assets/smashy2.png";
import smashy3 from "../assets/smashy3.png";
import repusen from "../assets/repusen.png";
import whatsup from "../assets/whatsup.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";

const Smashy = () => {
  return (
    <div className="md:hidden font-montserrat max-w-full my-2 bg-white flex items-center justify-center">
      {/* Smashies */}
      <div
        className="relative  md:hidden 
       w-[320px] h-[500px] mx-4 rounded-xl flex  flex-col items-center justify-center"
      >
        <h1 className="text-white font-montserrat translate-y-10 text-5xl font-bold z-10">
          SMASHY
        </h1>
        <div className="w-[300px] h-[100px] relative z-10 flex items-center justify-center shadow-md translate-y-16  bg-white rounded-md">
          <img
            src={repusen}
            alt="repusen"
            className="absolute inset-0 w-full h-full object-cover s"
          />
          <div className="flex items-center  px-6 space-x-8 py-2 justify-between backdrop-blur-sm rounded-xl   ">
            <a href="whatsapp://send?phone=+27663832381" target="_blank">
              {" "}
              <img src={whatsup} alt="WhatsApp" className="w-8" />
            </a>
            <a href="https://www.instagram.com/mazeing.z/" target="_blank">
              {" "}
              <img src={instagram} alt="Instagram" className="w-8" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100083277746215"
              target="_blank"
            >
              {" "}
              <img src={facebook} alt="facebook" className="w-8" />
            </a>
          </div>
        </div>
        <img
          src={smashy1}
          alt="smashy"
          className="absolute inset-0  w-44  left-40"
        />
        <img
          src={smashy3}
          alt="smashy"
          className="absolute inset-0 w-44  -left-2"
        />
        <img
          src={smashy2}
          alt="smashy"
          className="absolute inset-0 w-44  left-10 "
        />
      </div>
    </div>
  );
};

export default Smashy;
