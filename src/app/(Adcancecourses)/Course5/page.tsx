import React from 'react'
import Link from 'next/link'
import { MdOutlineWatchLater } from "react-icons/md";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Course = () => {
  return (
    <>
    <div className='flex'>
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
              <Link href={"/Ambientcomputing"}>Ambient Computing and IoT</Link> <br />
            </li>
            <li className="mb-2">
              <Link href={"Genomics"}>Genomics and Bioinformatics</Link> <br />
            </li>
            <li className="mb-2">
              <Link href={"Networkprogrammability"}>Network Programmability and Automation</Link>{" "}
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
            <h1 className="text-[40px] font-bold text-[#27272A]">Course: 5</h1>
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
              AI-361: Deep Learning and MLOps
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
              This course will help you understand the capabilities, challenges, and consequences of deep learning and prepare you to participate in the development of leading-edge AI technology. We will finish the program by learning how to envision, create, and maintain integrated systems that run constantly in production. Production systems must manage constantly changing data, in stark contrast to typical machine learning modeling. The production system must also operate continuously at the lowest possible cost while delivering the highest possible performance.
              </p>
            </div>
            <div className="mt-10">
            <h1 className="text-[35px] font-bold text-[#27272A]">
              Course Outline
            </h1>
            <div className="border-b border-zinc-800 pb-3"></div>
            <h1 className="text-[24px] font-bold mt-10 mb-5 text-[#044E83]">
            1. Deep Learning with Tensorflow
            </h1>
          </div>
          </div>
          <div className="bg-[#F9FAFB] px-5 py-6 rounded-md">
                <p>Deep Learning with Python, Second Edition 2nd Edition</p>
            <div className="flex items-center gap-3 ">
              <BsBoxArrowUpRight className="cursor-pointer" />{" "}
              <Link
                className="text-[#2563EB] text-[15px] font-bold lowercase"
                href={"https://www.amazon.com/Learning-Python-Second-Fran%C3%A7ois-Chollet/dp/1617296864/ref=sr_1_2"}
                target="_blank"
              >
                Deep learning with python
              </Link>
            </div>
          </div>
            <div>
                <h1 className="text-[24px] font-bold mt-10 mb-5 text-[#044E83]">2. Machine Learning Engineering for Production (MLOps) using Terraform for CDK</h1>
                <div className="flex items-center gap-3 bg-[#F9FAFB] px-5 py-6">
              <ul>
                <li className="flex items-center gap-3">
                  <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                  <Link
                    className="text-[#2563EB] text-[15px] font-bold lowercase"
                    href={"https://betterprogramming.pub/a-comprehensive-guide-to-mlops-infrastructure-as-code-iac-ef4c97742351"}
                    target="_blank"
                  >
                    A Comprehensive Guide to MLOps Terraform: Infrastructure As Code(IaC)
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                  <Link
                    className="text-[#2563EB] text-[15px] font-bold lowercase"
                    href={
                      "https://towardsdatascience.com/mlops-leveraging-aws-sagemaker-terraform-and-gitlab-e7d97eaa6dce"
                    }
                    target="_blank"
                  >
                    MLOps leveraging AWS SageMaker and Terraform
                  </Link>
                </li>
              </ul>
            </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default Course