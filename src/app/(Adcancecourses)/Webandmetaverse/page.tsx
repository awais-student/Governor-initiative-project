import React from "react";
import Link from "next/link";
import { MdOutlineWatchLater } from "react-icons/md";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Webandmetaverse = () => {
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
                Web 3 and Metaverse
              </h1>
              <p className="px-4 text-zinc-700">
                W3-351: Developing Smart Contracts and Planet-Scale Web 3.0
                Dapps
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
                In this course you will learn how to develop Web 3.0 DApps,
                create a project, deploy it in production, write smart
                contracts, unit test them, and create user interfaces for them.
                We will also learn to develop ERC-20 and NFT tokens, DAOs,
                Oracles, etc. Please note that in order to develop Web 3
                applications you also need to build on top of Web 2.0
                technologies which we have already covered in the previous
                quarters.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <h1 className="text-[35px] font-bold text-[#27272A]">
              Course Outline
            </h1>
            <div className="border-b border-zinc-800 pb-3"></div>
            <h1 className="text-[24px] font-bold mt-10 mb-5 text-[#044E83]">
              1. Blockchain and Metaverse Theory
            </h1>
          </div>

          <div className="bg-[#F9FAFB] px-5 py-6">
            <p className=" text-zinc-700">
              The Metaverse: And How It Will Revolutionize Everything by Matthew
              Ball
            </p>
            <div className="flex items-center gap-3">
              <BsBoxArrowUpRight className="cursor-pointer" />{" "}
              <Link
                className="text-[#2563EB] text-[15px] font-bold lowercase"
                href={
                  "https://www.amazon.com/Metaverse-How-Will-Revolutionize-Everything/dp/1324092033/ref=tmm_hrd_swatch_0"
                }
                target="_blank"
              >
                Metaverse book by matthew ball
              </Link>
            </div>

            <p className="text-zinc-700 mt-3">
              Mastering Blockchain - Fourth Edition by Imran Bashir
            </p>
            <div className="flex items-center gap-3">
              <BsBoxArrowUpRight className="cursor-pointer" />{" "}
              <Link
                className="text-[#2563EB] text-[15px] font-bold lowercase"
                href={
                  "https://www.packtpub.com/en-us/product/mastering-blockchain-fourth-edition-9781803241067"
                }
                target="_blank"
              >
                Mastering blockchain book by imran bashir
              </Link>
            </div>
          </div>

          <div>
            <h1 className="text-[24px] font-bold mt-10 mb-5 text-[#044E83]">
              2. Smart Contract Development in Solidity
            </h1>
            <div className="bg-[#F9FAFB] px-5 py-6">
              <p className="text-zinc-700 mt-3">
                Solidity Programming Essentials - Second Edition By Ritesh Modi
              </p>
              <div className="flex items-center gap-3">
                <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                <Link
                  className="text-[#2563EB] text-[15px] font-bold lowercase"
                  href={
                    "https://www.packtpub.com/en-us/product/solidity-programming-essentials-9781803231181"
                  }
                  target="_blank"
                >
                  Solidity programming book by Ritesh Modi
                </Link>
              </div>

              <p className="text-zinc-700 mt-3">Solidity Learning Repo</p>
              <div className="flex items-center gap-3">
                <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                <Link
                  className="text-[#2563EB] text-[15px] font-bold lowercase"
                  href={
                    "https://github.com/panaverse/defi-dapps-solidity-smart-contracts"
                  }
                  target="_blank"
                >
                  Defi dapps solidity smart contracts repo
                </Link>
              </div>
            </div>
            <h1 className="text-[24px] font-bold mt-10 mb-5 text-[#044E83]">
              3. Dapp Development using Ethers.js and Next.js 13
            </h1>
            <div className="bg-[#F9FAFB] px-5 py-6">
              <p className="text-zinc-700 mt-3">Dapp Learning Repo</p>
              <div className="flex items-center gap-3">
                <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                <Link
                  className="text-[#2563EB] text-[15px] font-bold lowercase"
                  href={"https://github.com/panaverse/dapps-nextjs"}
                  target="_blank"
                >
                  Dapps nextjs repo
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-[24px] font-bold mt-10 mb-5 text-[#044E83]">
              4. Tokennomics
            </h1>
          </div>

          <div>
            <h1 className="text-[24px] font-bold mt-10 mb-5 text-[#044E83]">
              5. Blockchain Project: Create a Token and Launch ICO/IEO/IDO
            </h1>
            <div className="bg-[#F9FAFB] px-5 py-6">
              <p className="text-zinc-700 mt-3">
                As you probably know, the ICO industry has been booming, and it
                is completely reinventing the way new startups kickstart
                themselves. In fact, have a look at Wikipedia list of highest
                crowdfunding projects
              </p>
              <div className="flex items-center gap-3">
                <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                <Link
                  className="text-[#2563EB] text-[15px] font-bold lowercase"
                  href={
                    "https://en.wikipedia.org/wiki/List_of_highest-funded_crowdfunding_projects"
                  }
                  target="_blank"
                >
                  List_of highest-funded crowdfunding projects
                </Link>
              </div>
              <div>
                <p className="text-zinc-700 mt-1">
                  and you wll notice that blockchain projects absolutely
                  dominate the list.
                </p>
              </div>

              <div>
                <p className="text-zinc-700 mt-4">
                  Understand the difference between IDO vs. IEO vs. ICO
                </p>
                <div className="flex items-center gap-3">
                  <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                  <Link
                    className="text-[#2563EB] text-[15px] font-bold lowercase"
                    href={"https://phemex.com/blogs/what-is-a-dex-ido"}
                    target="_blank"
                  >
                    What is a dex ido
                  </Link>
                </div>
              </div>

              <div>
                <p className="text-zinc-700 mt-4">
                  Also check these links for latest listings:
                </p>
                <div className="flex items-center gap-3">
                  <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                  <Link
                    className="text-[#2563EB] text-[15px] font-bold lowercase"
                    href={"https://icodrops.com/"}
                    target="_blank"
                  >
                    ICO list at ICO Drops
                  </Link>
                </div>

                <div className="flex items-center gap-3 mt-3">
                  <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                  <Link
                    className="text-[#2563EB] text-[15px] font-bold lowercase "
                    href={"https://topicolist.com/"}
                    target="_blank"
                  >
                    ICO List of Best New Initial Coin Offerings
                  </Link>
                </div>
              </div>

              <div>
                <p className="text-zinc-700 text-[14.5px] mt-4">
                  Top-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and
                  IDOsTop-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs
                  and IDOs
                </p>
                <div className="flex items-center gap-3 mt-3">
                  <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                  <Link
                    className="text-[#2563EB] text-[15px] font-bold lowercase "
                    href={"https://cryptototem.com/ico-list/"}
                    target="_blank"
                  >
                    Ico list
                  </Link>
                </div>

                <div className="flex items-center gap-3 mt-3">
                  <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                  <Link
                    className="text-[#2563EB] text-[15px] font-bold lowercase "
                    href={"https://www.icolistingonline.com/"}
                    target="_blank"
                  >
                    ICO List Online
                  </Link>
                </div>

                <div className="flex items-center gap-3 mt-3">
                  <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                  <Link
                    className="text-[#2563EB] text-[15px] font-bold lowercase "
                    href={"https://coincodex.com/ieo-list/binance/"}
                    target="_blank"
                  >
                    Binance IEO List
                  </Link>
                </div>

                <div className="flex items-center gap-3 mt-3">
                  <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                  <Link
                    className="text-[#2563EB] text-[15px] font-bold lowercase "
                    href={
                      "https://www.coinspeaker.com/ieo/platform/binance-launchpad/"
                    }
                    target="_blank"
                  >
                    Binance Launchpad
                  </Link>
                </div>

                <div className="flex items-center gap-3 mt-3">
                  <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                  <Link
                    className="text-[#2563EB] text-[15px] font-bold lowercase "
                    href={"https://icomarks.com/ieo"}
                    target="_blank"
                  >
                    IEO List
                  </Link>
                </div>

                <div className="flex items-center gap-3 mt-3">
                  <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                  <Link
                    className="text-[#2563EB] text-[15px] font-bold lowercase "
                    href={"https://polkastarter.com/"}
                    target="_blank"
                  >
                    Polkastarter
                  </Link>
                </div>
              </div>

              <div>
                <p className="font-bold mt-3">
                  Project Part 1: How to Launch a IEO on Binance Launchpad
                </p>
                <p className="text-zinc-700 text-[14.5px] mt-4">
                  Read How to Launch an IEO
                </p>
                <div className="flex items-center gap-3">
                  <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                  <Link
                    className="text-[#2563EB] text-[15px] font-bold lowercase "
                    href={"https://appinventiv.com/blog/how-to-launch-an-ieo/"}
                    target="_blank"
                  >
                    How to launch an ieo
                  </Link>
                </div>
              </div>

              <div>
                <p className="text-zinc-700 text-[14.5px] mt-4">
                  Your first task of the project is to make a google slides
                  presentation on how to start a IEO on the Binance Launch Pad
                </p>
                <div className="flex items-center gap-3">
                  <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                  <Link
                    className="text-[#2563EB] text-[15px] font-bold lowercase "
                    href={
                      "https://www.binance.com/en/support/faq/how-to-get-started-with-binance-launchpool-94ed108ce89d44ab8602aa3c476dfb04?hl=en"
                    }
                    target="_blank"
                  >
                    How to Get Started with Binance Launchpool
                  </Link>
                </div>
                <p className="text-[15px] font-bold ml-7 mt-4 text-[#27272A]">
                  Note : Also document the alternatives to Binance Launchpad.
                </p>
              </div>

              <div>
                <p className="font-extrabold text-[#27272A] mt-5 text-[17px]">
                  Project Part 2: How to Launch a IDO on Polkastarter
                </p>
                <p className="text-zinc-700 text-[14.5px] mt-4">
                  Review the list of top fundraising platforms
                </p>
                <div className="flex items-center gap-3">
                  <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                  <Link
                    className="text-[#2563EB] text-[15px] font-bold lowercase "
                    href={"https://cryptorank.io/fundraising-platforms"}
                    target="_blank"
                  >
                    Top fundraising platforms
                  </Link>
                </div>

                <p className="text-zinc-700 text-[14.5px] mt-4">
                  Your second task of the project is to make a google slides
                  presentation on how to start a IDO on the Polkastarter
                </p>
                <div className="flex items-center gap-3">
                  <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                  <Link
                    className="text-[#2563EB] text-[15px] font-bold lowercase "
                    href={"https://polkastarter.com/"}
                    target="_blank"
                  >
                    polkastarter
                  </Link>
                </div>
              </div>

              <div>
                <h1 className="font-bold mt-5 text-[18px] text-[#27272A]">
                  Project Part 3: Create a Pako Token
                </h1>
                <p className="text-zinc-700 mt-3">
                  By creating a token and related contracts, you will also learn
                  how to handle money sent to your contracts, which should come
                  in handy if you want to create some kind of paid decentralized
                  service in the future.
                </p>
                <p className="text-zinc-700 mt-3">
                  Therefore, for the sake of this chapter, let imagine that our
                  Pako DApp uses its own coin – the Pako Token. We will create
                  two contracts – one for the token itself and one for the token
                  crowd sale (the ICO).
                </p>

                <p className="text-zinc-700 mt-3">
                  Now Create your own Pako ERC20 Token and deploy it on a
                  testnet. The Token should be to use OpenZeppelin contracts.
                  You will use the Hardhat development environment. Also, write
                  at least twenty automated tests. We will be using Solidity and
                  Typescript for development.
                </p>
              </div>

              <div>
                <h1 className="font-bold mt-5 text-[18px] text-[#27272A]">
                  Project Part 4: Develop Crowd Sale Contract
                </h1>
                <p className="text-zinc-700 mt-3">
                  This contract will be responsible for allowing users to
                  exchange ETH for our Pako Token. In order to do that we need
                  to set a price for our token (1 ETH = 100 Pako Token)
                </p>
                <p className="text-zinc-700 mt-3">
                  Implement a payable buyToken() function.
                </p>
                <p className="text-zinc-700 mt-3">
                  Emit a BuyTokens event that will log who’s the buyer, the
                  amount of ETH sent and the amount of Token bought
                </p>
                <p className="text-zinc-700 mt-3">
                  Transfer 75% of the Tokens to the Crowd Sale contract at
                  deployment time. i.e. Right after the contract is deployed, we
                  want the token contract to send 75% of our token supply to it.
                  While 25% remain in our personal account.
                </p>
                <p className="text-zinc-700 mt-3">
                  Transfer the ownership of the Crowd Sale contract (at deploy
                  time) to our frontend address so that we are able to withdraw
                  the ETH.
                </p>
              </div>

              <div>
                <p className="text-zinc-700 mt-3">
                  You can use the openzeppelin crowd sale contracts
                </p>
                <div className="flex items-center gap-3">
                  <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                  <Link
                    className="text-[#2563EB] text-[15px] font-bold lowercase "
                    href={
                      "https://docs.openzeppelin.com/contracts/4.x/crowdsales"
                    }
                    target="_blank"
                  >
                    Openzeppelin crowd sale contracts
                  </Link>
                </div>
                <p className="text-zinc-700">
                  however you will have to update the code to the latest
                  solidity version.
                </p>
                <p className="text-zinc-700 mt-3 text-[15.5px]">
                  Also write extensive tests, for example we will simply send a
                  transaction of 1 ETH from a random account to the contract.
                  After the transaction, we should expect the account to have
                  received Pako, while the contract balance should have been
                  reduced.
                </p>
                <div>
                  <h2 className="font-bold ml-7 mt-3">
                    Note : Before you get started writing the token contract we
                    suggest you review the access control
                  </h2>
                  <div className="flex items-center gap-3">
                    <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                    <Link
                      className="text-[#2563EB] text-[15px] font-bold lowercase "
                      href={
                        "https://docs.openzeppelin.com/contracts/4.x/access-control"
                      }
                      target="_blank"
                    >
                      access-control
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <h1 className="font-extrabold mt-3">
                  Project Part 5: Trying it with MetaMask
                </h1>
                <p className="text-zinc-700 mt-3">
                  While it is always good to test your code, it is often more
                  satisfying to see the results of your work wrapped in a nice
                  UI. Let is see how we can deploy our contracts and get some
                  Pako tokens into our MetaMask wallet!
                </p>
                <p className="text-zinc-700 mt-3">
                  We start by running our deployment scripts for the test
                  network so that the new token contracts are uploaded and
                  deployed.
                </p>
                <p className="text-zinc-700 mt-3">
                  When it is done, take note of what addresses the contracts
                  were uploaded to and copy it!
                </p>
                <p className="text-zinc-700 mt-3">
                  Now head to MetaMask, and send a transaction of 1 ETH to the
                  crowd sale contract address. If your MetaMask wallet does not
                  have any ethers, remember that you can use any faucet.
                </p>
                <p className="text-zinc-700 mt-3">
                  After the transaction has been confirmed, you might be
                  confused about why you can not see any tokens in your wallet.
                  It turns out that you need to manually add the token address
                  in MetaMask in order to register it – after all, there are so
                  many tokens out there, there is no way MetaMask could list
                  them all by default!
                </p>
                <p className="text-zinc-700 mt-3">
                  To do this, open the side menu and click on the Add token
                  button to get started:
                </p>
                <p className="text-zinc-700 mt-3">
                  Once you are on the token page, click on Add custom token and
                  paste in the token contract is address in the address field.
                </p>
                <p className="text-zinc-700 mt-3">
                  After confirming that you want to add the token, you should be
                  able to see your Pako balance right next to your ETH balance
                  in the wallet. How cool!
                </p>
              </div>

              <div>
                <h1 className="font-bold mt-3 text-[17px]">
                  Project Part 6: Trying it with Multisignature Wallets
                </h1>
                <p className="text-zinc-700 mt-3">Read</p>
                <div className="flex items-center gap-3">
                  <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                  <Link
                    className="text-[#2563EB] text-[15px] font-bold lowercase "
                    href={
                      "https://www.coindesk.com/tech/2020/11/10/multisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right/"
                    }
                    target="_blank"
                  >
                    Multisignature wallets can keep your coins safer if you use
                    them right
                  </Link>
                </div>
                <p className="text-zinc-700 mt-3">
                  Now use Gnosis Safe with multi-sigs to do what you did in the
                  last part
                </p>
                <div className="flex items-center gap-3">
                  <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                  <Link
                    className="text-[#2563EB] text-[15px] font-bold lowercase "
                    href={
                      "https://www.coindesk.com/tech/2020/11/10/multisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right/"
                    }
                    target="_blank"
                  >
                    Gnosis safe
                  </Link>
                </div>
              </div>

              <div>
                <h1 className="font-bold mt-3 text-[17px]">
                  Project Part 7: Sending Tokens using Ethers.js
                </h1>
                <p className="text-zinc-700 mt-3">
                  Write a Typescript program to send Pako Token to some friend
                  address using Ethers.js.
                </p>
                <div className="flex items-center gap-3 mt-3">
                  <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                  <Link
                    className="text-[#2563EB] text-[15px] font-bold lowercase "
                    href={
                      "https://ethereum.org/en/developers/tutorials/send-token-etherjs/"
                    }
                    target="_blank"
                  >
                    You may follow this tutorial
                  </Link>
                </div>
              </div>

              <div>
                <h1 className="font-bold mt-3 text-[17px]">
                  Project Part 8 Advance: Create, Deploy, Mint, and Sell an NFT
                </h1>
                <p className="text-zinc-700 mt-3">
                  Read this NFT tutorial series
                </p>
                <div className="flex items-center gap-3 ">
                  <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                  <Link
                    className="text-[#2563EB] text-[15px] font-bold lowercase "
                    href={
                      "https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/"
                    }
                    target="_blank"
                  >
                    How to write and deploy an nft
                  </Link>
                </div>

                <p className="text-zinc-700 mt-3">
                  Create a NFT contract using the OpenZepplen ERC721 NFT
                  Standard
                </p>
                <div className="flex items-center gap-3 ">
                  <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                  <Link
                    className="text-[#2563EB] text-[15px] font-bold lowercase "
                    href={"https://docs.openzeppelin.com/contracts/4.x/erc721"}
                    target="_blank"
                  >
                    NFT contract using OpenZepplen ERC721 NFT Standard
                  </Link>
                </div>

                <p className="text-zinc-700 mt-3">
                  You may use the Preset ERC721 contract
                </p>
                <div className="flex items-center gap-3 ">
                  <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                  <Link
                    className="text-[#2563EB] text-[15px] font-bold lowercase "
                    href={
                      "https://docs.openzeppelin.com/contracts/4.x/erc721#Presets"
                    }
                    target="_blank"
                  >
                    Present ERC721 contract
                  </Link>
                </div>
                <p className="text-zinc-700 mt-3">
                  Deploy your NFT contract on a testnet, mint it, and view it on
                  the MetaMask wallet and list it on OpenSea Marketplace for
                  sale.
                </p>
                <div className="flex items-center gap-3 ">
                  <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                  <Link
                    className="text-[#2563EB] text-[15px] font-bold lowercase "
                    href={"https://opensea.io/"}
                    target="_blank"
                  >
                    opensea
                  </Link>
                </div>
                <p className="text-zinc-700 mt-3">Implement a ERC721 Market</p>
                <div className="flex items-center gap-3 ">
                  <BsBoxArrowUpRight className="cursor-pointer" />{" "}
                  <Link
                    className="text-[#2563EB] text-[15px] font-bold lowercase "
                    href={
                      "https://ethereum.org/en/developers/tutorials/how-to-implement-an-erc721-market/"
                    }
                    target="_blank"
                  >
                    How to implement an erc721 market
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

export default Webandmetaverse;
