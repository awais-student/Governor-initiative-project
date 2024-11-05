import React from 'react'
import Link from 'next/link'
import { MdOutlineWatchLater } from "react-icons/md";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Cloudnative = () => {
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
              Cloud-Native Computing
              </h1>
              <p className="px-4 text-zinc-700">
              CN-351: Certified Kubernetes Application Developer (CKAD)
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
              Cloud-native architecture and technologies are an approach to designing, constructing, and operating workloads that are built in the cloud and take full advantage of the cloud computing model. Cloud-native technologies empower organizations to build and run scalable applications in modern, dynamic environments such as public, private, and hybrid clouds. Containers, service meshes, microservices, immutable infrastructure, and declarative APIs exemplify this approach.
              </p>
            </div>
            <div className="bg-[#F9FAFB] rounded-md">
              <p className="p-5 mt-5 text-[15px] text-zinc-700">These techniques enable loosely coupled systems that are resilient, manageable, and observable. Combined with robust automation, they allow engineers to make high-impact changes frequently and predictably with minimal toil</p>
              </div>
              <div className="bg-[#F9FAFB] rounded-md">
              <p className="p-5 mt-5 text-[15px] text-zinc-700">Kubernetes is an open-source system for automating the deployment, scaling, and management of containerized applications. In this course, you will learn how to develop cloud applications using cloud-native technologies like Containers, Kubernetes, and CDK for Kubernetes.</p>
              </div>
          </div>
          <div className="mt-10">
            <h1 className="text-[35px] font-bold text-[#27272A]">
              Course Outline
            </h1>
            <div className="border-b border-zinc-800 pb-3"></div>
            <h1 className="text-[24px] font-bold mt-10 mb-5 text-[#044E83]">
            1. Kubernetes: Up and Running: Dive into the Future of Infrastructure 3rd Edition
            </h1>
          </div>
          <div className="bg-[#F9FAFB] px-5 py-6">
          <div className="flex items-center gap-3">
              <BsBoxArrowUpRight className="cursor-pointer" />{" "}
              <Link
                className="text-[#2563EB] text-[15px] font-bold lowercase"
                href={
                  "https://www.amazon.com/Kubernetes-Running-Dive-Future-Infrastructure/dp/109811020X/ref=sr_1_3"
                }
                target="_blank"
              >
                Kubernetes Running Dive Future Infrastructure
              </Link>
            </div>

          </div>

          <div>
            <h1 className="text-[24px] font-bold mt-10 mb-5 text-[#044E83]">2. Cloud Development Kit for Kubernetes</h1>
            <div className="flex items-center gap-3">
              <BsBoxArrowUpRight className="cursor-pointer" />{" "}
              <Link
                className="text-[#2563EB] text-[15px] font-bold lowercase"
                href={
                  "https://cdk8s.io/"
                }
                target="_blank"
              >
                cdk8s
              </Link>
            </div>
          </div>
    </div>
    </div>
    </>
  )
}

export default Cloudnative