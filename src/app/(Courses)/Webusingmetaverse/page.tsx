import React from "react";
import Link from "next/link";
import { MdOutlineWatchLater } from "react-icons/md";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Web = () => {
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
              Web2 Using NextJS
            </h1>
            <div className="flex items-center justify-evenly gap-4">
              <MdOutlineWatchLater className="text-[23px] ml-[125px] text-black" />
              <h2 className="font-bold flex">Duration:</h2>
              <h2>(13 weeks)</h2>
            </div>
          </div>
          <div className="border-b w-full h-[1px] border-zinc-400 mt-2"></div>
          <div className="w-full">
            <div className="bg-[#F9FAFB] mt-5 rounded-md">
              <h1 className="text-[40px] font-bold px-4 text-[#27272A]">
                Common In All Specializations
              </h1>
              <p className="px-4 text-zinc-700">
                W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps
                and APIs using Next.js 13 and Cloud Development Kit (CDK) for
                Terraform
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
                  The objective of this course is to teach participants to
                  develop customer-facing planet-scale Websites, Full-Stack Apps
                  and templates, Dashboards, and Muti-Cloud Serverless APIs. By
                  the end of the quarter, the participants will be able to
                  develop and deploy web platforms like Facebook, Shopify, etc.
                  The technologies covered in this course will include Next.js
                  13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma,
                  Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless
                  Technologies, and Cloud Development Kit for Terraform (CDKTF).
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h1 className="text-[35px] font-bold text-[#27272A]">
                Course Outline
              </h1>
              <div className="border-b border-zinc-800 pb-3"></div>
              <h1 className="text-[24px] font-bold mt-10 mb-5 text-[#044E83]">
                1. Next.js 13 Web Development
              </h1>
            </div>

            <div className="py-6 px-5 bg-[#F9FAFB]">
              <p className="text-zinc-700">
                Learn Next 13 Official Documentation
              </p>
              <div className="flex items-center gap-3 mt-1">
                <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                <Link
                  className="text-[#2563EB] text-[15px] font-bold lowercase"
                  href={
                    "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
                  }
                  target="_blank"
                >
                  Nextjs Docs
                </Link>
              </div>

              <p className="text-zinc-700 mt-3">
                Latest Learn React Official Website
              </p>
              <div className="flex items-center gap-3 mt-1">
                <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                <Link
                  className="text-[#2563EB] text-[15px] font-bold lowercase"
                  href={
                    "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
                  }
                  target="_blank"
                >
                  Reactjs Docs
                </Link>
              </div>

              <p className="text-zinc-700 mt-3">
                Learn Next.js 13 Learning Repo
              </p>
              <div className="flex items-center gap-3 mt-1">
                <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                <Link
                  className="text-[#2563EB] text-[15px] font-bold lowercase"
                  href={
                    "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
                  }
                  target="_blank"
                >
                  Learning Repo
                </Link>
              </div>
            </div>

            <div>
              <h1 className="text-[24px] font-bold mt-10 mb-5 text-[#044E83]">
                2. Next.js 13 using Chakra UI (Remote Zoom Class)
              </h1>
              <div className="bg-[#F9FAFB] rounded-md px-5 py-5">
                <p className="text-zinc-700 mt-3">
                  CSS Flexbox Explained – Complete Guide to Flexible Containers
                  and Flex Items
                </p>
                <div className="flex items-center gap-3 mt-1">
                  <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                  <Link
                    className="text-[#2563EB] text-[15px] font-bold lowercase"
                    href={
                      "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
                    }
                    target="_blank"
                  >
                    Css flexbox complete guide
                  </Link>
                </div>

                <div>
                  <p className="text-zinc-700 mt-3">
                    Learn Chakra UI From Official Website
                  </p>
                  <div className="flex items-center gap-3 mt-1">
                    <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                    <Link
                      className="text-[#2563EB] text-[15px] font-bold lowercase"
                      href={
                        "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
                      }
                      target="_blank"
                    >
                      Chakra-ui Docs
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-[24px] font-bold mt-10 mb-5 text-[#044E83]">
                3. UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote
                Zoom Class)
              </h1>

              <div className="py-6 px-5 bg-[#F9FAFB]">
                <p className="text-zinc-700 mt-3">
                  Designing and Prototyping Interfaces with Figma: Learn
                  essential UX/UI design principles by creating interactive
                  prototypes for mobile, tablet, and desktop by Fabio Staiano
                </p>
                <div className="flex items-center gap-3 mt-1">
                  <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                  <Link
                    className="text-[#2563EB] text-[15px] font-bold lowercase"
                    href={
                      "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
                    }
                    target="_blank"
                  >
                    Designing-Prototyping-Interfaces-Figma-interactive
                  </Link>
                </div>
                <div>
                  <p className="text-zinc-700 mt-3">
                    Figma Design Kit for TailwindCSS
                  </p>
                  <div className="flex items-center gap-3 mt-1">
                    <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                    <Link
                      className="text-[#2563EB] text-[15px] font-bold lowercase"
                      href={
                        "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
                      }
                      target="_blank"
                    >
                      Figma for tailwind
                    </Link>
                  </div>
                </div>
                <div>
                  <p className="text-zinc-700 mt-3">
                    Figma Design Kit for Chakra UI
                  </p>
                  <div className="flex items-center gap-3 mt-1">
                    <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                    <Link
                      className="text-[#2563EB] text-[15px] font-bold lowercase"
                      href={
                        "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
                      }
                      target="_blank"
                    >
                      Figma for chakra ui
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-[24px] font-bold mt-10 mb-5 text-[#044E83]">
                4. API Routes with Next.js (Remote Zoom Class)
              </h1>

              <div className="py-6 px-5 bg-[#F9FAFB]">
                <p className="text-zinc-700 mt-3">Next JS Api Route</p>
                <div className="flex items-center gap-3 mt-1">
                  <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                  <Link
                    className="text-[#2563EB] text-[15px] font-bold lowercase"
                    href={
                      "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
                    }
                    target="_blank"
                  >
                    Api routes
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-[24px] font-bold mt-10 mb-5 text-[#044E83]">
                5. APIs with Next.js and tRPC (Remote Zoom Class)
              </h1>

              <div className="py-6 px-5 bg-[#F9FAFB]">
                <p className="text-zinc-700 mt-3">
                  Build a tRPC CRUD API Example with Next.js
                </p>
                <div className="flex items-center gap-3 mt-1">
                  <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                  <Link
                    className="text-[#2563EB] text-[15px] font-bold lowercase"
                    href={
                      "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
                    }
                    target="_blank"
                  >
                    Build a trpc crud api example with next js
                  </Link>
                </div>
                <div>
                  <p className="text-zinc-700 mt-3">
                    Stop building REST APIs for your Next.js apps, use tRPC
                    instead
                  </p>
                  <div className="flex items-center gap-3 mt-1">
                    <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                    <Link
                      className="text-[#2563EB] text-[15px] font-bold lowercase"
                      href={
                        "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
                      }
                      target="_blank"
                    >
                      Stop building rest apis for your next apps
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-[24px] font-bold mt-10 mb-5 text-[#044E83]">
                7. Next.js 13 using TailwindCSS (Remote Zoom Class)
              </h1>
              <div className="py-6 px-5 bg-[#F9FAFB]">
                <p className="text-zinc-700 mt-3">
                  Modern CSS with Tailwind, Second Edition by Noel Rappin
                </p>
                <div className="flex items-center gap-3 mt-1">
                  <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                  <Link
                    className="text-[#2563EB] text-[15px] font-bold lowercase"
                    href={
                      "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
                    }
                    target="_blank"
                  >
                    Modern css with tailwind second edition
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-[24px] font-bold mt-10 mb-5 text-[#044E83]">
                8. AWS Application Composer (Remote Zoom Class)
              </h1>

              <div className="py-6 px-5 bg-[#F9FAFB]">
                <p className="text-zinc-700 mt-3">
                  What is AWS Application Composer?
                </p>
                <div className="flex items-center gap-3 mt-1">
                  <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                  <Link
                    className="text-[#2563EB] text-[15px] font-bold lowercase"
                    href={
                      "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
                    }
                    target="_blank"
                  >
                    Aws application composer video
                  </Link>
                </div>
                <div>
                  <p className="text-zinc-700 mt-3">
                    Event-driven apps with AWS Application Composer
                  </p>
                  <div className="flex items-center gap-3 mt-1">
                    <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                    <Link
                      className="text-[#2563EB] text-[15px] font-bold lowercase"
                      href={
                        "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
                      }
                      target="_blank"
                    >
                      Event driven apps with aws application aomposer
                    </Link>
                  </div>
                </div>

                <div>
                  <p className="text-zinc-700 mt-3">
                    Visually design and build serverless applications quickly
                  </p>
                  <div className="flex items-center gap-3 mt-1">
                    <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                    <Link
                      className="text-[#2563EB] text-[15px] font-bold lowercase"
                      href={
                        "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
                      }
                      target="_blank"
                    >
                      Application composer
                    </Link>
                  </div>
                </div>

                <div>
                  <h1 className="text-[18px] mt-5 text-[#27272A] font-bold">
                    Must Have: Create Free AWS Account
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
                      AWS free tier
                    </Link>
                  </div>
                </div>

                <div>
                  <p className="font-bold text-[15px] pl-8 text-[#27272A]">
                    Note : For AWS Free Tier you will need a credit or debit
                    card. The easiest way for Pakistani students is to open a
                    bank account with Meezan Bank. Open a Meezan Aasan Account
                    if you have no earning proof. Meezan Bank will charge Rs.
                    1100 for ATM Debit Card and there is a requirement of Rs.
                    100 minimum deposit. The card will be delivered in a few
                    weeks. Our students have reported that this Debit card works
                    with AWS.
                  </p>
                </div>
                <div>
                  <h2 className="text-[15px] text-zinc-700">
                    Now you can create a virtual VISA Debit card through the
                    NayaPay app (https://www.nayapay.com/ ) which can be used to
                    create AWS/GCP/Azure accounts. This is good news for those
                    students who find it difficult to create physical debit and
                    credit cards from banks.
                  </h2>
                </div>

                <div>
                  <p className="text-zinc-700 mt-3">
                    You can also get a $300 credit
                  </p>
                  <div className="flex items-center gap-3 mt-1">
                    <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                    <Link
                      className="text-[#2563EB] text-[15px] font-bold lowercase"
                      href={
                        "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
                      }
                      target="_blank"
                    >
                      get $300 credit
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-[24px] font-bold mt-10 mb-5 text-[#044E83]">
                9. Multi-Cloud GraphQL Serverless API Development with Cloud
                Development Kit for Terraform (CDKTF) (Remote Zoom Class)
              </h1>
              <div className="py-6 px-5 bg-[#F9FAFB]">
                <p className="text-zinc-700 mt-3">
                  Learn Multicloud Serverless API Development using CDK
                  Terraform in Baby Steps
                </p>
                <div className="flex items-center gap-3 mt-1">
                  <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                  <Link
                    className="text-[#2563EB] text-[15px] font-bold lowercase"
                    href={
                      "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
                    }
                    target="_blank"
                  >
                    Learn multicloud api development
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-[24px] font-bold mt-10 mb-5 text-[#044E83]">
                10. Web 2.0 Projects
              </h1>
              <div className="py-6 px-5 bg-[#F9FAFB]">
                <p className="text-zinc-700 mt-3">Next.js Projects</p>
                <div className="flex items-center gap-3 mt-1">
                  <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                  <Link
                    className="text-[#2563EB] text-[15px] font-bold lowercase"
                    href={
                      "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
                    }
                    target="_blank"
                  >
                    Nextjs all projects
                  </Link>
                </div>

                <div>
                  <p className="text-zinc-700 mt-3">
                    Styling Next.js Projects using TailwindCSS and Chakra UI
                  </p>
                  <div className="flex items-center gap-3 mt-1">
                    <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                    <Link
                      className="text-[#2563EB] text-[15px] font-bold lowercase"
                      href={
                        "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
                      }
                      target="_blank"
                    >
                      Styling nextjs projects
                    </Link>
                  </div>
                </div>

                <div>
                  <p className="text-zinc-700 mt-3">Todo Full-Stack App</p>
                  <div className="flex items-center gap-3 mt-1">
                    <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                    <Link
                      className="text-[#2563EB] text-[15px] font-bold lowercase"
                      href={
                        "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
                      }
                      target="_blank"
                    >
                      Full-stack todo app
                    </Link>
                  </div>
                </div>

                <div>
                  <p className="text-zinc-700 mt-3">Build a Twitter Clone</p>
                  <div className="flex items-center gap-3 mt-1">
                    <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                    <Link
                      className="text-[#2563EB] text-[15px] font-bold lowercase"
                      href={
                        "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
                      }
                      target="_blank"
                    >
                      Twitter clone
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Web;
