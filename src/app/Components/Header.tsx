"use client";
import { url } from "inspector";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  let studentPosition = [
    {
      name: "Student Name : Aiman",
      fName: "Father Name : Ali Khan",
      cnic: "CNIC : 45504-4826016-6",
      regNumber: "Reg Number : 638462",
      dateofReg: "Date of Reg : 4/8/2023",
      stuImage: "/images/download.jpeg",
    },
    {
      name: "Student Name : Rida",
      fName: "Father Name : Wahab",
      cnic: "CNIC : 45504-8634920-1",
      regNumber: "Reg Number : 733125",
      dateofReg: "Date of Reg : 3/8/2023",
      stuImage: "/images/images.jpeg",
    },
    {
      name: "Student Name : Ahmed",
      fName: "Father Name : Waqar",
      cnic: "CNIC : 45504-6345981-2",
      regNumber: "Reg Number : 973561",
      dateofReg: "Date of Reg : 4/8/2023",
      stuImage: "/images/images (6).jpeg",
    },
    {
      name: "Student Name : Nimra",
      fName: "Father Name : Amir",
      cnic: "CNIC : 45504-6251890-2",
      regNumber: "Reg Number : 726194",
      dateofReg: "Date of Reg : 6/8/2023",
      stuImage: "/images/images (7).jpeg",
    },
  ];

  let studentPositionCard = [
    {
      name: "Student Name : Ali",
      fName: "Father Name : Jawwad",
      cnic: "CNIC : 45504-7643097-1",
      regNumber: "Reg Number : 692574",
      dateofReg: "Date of Reg : 8/8/2023",
      stuImage: "/images/images (10).jpg",
    },
    {
      name: "Student Name : Haider",
      fName: "Father Name : Salman",
      cnic: "CNIC : 45504-6309715-9",
      regNumber: "Reg Number : 814537",
      dateofReg: "Date of Reg : 3/8/2023",
      stuImage: "/images/images (12).jpg",
    },
    {
      name: "Student Name : Rabia",
      fName: "Father Name : Arif",
      cnic: "CNIC : 45504-4501249-3",
      regNumber: "Reg Number : 692574",
      dateofReg: "Date of Reg : 9/8/2023",
      stuImage: "/images/images (9).png",
    },
    {
      name: "Student Name : Noor Khan",
      fName: "Father Name : Haris",
      cnic: "CNIC : 45504-5249745-7",
      regNumber: "Reg Number : 692574",
      dateofReg: "Date of Reg : 9/8/2023",
      stuImage: "/images/images (13).jpg",
    },
  ];

  const router = useRouter();
  const openLink = () => {
    router.push("/Apply");
  };

  return (
    <div>
      <div className="main">
        <div className="text-white flex">
          <div className="w-1/2 pt-32 pl-5 font-bold">
            <h1 className="text-[#044E83] text-[70px]">Governor Sindh</h1>
            <h3 className="font-medium text-[50px] text-[#044E83]">
              Kamran Khan Tessori
            </h3>
            <h2 className="text-[40px] w-2/3 text-[#2EB6E8]">
              Certified Cloud Applied Generative AI Engineer (GenEng)
            </h2>
            <h5 className="text-[#044E83] text-[22px] ">
              Earn up to $5,000 / month
            </h5>
            <p className="text-[#044E83] text-[30px] w-2/3 ">
              Now admissions are open in Hyderabad
            </p>
            <div className="flex items-center justify-between">
              <button
                onClick={openLink}
                className="py-4 px-14 bg-[#044E83] rounded-md mt-4 text-[18px] font-bold   "
              >
                Apply Now
              </button>
              <div>
                <h1 className="text-[32px] ml-4 text-[#044E83]">562,143</h1>
                <p className=" text-[#044E83]">Accepted Applications</p>
              </div>
            </div>
          </div>
          <div className="w-1/2 ">
            <Image
              className="pt-32 flex justify-items-start"
              src={"/images/govimg.png"}
              alt="governor Image"
              width={400}
              height={400}
              style={{ width: "700px", height: "780px" }}
            />
          </div>
        </div>

        <div className="w-full bg-slate-100">
          <h1 className="mt-20  text-[#044E83] text-[32px] font-bold px-10 text-center">
            Certified Cloud Applied Generative AI Engineer (GenEng) and
            Solopreneur Developing Billion-Dollar Valued Developers and
            Solopreneurs
          </h1>
          <p className="px-6 mt-8 text-[20px] text-justify">
            The pace of technological change is accelerating, big players like
            Microsoft, Amazon, Google, and OpenAI are winning by providing
            infrastructure, large AI foundation models, frameworks, 3D Metaverse
            experiences, and massive distribution networks. Solopreneurs trained
            in this program will win by automating work typically outsourced to
            employees, by directly connecting to customers by eliminating the
            middleman, and by developing vertical metaverses, thus paving the
            way for the first billion-dollar valued solopreneur businesses. This
            program has the objective to train this new breed of billion-dollar
            solopreneurs. These solopreneurs will adopt the ultra-lean business
            model and work independently and will not need to hire employees or
            other team members.
          </p>
          <div className="flex justify-between px-10 mt-8 ">
            <Image
              className="rounded-md"
              src={"/images/laptop.jpg"}
              alt="Random image"
              width={400}
              height={400}
            />
            <Image
              className="rounded-md"
              src={"/images/img.jpg"}
              alt="Random image"
              width={400}
              height={400}
            />
            <Image
              className="rounded-md"
              src={"/images/imagelaptop.jpg"}
              alt="Random image"
              width={400}
              height={400}
            />
          </div>
        </div>

        <div className="w-full h-screen flex justify-between px-6 mt-20">
          <Image
            className=" h-[49%] rounded-md"
            src={"/images/slide.jpg"}
            alt=""
            width={400}
            height={400}
            style={{ width: "49%", height: "90%" }}
          />
          <Image
            className="h-[49%] rounded-md"
            src={"/images/slideimage.jpg"}
            alt=""
            width={400}
            height={400}
            style={{ width: "49%", height: "90%" }}
          />
        </div>
        {/* This is Courese Image */}
        <div className="w-full px-6">
          <h1 className="font-bold text-[30px] text-[#044E83] mb-10">
            Core Courses Sequence
          </h1>
          <div className="flex gap-4">
            <div className="w-[300px] h-[300px] bg-slate-200 cursor-pointer mb-5 shadow-md transition duration-300 hover:shadow-2xl">
              <Link href={"/ProgrammingFundamentals"}>
                <Image
                  className="rounded-tl-lg rounded-tr-lg"
                  src={"/images/programming.jpg"}
                  alt="programming image"
                  width={400}
                  height={400}
                />
                <h1 className="text-zinc-700 text-center mt-10 font-bold">
                  Programming Fundamentals
                </h1>
              </Link>
            </div>

            <div className="w-[300px] h-[300px] bg-slate-200 cursor-pointer mb-5 shadow-md transition duration-300 hover:shadow-2xl">
              <Link href={"/Webusingmetaverse"}>
                <Image
                  className="rounded-tl-lg rounded-tr-lg"
                  src={"/images/Web2.jpg"}
                  alt="Web2 using NextJS"
                  width={400}
                  height={400}
                />
                <h1 className="text-zinc-700 text-center mt-10 font-bold">
                  Web2 using NextJS
                </h1>
              </Link>
            </div>

            <div className="w-[300px] h-[300px] bg-slate-200 cursor-pointer mb-5 shadow-md transition duration-300 hover:shadow-2xl">
              <Link href={"/Earnyoulearn"}>
                <Image
                  className="rounded-tl-lg rounded-tr-lg"
                  src={"/images/earnas.jpg"}
                  alt="Earn as You Learn"
                  width={400}
                  height={400}
                />
                <h1 className="text-zinc-700 text-center mt-10 font-bold">
                  Earn as You Learn
                </h1>
              </Link>
            </div>
          </div>
        </div>
        {/* This is Advance Images */}
        <div className="w-full px-6 mt-10">
          <h1 className="font-bold text-[30px] text-[#044E83] mb-10 ">
            Advanced Courses
          </h1>
          <div className="flex gap-4">
            <div className="w-[300px] h-[300px] text-zinc-700 bg-slate-200 cursor-pointer mb-5 shadow-md transition duration-300 hover:shadow-2xl">
              <Link href={"/Artificialint"}>
                <Image
                  className="rounded-tl-lg rounded-tr-lg"
                  src={"/images/Artifical.jpg"}
                  alt="Artificial Intelligence"
                  width={400}
                  height={400}
                />
              </Link>
              <h1 className="font-bold text-center mt-10">
                Artificial Intelligence
              </h1>
            </div>

            <div className="w-[300px] h-[300px] text-zinc-700 bg-slate-200 cursor-pointer mb-5 shadow-md transition duration-300 hover:shadow-2xl">
              <Link href={"/Webandmetaverse"}>
                <Image
                  className="rounded-tl-lg rounded-tr-lg"
                  src={"/images/Web3.jpg"}
                  alt="Cloud-Native Computing"
                  width={400}
                  height={400}
                />
              </Link>
              <h1 className="font-bold text-center mt-10">
                Web3 and Metaverse
              </h1>
            </div>

            <div className="w-[300px] h-[300px] text-zinc-700 bg-slate-200 cursor-pointer mb-5 shadow-md transition duration-300 hover:shadow-2xl">
              <Link href={"/Cloudnative"}>
                <Image
                  className="rounded-tl-lg rounded-tr-lg"
                  src={"/images/cloud.jpg"}
                  alt="Ambient Computing and IoT"
                  width={400}
                  height={400}
                />
              </Link>
              <h1 className="font-bold text-center mt-10">
                Cloud-Native Computing
              </h1>
            </div>

            <div className="w-[300px] h-[300px] text-zinc-700 bg-slate-200 cursor-pointer mb-5 shadow-md transition duration-300 hover:shadow-2xl">
              <Link href={"/Ambientcomputing"}>
                <Image
                  className="rounded-tl-lg rounded-tr-lg"
                  src={"/images/ambient.jpg"}
                  alt="Ambient Computing and IoT"
                  width={400}
                  height={400}
                />
              </Link>
              <h1 className="font-bold text-center mt-10">
                Ambient Computing and IoT
              </h1>
            </div>
          </div>
        </div>

        <div className="w-full px-6 mt-10">
          <div className="flex gap-4">
            <div className="w-[300px] h-[300px] text-zinc-700 bg-slate-200 cursor-pointer mb-5 shadow-md transition duration-300 hover:shadow-2xl">
              <Link href={"/Genomics"}>
                <Image
                  className="rounded-tl-lg rounded-tr-lg"
                  src={"/images/genomics.jpg"}
                  alt="Genomics and Bioinfomatics"
                  width={400}
                  height={400}
                />
                <h1 className="font-bold text-center mt-10">
                  Genomics and Bioinfomatics
                </h1>
              </Link>
            </div>

            <div className="w-[300px] h-[300px] text-zinc-700 bg-slate-200 cursor-pointer mb-5 shadow-md transition duration-300 hover:shadow-2xl">
              <Link href={"/Networkprogrammability"}>
                <Image
                  className="rounded-tl-lg rounded-tr-lg"
                  src={"/images/network.jpg"}
                  alt="Network Programmability and Automation"
                  width={400}
                  height={400}
                />
                <h1 className="font-bold text-center mt-10">
                  Network Programmability and Automation
                </h1>
              </Link>
            </div>
          </div>
        </div>
        {/* This is Toper Images */}
        <div className="w-full text-center text-[40px] font-extrabold text-[#044E83] mt-32 mb-5 flex items-center justify-center">
          <h1>These All Are Position Holders.</h1>
          <Image
            className="w-[100px] h-[100px]"
            src={"/images/trophy.png"}
            alt="winners"
            width={400}
            height={400}
          />
        </div>

        <div className="w-full flex items-center justify-between bg-slate-100 px-10">
          {studentPosition.map((item, i) => (
            <div key={i} className="bg-[#044E83] w-[300px] p-6 rounded-md">
              <Image
                className="rounded-tl-lg rounded-tr-lg"
                src={item.stuImage}
                alt="Position holder girls"
                width={400}
                height={400}
                style={{ width: "280px", height: "300px", objectFit: "cover" }}
              />

              <div className="text-white mt-3">
                <h1>{item.name}</h1>
                <h1>{item.fName} </h1>
                <h1>{item.cnic} </h1>
                <h1>{item.regNumber}</h1>
                <h1>{item.dateofReg}</h1>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full flex items-center justify-between bg-slate-100 px-10 mt-[30px]">
          {studentPositionCard.map((item, i) => (
            <div key={i} className="bg-[#044E83] w-[300px] p-6 rounded-md">
              <Image
                className="rounded-tl-lg rounded-tr-lg"
                src={item.stuImage}
                alt="Position holder girl"
                width={400}
                height={400}
                style={{
                  width: "280px",
                  height: "300px",
                  objectPosition: "top",
                }}
              />

              <div className="text-white mt-3">
                <h1>{item.name}</h1>
                <h1>{item.fName} </h1>
                <h1>{item.cnic} </h1>
                <h1>{item.regNumber}</h1>
                <h1>{item.dateofReg}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
