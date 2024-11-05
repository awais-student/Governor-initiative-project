import Link from "next/link";
import { MdOutlineWatchLater } from "react-icons/md";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Programming = () => {
  return (
    <>
      <div className="flex ">
        <div className="w-[22%] h-[100vh] sticky top-0 pt-[150px] text-zinc-700 ">
          <h2 className="mx-6 p-3 rounded-md text-white text-[14px] bg-[#044E83]">
            Core Courses Sequence
          </h2>
          <ul className="pl-12 text-[14px] mt-2 ">
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
              Programming Fundamentals
            </h1>
            <div className="flex items-center justify-evenly gap-4">
              <MdOutlineWatchLater className="text-[23px] text-black" />
              <h2 className="font-bold flex">Duration:</h2>
              <h2>(13 weeks)</h2>
            </div>
          </div>
          <div className="border-b w-full h-[1px] border-zinc-400 mt-2"></div>
          <div className=" w-full">
            <div className="bg-[#F9FAFB] mt-5 rounded-md">
              <h1 className="text-[40px] font-bold px-4 text-[#27272A]">
                Common In All Specializations
              </h1>
              <p className="px-4 text-zinc-700">
                CS-101: Object-Oriented Programming using TypeScript
              </p>
              <div className="mt-5 rounded-b-md bg-black border-b-[8px] border-black"></div>
            </div>
            <div>
              <h1 className="mt-10 text-[35px] font-bold pb-5 text-[#27272A]">
                Course Description
              </h1>
              <div className="border-b border-zinc-800"></div>
              <div className="bg-[#F9FAFB] rounded-md">
                <p className="p-4 mt-5 text-[15px] text-zinc-700">
                  We will start the program by learning the fundamentals of
                  Object-Oriented programming using JavaScript and TypeScript.
                  We will also understand the latest Web trends i.e. Web 3.0 and
                  Metaverse concepts and try to understand their working from
                  the perspective of the users.
                </p>
              </div>
            </div>
            <div className="mt-10">
              <h1 className="text-[35px] font-bold text-[#27272A]">
                Course Outline
              </h1>
              <div className="border-b border-zinc-800 pb-3"></div>
              <h1 className="text-[24px] font-bold mt-10 mb-5 text-[#044E83]">
                1. HTML and CSS (Homework)
              </h1>
            </div>
            <div className="py-7 px-5 text-[16px] bg-[#F9FAFB] rounded-md">
              <ul>
                <li className="flex items-center gap-3">
                  <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                  <Link
                    className="text-[#2563EB]"
                    href={
                      "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
                    }
                    target="_blank"
                  >
                    learn html by hira khan (watch recorded videos)
                  </Link>
                </li>
                <li className="flex items-center gap-3 mt-4">
                  <BsBoxArrowUpRight className="cursor-pointer" />
                  <Link
                    className="text-[#2563EB]"
                    href={
                      "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob"
                    }
                    target="_blank"
                  >
                    learn css intro by hira khan (watch recorded videos)
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-[24px] font-bold mt-10 mb-5 text-[#044E83]">
                2. Web 3.0 and Metaverse Theory
              </h1>
              <div className="bg-[#F9FAFB] rounded-md px-5 py-10">
                <ul>
                  <li className="flex items-center gap-3">
                    <BsBoxArrowUpRight className="cursor-pointer" />
                    <Link
                      className="text-[#2563EB]"
                      href={
                        "https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit#slide=id.p"
                      }
                      target="_blank"
                    >
                      introduction to panaverse dao
                    </Link>
                  </li>
                  <li className="flex items-center gap-3 mt-2">
                    {" "}
                    <BsBoxArrowUpRight className="cursor-pointer" />
                    <Link
                      className="text-[#2563EB] lowercase"
                      href={
                        "https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing"
                      }
                      target="_blank"
                    >
                      Web 3.0 User Guide
                    </Link>
                  </li>
                  <p className="mt-3 text-zinc-500">
                    Complete Web 3 Assignments included in the Web 3 User Guide
                  </p>
                  <li className="flex items-center gap-3 mt-2">
                    <BsBoxArrowUpRight className="cursor-pointer"></BsBoxArrowUpRight>
                    <Link className="text-[#2563EB] lowercase" href={"#"}>
                      Virtual and Augmented Metaverse User Guide
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h1 className="text-[24px] font-bold mt-10 mb-5 text-[#044E83]">
                3. Fundamentals of JavaScript (ECMAScript 2022 Language
                Specification)
              </h1>
              <div className="bg-[#F9FAFB] rounded-md px-5 py-10 lowercase">
                <ul>
                  <li className="flex items-center gap-3 mt-2">
                    <BsBoxArrowUpRight className="cursor-pointer" />
                    <Link
                      className="text-[15px] text-[#2563EB]"
                      href={
                        "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo"
                      }
                      target="_blank"
                    >
                      Learn JavaScript by Zeeshan Hanif (Watch Recorded Videos)
                    </Link>
                  </li>
                  <li className="flex items-center gap-3 mt-2">
                    <BsBoxArrowUpRight className="cursor-pointer" />
                    <Link
                      className="text-[15px] text-[#2563EB]"
                      href={
                        "https://www.amazon.com/JavaScript-Beginner-Professional-building-interactive/dp/1800562527/ref=sr_1_4"
                      }
                      target="_blank"
                    >
                      Chapters 2-6, 13 of JavaScript from Beginner to
                      Professional: Learn JavaScript quickly by building fun,
                      interactive, and dynamic web apps, games, and pages
                    </Link>
                  </li>
                  <li className="flex items-center gap-3 mt-2">
                    <BsBoxArrowUpRight className="cursor-pointer" />
                    <Link
                      className="text-[15px] text-[#2563EB]"
                      href={
                        "https://github.com/PacktPublishing/JavaScript-from-Beginner-to-Professional"
                      }
                      target="_blank"
                    >
                      JavaScript Book CodeGetting Started Exercises with
                      JavaScript and Node.js
                    </Link>
                  </li>
                  <li className="flex items-center gap-3 mt-2">
                    <BsBoxArrowUpRight className="cursor-pointer" />
                    <Link
                      className="text-[15px] text-[#2563EB]"
                      href={
                        "https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md"
                      }
                      target="_blank"
                    >
                      Getting Started Exercises with JavaScript and Node.js
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h1 className="text-[24px] font-bold mt-10 mb-5 text-[#044E83]">
                4. Fundamentals of JavaScript and Node.js Quiz
              </h1>
              <div className="bg-[#F9FAFB] rounded-md px-5 py-5">
                <h2 className=" text-[20px] text-[#27272A] font-extrabold">
                  Topics Covered in the Quiz:
                </h2>
                <p className="mt-5 text-zinc-700">
                  Background of JavaScript and How to use JavaScript in Browser
                  Variables, Primitive data types Analyzing and modifying data
                  types, and Operators (Chapter 2 of JavaScript from Beginner to
                  Professional)
                </p>
                <ul className="list-disc ml-10 text-[15px] text-zinc-700">
                  <li className="my-2">
                    <div>
                      <p>
                        Background of JavaScript and How to use JavaScript in
                        Browser
                      </p>
                    </div>
                  </li>

                  <li className="my-2">
                    <div>
                      <p>
                        Variables, Primitive data types Analyzing and modifying
                        data types, and Operators (Chapter 2 of JavaScript from
                        Beginner to Professional)
                      </p>
                    </div>
                  </li>

                  <li className="my-2">
                    <div>
                      <p>
                        Intro to Node.js, .mjs files, Modules, NPM, import,
                        export, and using external modules with npm:
                      </p>
                      <div className="flex items-center gap-3">
                        <BsBoxArrowUpRight className="cursor-pointer text-black" />{" "}
                        <Link
                          className="text-[#2563EB]"
                          href={
                            "https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit#slide=id.p"
                          }
                          target="-blank"
                        >
                          node.js intro
                        </Link>
                      </div>
                    </div>
                  </li>

                  <li className="my-2">
                    <div>
                      <p>
                        How to accept user input in your Node.js JavaScript
                        programs, this will allow us to create interactive
                        Node.js console programs using prompt-sync library. The
                        last example in this presentation shows you how to use
                        prompt-sync library in your Node.js programs:
                      </p>
                      <div className="flex items-center gap-3">
                        <BsBoxArrowUpRight className="cursor-pointer text-black" />{" "}
                        <Link
                          className="text-[#2563EB]"
                          href={""}
                          target="-blank"
                        >
                          node.js intro
                        </Link>
                      </div>
                    </div>
                  </li>

                  <li className="my-2">
                    <div>
                      <p>
                        Using Arrays and Objects in Node.js Programs (chapter 3
                        of JavaScript from Beginner to Professional)
                      </p>
                    </div>
                  </li>
                  <li className="my-2">
                    <div>
                      <p>
                        Using if and if else statements, else if statements,
                        Conditional ternary operators, and switch statements in
                        Node.js programs (chapter 4 of JavaScript from Beginner
                        to Professional)
                      </p>
                    </div>
                  </li>
                  <li className="my-2">
                    <div>
                      <p>
                        Using while loop, do while loop, for loop, for in, and
                        for of loop in Node.js (chapter 5 of JavaScript from
                        Beginner to Professional)
                      </p>
                    </div>
                  </li>
                  <li className="my-2">
                    <div>
                      <p>
                        Using Basic functions, Function arguments, Return,
                        Variable scope in functions, Recursive functions, Nested
                        functions, Anonymous functions, and Function callbacks
                        in Node.js (chapter 6 of JavaScript from Beginner to
                        Professional)
                      </p>
                    </div>
                  </li>
                  <li className="my-2">
                    <div>
                      <p>
                        Using Concurrency, Callbacks, Promises, async / await,
                        and Event loop (chapter 13 of JavaScript from Beginner
                        to Professional)
                      </p>
                    </div>
                  </li>
                  <li className="my-2">
                    <div>
                      <p>JavaScript promises, mastering the asynchronous</p>
                    </div>
                  </li>
                  <li className="my-2">
                    <div>
                      <p>New JavaScript Features in ECMAScript 2022 and 2021</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h1 className="text-[24px] font-bold mt-10 mb-5 text-[#044E83]">
                5. Object-Oriented Programming with TypeScript
              </h1>
              <div className="bg-[#F9FAFB] rounded-md px-5 py-5">
                <div className="text-zinc-700">
                  <h1>
                    Chapters 1-11 of Learning TypeScript: Enhance Your Web
                    Development Skills Using Type-Safe JavaScript
                  </h1>
                  <div className="flex items-center gap-3">
                    <BsBoxArrowUpRight className="cursor-pointer text-black" />{" "}
                    <Link
                      className="text-[#2563EB]"
                      href={
                        "https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1"
                      }
                      target="-blank"
                    >
                      learning typeScript: enhance your web development skills
                      using type-safe javascript
                    </Link>
                  </div>
                </div>

                <div className="mt-3 text-zinc-700">
                  <h1>Learning TypeScript in Baby Steps</h1>
                  <div className="flex items-center gap-3">
                    <BsBoxArrowUpRight className="cursor-pointer text-black" />{" "}
                    <Link
                      className="text-[#2563EB]"
                      href={"https://github.com/panaverse/learn-typescript"}
                      target="-blank"
                    >
                      learning repository
                    </Link>
                  </div>
                </div>

                <div className="mt-3 text-zinc-700">
                  <h1>
                    In Class Companion projects and articles for Learning
                    TypeScrip
                  </h1>
                  <div className="flex items-center gap-3">
                    <BsBoxArrowUpRight className="cursor-pointer text-black" />{" "}
                    <Link
                      className="text-[#2563EB]"
                      href={"https://github.com/panaverse/learn-typescript"}
                      target="-blank"
                    >
                      typeScript book for javaScript developers out today
                    </Link>
                  </div>
                </div>

                <div className="mt-3 text-zinc-700">
                  <h1>Homework Project</h1>
                  <div className="flex items-center gap-3 lowercase">
                    <BsBoxArrowUpRight className="cursor-pointer text-black" />{" "}
                    <Link
                      className="text-[#2563EB]"
                      href={
                        "https://github.com/panaverse/typescript-node-projects"
                      }
                      target="-blank"
                    >
                      Programming Projects to Learn TypeScript and Node.js
                    </Link>
                  </div>
                </div>

                <div className="mt-5">
                  <h1 className="text-[20px] font-bold text-[#27272A]">
                    Typescript Quizzes
                  </h1>
                  <h2 className="text-[16px] mt-1 text-zinc-700">
                    Fundamentals of TypeScript Quiz
                  </h2>
                  <h2 className="text-[16px] mt-1 text-zinc-700">
                    TypeScript Professional Proficiency Quiz
                  </h2>
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-[24px] font-bold mt-10 mb-5 text-[#044E83]">
                6. TypeScript for React
              </h1>
              <div className="bg-[#F9FAFB] rounded-md px-5 py-5 text-zinc-700">
                <h1>
                  Minimal TypeScript Crash Course For React With Interactive
                  Code Exercises
                </h1>
                <div className="flex items-center gap-3">
                  <BsBoxArrowUpRight className="cursor-pointer text-black" />{" "}
                  <Link
                    className="text-[#2563EB]"
                    href={"https://profy.dev/article/react-typescript"}
                    target="-blank"
                  >
                    typescript for react crash course
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-[26px] font-bold mt-10 mb-5 text-[#044E83]">
                7. Quarter Break Assignments and Quizzes
              </h1>
              <div className="bg-[#F9FAFB] rounded-md px-5 py-5 ">
                <p>
                  During the Quarter Break, we do the following Assignments:
                </p>
                <ul className="list-disc ml-10">
                  <li className="mt-4">
                    <div className="flex items-center gap-3">
                      <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                      <Link
                        className="text-[#2563EB]"
                        href={
                          "https://github.com/panaverse/learn-nextjs/tree/main/assignment00_cloud_to_edge"
                        }
                        target="-blank"
                      >
                        assignment : cloud to edge
                      </Link>
                    </div>
                  </li>

                  <li className="mt-4">
                    <div className="flex items-center gap-3">
                      <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                      <Link
                        className="text-[#2563EB]"
                        href={
                          "https://github.com/panaverse/learn-nextjs/tree/main/assignment01_todo_app"
                        }
                        target="-blank"
                      >
                        todo app
                      </Link>
                    </div>
                  </li>

                  <li className="mt-4">
                    <div className="flex items-center gap-3 lowercase">
                      <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                      <Link
                        className="text-[#2563EB]"
                        href={
                          "https://github.com/panaverse/learn-nextjs/tree/main/assignment01_todo_app"
                        }
                        target="-blank"
                      >
                        Pricing Ui
                      </Link>
                    </div>
                  </li>

                  <li className="mt-4">
                    <p>
                      Build a Panaverse DAO Syllabus Website using Next.js 13
                      given the content from the following document:
                    </p>
                    <div className="flex items-center gap-3 lowercase">
                      <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                      <Link
                        className="text-[#2563EB]"
                        href={
                          "https://github.com/panaverse/learn-nextjs/tree/main/assignment01_todo_app"
                        }
                        target="-blank"
                      >
                        Panaverse DAO Syllabus
                      </Link>
                    </div>
                  </li>

                  <li className="mt-4">
                    <p>
                      Build a new PIAIC Website using Next.js 13 given the
                      content from the current PIAIC Website and from the
                      following document:
                    </p>
                    <div className="flex items-center gap-3 lowercase">
                      <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                      <Link
                        className="text-[#2563EB]"
                        href={
                          "https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?tab=t.0"
                        }
                        target="-blank"
                      >
                        PIAIC Syllabus
                      </Link>
                    </div>
                  </li>
                </ul>

                <div className="text-[15px] mt-5">
                  <p>
                    After completing the above Five Assignments everyone will
                    appear in the following two Quizzes covering Github and
                    TypeScript:
                  </p>
                </div>

                <div>
                  <h1 className="text-[18px] font-extrabold mt-6 text-[#27272A]">
                    Fundamentals of Version Control with Git Quiz
                  </h1>
                  <p className="mt-5">
                    Version Control using Git and GitHub By Sir Zeeshan Hanif
                    (Watch Recorded Videos)
                  </p>
                  <div className="flex items-center gap-3">
                    <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                    <Link
                      className="text-[#2563EB]"
                      href={
                        "https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF"
                      }
                      target="-blank"
                    >
                      video link
                    </Link>
                  </div>
                </div>

                <div>
                  <p className="text-zinc-700 mt-3">
                    Chapters 1, 2, 3, and 4 Learn Version Control with Git: A
                    step-by-step course for the complete beginner by Tobias
                    Günther
                  </p>
                </div>

                <div>
                  <h1 className="text-[#27272A] font-bold text-[18px] mt-5">
                    We will also cover these readings:
                  </h1>
                  <ul className="mt-5">
                    <li className="flex items-center gap-3 lowercase">
                      <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                      <Link
                        className="text-[#2563EB]"
                        href={
                          "https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github"
                        }
                        target="-blank"
                      >
                        Getting started with writing and formatting on GitHub
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <ul className="mt-1 lowercase">
                    <li className="flex items-center gap-3">
                      <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                      <Link
                        className="text-[#2563EB]"
                        href={
                          "https://stackoverflow.com/questions/5009600/difference-between-fork-and-branch-on-github"
                        }
                        target="-blank"
                      >
                        Difference between fork and branch on github
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <ul className="mt-1">
                    <li className="flex items-center gap-3 lowercase">
                      <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                      <Link
                        className="text-[#2563EB]"
                        href={
                          "https://stackoverflow.com/questions/3329943/what-are-the-differences-between-git-branch-fork-fetch-merge-rebase-and-clon"
                        }
                        target="-blank"
                      >
                        What are the differences between git branch, fork,
                        fetch, merge, rebase and clone?
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <ul className="mt-1">
                    <li className="flex items-center gap-3 lowercase">
                      <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                      <Link
                        className="text-[#2563EB]"
                        href={
                          "https://git-scm.com/book/en/v2/Git-Branching-Rebasing"
                        }
                        target="-blank"
                      >
                        Git Branching - Rebasing
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <ul className="mt-1">
                    <li className="flex items-center gap-3 lowercase">
                      <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                      <Link
                        className="text-[#2563EB]"
                        href={
                          "https://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#Tracking-Branches"
                        }
                        target="-blank"
                      >
                        Git Branching - Remote Branches
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="mt-1">
                    <li className="flex items-center gap-3 lowercase">
                      <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                      <Link
                        className="text-[#2563EB]"
                        href={
                          "https://docs.github.com/en/get-started/getting-started-with-git/set-up-git"
                        }
                        target="-blank"
                      >
                        Practice
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h1 className="text-[20px] mt-5 font-bold text-[#27272A]">
                    We will also cover these readings:
                  </h1>
                  <div className="flex items-center gap-3">
                    <BsBoxArrowUpRight className="cursor-pointer " />{" "}
                    <Link
                      className="text-[#2563EB]"
                      href={
                        "https://docs.github.com/en/get-started/getting-started-with-git/set-up-git"
                      }
                      target="-blank"
                    >
                      Introduction to git for data science
                    </Link>
                  </div>
                </div>

                <div>
                  <h1 className="text-[#27272A] text-[20px] font-bold mt-5">
                    Git Quiz
                  </h1>
                  <p className="text-zinc-700 text-[15px]">
                    Total Questions: 60, Total Time: 75 minutes
                  </p>
                </div>

                <div>
                  <h1 className="text-[20px] font-bold text-[#27272A] mt-5">
                    TypeScript Proficiency Quiz
                  </h1>
                  <p className="mt-4 text-zinc-700">Total Questions: 63</p>
                  <p className="text-zinc-700">Duration: 120 minutes</p>
                </div>
                <div>
                  <h1 className="text-zinc-700 mt-5">Study Material:</h1>
                  <div className="flex items-center gap-3">
                    <BsBoxArrowUpRight className="cursor-pointer " />{" "}
                    <Link
                      className="text-[#2563EB] text-[15px]"
                      href={
                        "https://docs.github.com/en/get-started/getting-started-with-git/set-up-git"
                      }
                      target="-blank"
                    >
                      learn typescript
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

export default Programming;
