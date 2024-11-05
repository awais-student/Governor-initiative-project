import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
        <div className="w-full h-[400px] bg-[#F4F4F5] flex justify-between px-10 mt-20">
          <div className="w-[30%] h-full pt-11 pl-11 text-[#353538]">
            <h1 className="font-bold text-[18px]  mb-2  ">Core Courses</h1>
            <div><Link href={"/ProgrammingFundamentals"}>Programming Fundamentals</Link></div>
            <div><Link href={"/Webusingmetaverse"}>Web2 Using NextJS</Link></div>
            <div><Link href={"/Earnyoulearn"}>Earn as You Learn</Link></div>
          </div>
          <div className="w-[30%] h-full pt-11 pl-4 text-[#353538]">
            <h1 className="font-bold text-[18px] mb-2  ">Advance Courses</h1>
            <div><Link href={"/Webandmetaverse"}>Web 3 and Metaverse</Link></div>
            <div><Link href={"/Cloudnative"}>Cloud-Native Computing</Link></div>
            <div><Link href={"/Artificialint"}>Artificial Intelligence (AI) and Deep Learning</Link></div>
            <div><Link href={"/Ambientcomputing"}>Ambient Computing and IoT</Link></div>
            <div><Link href={"/Genomics"}>Genomics and Bioinformatics</Link></div>
            <div><Link href={"/Networkprogrammability"}>Network Programmability and Automation</Link></div>
          </div>
          <div className="w-[30%] h-full pt-11 pl-4">
            <h1 className="text-[24px] font-extrabold mb-4">Social Links</h1>
            <div className="flex space-x-2">
              <div className="text-[#385693] text-[30px] cursor-pointer">
              <Link href={"https://www.facebook.com/TeamKTessori"} target='_blank'><FaFacebook /></Link>   
              </div>

              <div className="text-[#F70000] text-[30px] cursor-pointer">
              <Link href={"https://www.youtube.com/@KamranTessorikk"} target='_blank'><FaYoutube/></Link>
              </div>

              <div className="text-[#1C9CEA] text-[30px] cursor-pointer">
                <Link href={""}><IoLogoTwitter /></Link>
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