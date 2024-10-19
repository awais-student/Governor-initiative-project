import React from 'react'
import Link from 'next/link'
import { MdOutlineWatchLater } from "react-icons/md";

const Programming = () => {
  return (
    <>
    <div className='flex'>
        <div className='w-[22%] h-[100vh] flex-shrink-0 bg-[#F9FAFB] pt-[150px]'>
            <h2 className='mx-6 p-3 rounded-md text-white text-[14px] bg-[#044E83]'>Core Courses Sequence</h2>
            <ul className='pl-12 text-[14px] mt-2'>
              <li className='mt-2'>
                <Link href={"#"}>Programming Fundamentals</Link>
              </li>
              <li className='mt-2'> <Link href={"#"}>Web2 Using NextJS</Link></li>
              <li className='mt-2'><Link href={"#"}>Earn as You Learn</Link></li>
            </ul>
            <div className=''>
              <h2 className='mt-6 font-bold px-3'>Advance Courses</h2>
              <div className='mx-5'>
                <div className='py-2 px-3 hover:bg-[#044E83] hover:text-white rounded-md text-[14px]'><Link href={"#"}>Web3 and Metaverse</Link></div>
                <div className='py-2 px-3 hover:bg-[#044E83] hover:text-white rounded-md mt-2 text-[14px]'><Link href={"#"}>Cloud Native Computing</Link> <br /></div>
                <div className='py-2 px-3 hover:bg-[#044E83] hover:text-white rounded-md mt-2 text-[14px]'><Link href={"#"}>Artificial Intelligence (AI) and Deep Learning</Link> <br /></div>
                <div className='py-2 px-3 hover:bg-[#044E83] hover:text-white rounded-md mt-2 text-[14px]'><Link href={"#"}>Ambient Computing and IoT</Link> <br /></div>
                <div className='py-2 px-3 hover:bg-[#044E83] hover:text-white rounded-md mt-2 text-[14px]'><Link href={"#"}>Genomics and Bioinfomatics</Link> <br /></div>
                <div className='py-2 px-3 hover:bg-[#044E83] hover:text-white rounded-md mt-2 text-[14px]'><Link href={"#"}>NetWork Programmability and Automation</Link></div>
              </div>
            </div>
        </div>
        <div className='p-8'>
          <div className='mt-[150px] flex space-x-[350px]'>
            <h1 className='text-[30px] font-bold'>Programming Fundamentals</h1>
            <div className='flex items-center justify-evenly gap-4'>
            <MdOutlineWatchLater className='text-[23px] text-black' />
            <h2 className='font-bold flex'>Duration:</h2>
            <h2>(13 weeks)</h2>
            </div>
          </div>
          <div className='border-[0.5px] w-full h-[1px] border-slate-300  '></div>
          <div className='bg-slate-600 w-full h-[500vh]'></div>
        </div>
    </div>
    </>
  )
}

export default Programming