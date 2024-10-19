import React from "react";

const Result = () => {
  return (
    <>
      <div className="font-extrabold text-center text-[35px] text-[#044E83] pt-[100px]">
        <h1>Grand Enterance Exam Result</h1>
      </div>
      <div className="flex items-center justify-center mt-32">
        <div className="w-[60%] h-[50%] py-10 px-5 mb-5 transition duration-300 shadow-2xl">
          <div>
            <p className="text-slate-700 mt-4 mb-2 text-[23px]">Registration Number*</p>
            <input className="w-full h-12 border border-gray-400 bg-gray-100 rounded-md" type="tel" name="regNo" id="regNo" placeholder="    Registration Number"/>
          </div>

          <div>
            <p className="text-slate-700 mt-6 mb-2 text-[23px]">CNIC or B-Form Number*</p>
            <input className="w-full h-12 border border-gray-400 bg-gray-100 rounded-md" type="tel" name="cnicNo" id="cnicNo" placeholder="    CNIC or B-Form Number"/>
          </div>

        <div className="flex items-center justify-center">
        <button className="py-5 px-10 bg-[#044E83] mt-10  text-white font-bold text-[18px]">GET RESULT</button>
        </div>
        </div>
      </div>
    </>
  );
};

export default Result;
