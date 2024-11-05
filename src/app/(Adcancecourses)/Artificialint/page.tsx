import React from "react";
import Link from "next/link";
import { MdOutlineWatchLater } from "react-icons/md";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Artifical = () => {
  return (
    <>
      <div className="flex">
        <div className="w-[22%] h-[100vh] sticky top-0  pt-[150px]">
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
                Artificial Intelligence (AI) and Deep Learning
              </h1>
              <p className="px-4 text-zinc-700">
                AI-351: Developing Planet-Scale Intelligent APIs and Python
                Programming
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
                  Artificial intelligence is the simulation of human
                  intelligence processes by machines, especially computer
                  systems. The AI and Deep Learning Specialization is a
                  foundational program that will aid in your comprehension of
                  deep learning potential, difficulties, and effects as well as
                  equip you to take part in the creation of cutting-edge AI
                  technology.
                </p>
              </div>
              <div>
                <p className="p-5 mt-5 text-[15px] bg-[#F9FAFB] text-zinc-700">
                  We will start this course by understanding the fundamentals
                  and use cases for AI and move on to building next-gen
                  intelligent apps using OpenAI’s powerful models and Next.js
                  13.
                </p>
              </div>

              <div>
                <p>
                  <div>
                    <p className="p-5 mt-5 text-[15px] bg-[#F9FAFB] text-zinc-700">
                      We will conclude the course by learning about basic
                      programming concepts using Python, such as lists,
                      dictionaries, classes, functions, and loops, and practice
                      writing clean and readable code with exercises for each
                      topic. We will also learn how to make your programs
                      interactive and how to test your code safely before adding
                      it to a project. It is a fast-paced, thorough introduction
                      to programming with Python 3.10+ that will have you
                      writing programs, solving problems, and making things that
                      work in no time. In this quarter we will also learn Git,
                      the distributed version control system. We will also
                      review Git-based GitHub services.
                    </p>
                  </div>
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h1 className="text-[35px] font-bold text-[#27272A]">
                Course Outline
              </h1>
              <div className="border-b border-zinc-800 pb-3"></div>
              <h1 className="text-[24px] font-bold mt-10 mb-5 text-[#044E83]">
                1. Introduction to Machine Learning, Data Science, and AI
              </h1>
            </div>

            <div className="bg-[#F9FAFB] px-5 py-6">
              <h1>Learn AI for Everyone</h1>
              <div className="flex items-center gap-3">
                <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                <Link
                  className="text-[#2563EB] text-[15px] font-bold lowercase"
                  href={"https://www.coursera.org/learn/ai-for-everyone"}
                  target="_blank"
                >
                  AI for everyone
                </Link>
              </div>
              <div className="mt-3 text-zinc-700">
                <h1>AI for Everyone Quiz in Week 3</h1>
                <h1>Total Questions: 60</h1>
                <h1>Total Time: 75 minutes</h1>
              </div>
            </div>

            <div>
              <h1 className="text-[24px] font-bold mt-10 mb-5 text-[#044E83]">
                2. Building Next-Gen Intelligent Apps with OpenAI’s Powerful
                Models
              </h1>
              <div className="flex items-center gap-3 bg-[#F9FAFB] px-5 py-6">
                <ul>
                  <li className="flex items-center gap-3">
                    <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                    <Link
                      className="text-[#2563EB] text-[15px] font-bold lowercase"
                      href={"https://openai.com/api/"}
                      target="_blank"
                    >
                      openai
                    </Link>
                  </li>
                  <li className="flex items-center gap-3">
                    <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                    <Link
                      className="text-[#2563EB] text-[15px] font-bold lowercase"
                      href={
                        "https://towardsdatascience.com/gpt-4-is-coming-soon-heres-what-we-know-about-it-64db058cfd45"
                      }
                      target="_blank"
                    >
                      Gpt-4 is coming soon heres what we know about it
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h1 className="text-[24px] font-bold mt-10 mb-5 text-[#044E83]">
                3. Python Crash Course for TypeScript Developers
              </h1>
              <div className="bg-[#F9FAFB] px-5 py-6 ">
                <p>
                  Python Crash Course, 2nd Edition: A Hands-On, Project-Based
                  Introduction to Programming 2nd Edition
                </p>
                <div className="flex items-center gap-3">
                  <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                  <Link
                    className="text-[#2563EB] text-[15px] font-bold lowercase"
                    href={
                      "https://www.amazon.com/Python-Crash-Course-2nd-Edition/dp/1593279280/ref=sr_1_5"
                    }
                    target="_blank"
                  >
                    Python Crash Course 2nd Edition
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Artifical;
