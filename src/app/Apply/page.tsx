"use client";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

const Apply = () => {
  return (
    <>
    <div className="flex items-center justify-center">
      <div className="w-[60%] h-[60%]  mb-5 transition duration-300 shadow-2xl mt-32">
      <div>
        <h1 className="text-[#044E83] text-[29px] text-center mt-20 font-semibold">
          Before continuing to the application <br /> please subscribe on these
          social <br /> media platforms.
        </h1>
      </div>
      <div className="text-center text-[40px] text-[#044E83] flex items-center justify-center mt-20    ">
        <FaFacebook />
      </div>
      <div className=" flex items-center justify-center ">
        <button className="bg-[#044E83] py-4 px-20 text-white font-bold text-[23px] mt-20">
          Continue
        </button>
      </div>
      <div className="flex items-center justify-center mt-10 space-x-2 mb-14">
        <h1 className="text-[19px] font-bold">Already applied?</h1>
        <Link className="text-blue-600 text-[19px] underline   " href="#"> Get Admit Card</Link>
      </div>
    </div>
    </div>

    {/* <div>
      <div className="flex items-center justify-center text-[20px] text-[#044E83] space-x-2">
        <h3 className="font-bold p-[7px] rounded-[100%] border-2 border-[#044E83]">1</h3>
        <p className="text-[18px] font-bold">Facebook</p>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div> */}
    </>
  );
};

export default Apply;
