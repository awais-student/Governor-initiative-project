"use client"
import React from 'react'
import Image from 'next/image';
import { MdKeyboardArrowDown } from "react-icons/md";
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isopen, setIsopen] = useState(false)

  const toggledropdown = () => {
    setIsopen(!isopen)
  }
  return (
    <div>
         <div className="flex items-center justify-between p-8 bg-[#044E83] w-full h-[80px] fixed">
          <Image
            className="mt-20 cursor-pointer object-cover"
            src={"/images/logo.png"}
            alt="goverment of sind logo"
            width={90}
            height={90}
          />
          <h1 className="text-[24px] font-bold text-[#B9D8F3] ">
            Tuition Free Education Program on Latest Technologies
          </h1>
            <div className="text-white space-x-8 flex">
            <Link href="/">Home</Link>
            <Link href="/Apply">Apply</Link>
            <Link href="/Jobs">Jobs</Link>
            <Link href="/Result">Results</Link>
            <div onClick={toggledropdown} className="flex items-center">
              <Link href="#">Cources</Link>
              <MdKeyboardArrowDown />
              {isopen && (
                <div className='text-black'>
                  <ul className="absolute right-8 mt-4 w-[350px] bg-white shadow-lg z-10">
                  <li>
                    <h1 className='p-3 font-bold text-[20px]'>Core Courses</h1>
                    <div className='px-5 pb-4'>
                    <div className='mb-3'>
                    <Link className='hover:text-[#044E83]' href={"#"}>Programming Fundamentals</Link> <br />
                    </div>
                    <div className='mb-3'>
                    <Link className='hover:text-[#044E83]' href={"#"} >Web2 Using NextJS</Link> <br /> 
                    </div>
                    <div className='mb-3'>
                    <Link className='hover:text-[#044E83]' href={"#"}>Earn as You Learn</Link>
                    </div> 
                    <div className='px-3 mt-3 w-[100%] h-[0.5px] bg-slate-300'></div>

                    <div>
                      <div className='mb-3'>
                        <h1 className=' mt-5 font-bold text-[22px]'>Advanced Courses</h1>
                        <Link className='hover:text-[#044E83]' href={"#"}>Web3 and Metaverse</Link>
                      </div>
                      <div className='mb-3'>
                      <Link className='hover:text-[#044E83]' href={"#"}>Cloud-Native Computing</Link>
                      </div>
                      <div className='mb-3'>
                      <Link className='hover:text-[#044E83] text-[15px]' href={"#"}>Artifical Intelligence (AI) and Deep Learning</Link>
                      </div>
                      <div className='mb-3'>
                      <Link className='hover:text-[#044E83]' href={"#"}>Ambient Computing and IoT</Link>
                      </div>
                      <div className='mb-3'>
                      <Link className='hover:text-[#044E83]' href={"#"}>Genomics and Bioinformatics</Link>
                      </div>
                      <div className='mb-3'>
                      <Link className='hover:text-[#044E83] text-[15px]' href={"#"}>Network Programmability and Automation</Link>
                      </div>
                    </div>
                    </div>
                  </li>
                </ul>
                </div>

              )}
            </div>
            </div>
              
        </div>
    </div>
  )
}

export default Navbar