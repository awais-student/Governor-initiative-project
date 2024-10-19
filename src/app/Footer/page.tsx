import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <div>
        <div className="w-full h-[400px] bg-[#F4F4F5] flex justify-between px-10 mt-20">
          <div className="w-[30%] h-full pt-11 pl-11">
            <h1 className="font-bold text-[18px]  mb-2  ">Core Courses</h1>
            <h1 className="cursor-pointer">Programming Fundamentals</h1>
            <h1 className="cursor-pointer">Web2 Using NextJS</h1>
            <h1 className="cursor-pointer">Earn as You Learn</h1>
          </div>
          <div className="w-[30%] h-full pt-11 pl-4 ">
            <h1 className="font-bold text-[18px] mb-2  ">Advance Courses</h1>
            <h1 className="cursor-pointer">Web 3 and Metaverse</h1>
            <h1 className="cursor-pointer">Cloud-Native Computing</h1>
            <h1 className="cursor-pointer">
              Artificial Intelligence (AI) and Deep Learning
            </h1>
            <h1 className="cursor-pointer">Ambient Computing and IoT</h1>
            <h1 className="cursor-pointer">Genomics and Bioinformatics</h1>
            <h1 className="cursor-pointer">
              Network Programmability and Automation
            </h1>
          </div>
          <div className="w-[30%] h-full pt-11 pl-4">
            <h1 className="text-[24px] font-extrabold mb-4">Social Links</h1>
            <div className="flex space-x-2">
              <div className="text-[#385693] text-[30px] cursor-pointer">
                <FaFacebook />
              </div>

              <div className="text-[#F70000] text-[30px] cursor-pointer">
                <FaYoutube />
              </div>

              <div className="text-[#1C9CEA] text-[30px] cursor-pointer">
                <IoLogoTwitter />
              </div>
            </div>

            <div className="mt-5 text-[#044E83] cursor-pointer flex space-x-3">
              <div className="text-[25px]">
                <MdOutlineMail />
              </div>
              <div className="text-[#044E83] underline">
                <a href="#">education@governorsindh.com</a>
              </div>
            </div>
          </div>
        </div>
    </div>
  )

}

export default Footer