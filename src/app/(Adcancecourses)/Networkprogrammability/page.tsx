import React from "react";
import Link from "next/link";
import { MdOutlineWatchLater } from "react-icons/md";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Networkprogrammability = () => {
  return (
    <>
      <div className="flex">
        <div className="w-[22%] h-[100vh] sticky top-0 pt-[150px]">
          <div className="bg-[#F9FAFB] p-3  rounded-md">
            <h2 className="mx-2 p-3 rounded-md text-white text-[13px] bg-[#044E83]">
              Artificial Intelligence (AI) and Deep Learning
            </h2>
            <div className="ml-10 text-[13px] mt-2 mb-1">
              <Link href={"#"}>Course - 4</Link>
            </div>
            <div className="ml-10 text-[13px]">
              <Link href={"/Course5"}>Course - 5</Link>
            </div>
          </div>

          <ul className="font-bold text-[13px] ml-[50px] mt-10 text-zinc-800">
            <li className="mb-2">
              <Link href={"/Webandmetaverse"}>Web 3 and Metaverse</Link>
            </li>
            <li className="mb-2">
              <Link href={"/Cloudnative"}>Cloud-Native Computing</Link> <br />
            </li>
            <li className="mb-2">
              <Link href={"/Artificialint"}>
                Artificial Intelligence (AI) and Deep Learning
              </Link>{" "}
              <br />
            </li>
            <li className="mb-2">
              <Link href={"/Ambientcomputing"}>Ambient Computing and IoT</Link>{" "}
              <br />
            </li>
            <li className="mb-2">
              <Link href={"Genomics"}>Genomics and Bioinformatics</Link> <br />
            </li>
            <li className="mb-2">
              <Link href={"Networkprogrammability"}>
                Network Programmability and Automation
              </Link>{" "}
            </li>
          </ul>

          <div>
            <h2 className="font-bold text-[15px] text-zinc-800 ml-7 mt-10 ">
              Compulsory Courses
            </h2>
            <div className="">
              <ul className="flex items-center justify-between ml-7  gap-3  mt-5 font-bold text-[15px] text-zinc-800 ">
                <li>
                  <Link
                    className="px-6 py-3 gap-3 bg-[#F9FAFB] hover:bg-[#044E83] hover:text-white rounded-md"
                    href={"/ProgrammingFundamentals"}
                  >
                    Q1
                  </Link>
                </li>
                <li>
                  <Link
                    className="px-6 gap-3 py-3 bg-[#F9FAFB] hover:bg-[#044E83] hover:text-white rounded-md"
                    href={"/Webusingmetaverse"}
                  >
                    Q2
                  </Link>
                </li>
                <li>
                  <Link
                    className="px-6 gap-3 py-3 bg-[#F9FAFB] hover:bg-[#044E83] hover:text-white rounded-md"
                    href={"Earnyoulearn"}
                  >
                    Q3
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="px-8 pb-8 w-[78%] h-full">
          <div className="mt-[180px] flex space-x-[350px]">
            <h1 className="text-[40px] font-bold text-[#27272A]">Course: 4</h1>
            <div className="flex items-center justify-evenly gap-4">
              <MdOutlineWatchLater className="text-[23px] ml-[210px] text-black" />
              <h2 className="font-bold flex">Duration:</h2>
              <h2>(13 weeks)</h2>
            </div>
          </div>
          <div className="border-b w-full h-[1px] border-zinc-300 mt-2"></div>
          <div className="w-full">
            <div className="bg-[#F9FAFB] mt-5 rounded-md">
              <h1 className="text-[33px] font-bold px-4 text-[#27272A]">
                Network Programmability and Automation
              </h1>
              <p className="px-4 text-zinc-700">
                NPA-351: CCNA 200-301 Certification
              </p>
              <div className="mt-5 rounded-b-md bg-black border-b-[8px] border-black"></div>
            </div>
          </div>
          <div>
            <h1 className="mt-10 text-[35px] font-bold pb-5 text-[#27272A]">
              Course Description
            </h1>
            <div className="border-b border-zinc-800"></div>
            <div className="bg-[#F9FAFB] rounded-md">
              <p className="p-5 mt-5 text-[15px] text-zinc-700">
                This course will focus on learning the basics of the networking
                and preparing for the new Cisco Certified Network Associate
                (CCNA) exam. This comprehensive course focuses on the solutions
                and technologies needed to implement and administer a broad
                range of modern networking and IT infrastructure.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <h1 className="text-[35px] font-bold text-[#27272A]">
              Course Outline
            </h1>
            <div className="border-b border-zinc-800 pb-3"></div>
            <h1 className="text-[24px] font-bold mt-10 mb-5 text-[#044E83]">
              1. Textbook:
            </h1>
          </div>

          <div className="bg-[#F9FAFB] px-5 py-6 rounded-md">
            <div className="flex items-center gap-3 ">
              <BsBoxArrowUpRight className="cursor-pointer" />{" "}
              <Link
                className="text-[#2563EB] text-[15px] font-bold lowercase"
                href={
                  "https://www.amazon.com/CCNA-200-301-Official-Guide-Library/dp/1587147149/ref=sr_1_1"
                }
                target="_blank"
              >
                CCNA 200 301 Official Guide Library
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Networkprogrammability;
