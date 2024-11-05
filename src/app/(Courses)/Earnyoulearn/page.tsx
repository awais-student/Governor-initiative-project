import React from "react";
import Link from "next/link";
import { MdOutlineWatchLater } from "react-icons/md";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Earn = () => {
  return (
    <>
      <div className="flex">
        <div className="w-[22%] h-[100vh] sticky top-0 pt-[150px] text-zinc-700 ">
          <h2 className="mx-6 p-3 rounded-md text-white text-[14px] bg-[#044E83]">
            Core Courses Sequence
          </h2>
          <ul className="pl-12 text-[14px] mt-2">
            <li className="mt-2">
              <Link className="hover:text-[#044E83]" href={"/ProgrammingFundamentals"}>Programming Fundamentals</Link>
            </li>
            <li className="mt-2">
              {" "}
              <Link className="hover:text-[#044E83]" href={"/Webusingmetaverse"}>Web2 Using NextJS</Link>
            </li>
            <li className="mt-2">
              <Link className="hover:text-[#044E83]" href={"/Earnyoulearn"}>Earn as You Learn</Link>
            </li>
          </ul>
          <div className="">
            <h2 className="mt-6 font-bold px-3">Advance Courses</h2>
            <div className="mx-5">
            <div className="py-2 px-3 hover:bg-[#044E83] hover:text-white rounded-md text-[14px]">
                <Link href={"/Webandmetaverse"}>Web3 and Metaverse</Link>
              </div>
              <div className="py-2 px-3 hover:bg-[#044E83] hover:text-white rounded-md mt-2 text-[14px]">
                <Link href={"/Cloudnative"}>Cloud Native Computing</Link> <br />
              </div>
              <div className="py-2 px-3 hover:bg-[#044E83] hover:text-white rounded-md mt-2 text-[14px]">
                <Link href={"/Artificialint"}>
                  Artificial Intelligence (AI) and Deep Learning
                </Link>{" "}
                <br />
              </div>
              <div className="py-2 px-3 hover:bg-[#044E83] hover:text-white rounded-md mt-2 text-[14px]">
                <Link href={"/Ambientcomputing"}>Ambient Computing and IoT</Link> <br />
              </div>
              <div className="py-2 px-3 hover:bg-[#044E83] hover:text-white rounded-md mt-2 text-[14px]">
                <Link href={"/Genomics"}>Genomics and Bioinfomatics</Link> <br />
              </div>
              <div className="py-2 px-3 hover:bg-[#044E83] hover:text-white rounded-md mt-2 text-[14px]">
                <Link href={"/Networkprogrammability"}>NetWork Programmability and Automation</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="px-8 pb-8 w-[78%] h-full">
          <div className="mt-[150px] flex space-x-[350px]">
            <h1 className="text-[30px] font-bold text-[#27272A]">
              Earn as You Learn
            </h1>
            <div className="flex items-center justify-evenly gap-4">
              <MdOutlineWatchLater className="text-[23px] ml-[165px] text-black" />
              <h2 className="font-bold flex">Duration:</h2>
              <h2>(13 weeks)</h2>
            </div>
          </div>
          <div className="border-b w-full h-[1px] border-zinc-300 mt-2"></div>

          <div className="w-full">
            <div className="bg-[#F9FAFB] mt-5 rounded-md">
              <h1 className="text-[40px] font-bold px-4 text-[#27272A]">
                Common In All Specializations
              </h1>
              <p className="px-4 text-zinc-700">
                $-101: Dollar Making Bootcamp - Full-Stack Template and API
                Product Development
              </p>
              <div className="mt-5 rounded-b-md bg-black border-b-[8px] border-black"></div>
            </div>

            <div>
              <h1 className="mt-10 text-[35px] font-bold pb-5 text-[#27272A]">
                Course Description
              </h1>
              <div className="border-b border-zinc-800"></div>
              <div className="bg-[#F9FAFB] rounded-md">
                <p className="p-5 mt-5 text-[15px] text-zinc-700">
                  The purpose of this course is to make dollars. You will build
                  Full-Stack Next.js 13 Jamstack Templates and GraphQL APIs.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h1 className="text-[35px] font-bold text-[#27272A]">
                Course Outline
              </h1>
              <div className="border-b border-zinc-800 pb-3"></div>
              <h1 className="text-[24px] font-bold mt-10 mb-5 text-[#044E83]">
                1. Earn While You Learn Projects:
              </h1>
            </div>

            <div>
              <h1 className="text-[24px] font-bold mt-10 mb-5 text-[#044E83]">
                2. Build Full-Stack Next.js 13 Jamstack Templates
              </h1>
              <div className="py-6 px-5 bg-[#F9FAFB]">
                <p className="text-zinc-700 text-[15px]">
                  You will be assigned to build a template which we will sell on
                  Theme Forest and Panaverse DAO marketplace. The Panaverse DAO
                  will receive 25% share on the sale of the template which will
                  be used to manage the platform. An additional 15% will be
                  spent on marketing the template. 60% of the revenues will be
                  distributed to the developer through the Panaverse DAO in the
                  form of Panaverse tokens.
                </p>
                <h1 className="text-[15px] text-zinc-700 mt-3">
                  The Template Standard
                </h1>
                <div className="flex items-center gap-3 mt-1">
                  <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                  <Link
                    className="text-[#2563EB] text-[15px] font-bold lowercase"
                    href={
                      "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
                    }
                    target="_blank"
                  >
                    Panaverse template standard
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-[24px] font-bold mt-10 mb-5 text-[#044E83]">
                3. Build QraphQL APIs
              </h1>
              <div className="py-6 px-5 bg-[#F9FAFB]">
                <p>
                  You will be assigned to build APIs for which you will sell
                  subscriptions on the Panaverse DAO Marketplace. The Panaverse
                  DAO will receive 25% share on the sale of the template which
                  will be used to manage the platform. An additional 15% will be
                  spent on marketing the template. 60% of the revenues will be
                  distributed to the developer through the Panaverse DAO in the
                  form of Panaverse tokens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Earn;
