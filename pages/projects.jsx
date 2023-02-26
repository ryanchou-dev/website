import Image from "next/image";
import { projdata } from "../components/things/projdata";
import { FiLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { SiDevpost } from "react-icons/si";
import Head from "next/head";
import Link from "next/link";
import { BsMedium } from "react-icons/bs";
import Snowfall from "react-snowfall";
export default function projects() {
  return (
    <>
      <Head>
        <meta name="title" content="ryan's things" />
        <meta name="description" content="a list of ryan's failures" />
        <title>Ryan Chou</title>
      </Head>
      <div
        className={`min-w-screen relative min-h-screen bg-lightbg px-12 py-12 lg:py-16 lg:px-52 xl:px-96`}
      >
        <div className={`mb-12`}>
          <Link href={"/"}>
            <a className={`float-left inline`}>
              <Image
                src="/images/ryan.png"
                alt="me."
                className={`rounded-full`}
                width="80%"
                height="80%"
                layout="fixed"
                objectFit="contain"
              />
            </a>
          </Link>
          <div className={`inline text-2xl font-semibold text-head`}>
            <p className={`underline decoration-dotted underline-offset-2`}>
              Projects
            </p>
            <div className={`float-right space-x-4 text-2xl md:space-x-6`}>
              <a
                href={`https://github.com/ryanchou-dev`}
                target="_blank"
                rel={"noreferrer"}
                className={`duration-300 hover:scale-105`}
              >
                <AiFillGithub
                  className={`inline h-8 w-8 text-[#a9afba] opacity-80 duration-100 hover:text-[#8ca9de] sm:h-12 sm:w-12`}
                />
              </a>

              <a
                target="_blank"
                rel={"noreferrer"}
                href={`https://medium.com/@ryan-chou`}
                className={`duration-300 hover:scale-105`}
              >
                <BsMedium
                  className={`inline h-8 w-8 text-[#a9afba] opacity-80 duration-100 hover:text-[#8ca9de] sm:h-12 sm:w-12`}
                />
              </a>
            </div>
            <p className={`mt-1.5 pl-8  pr-28 text-lg font-normal text-black`}>
              some things ive worked on
            </p>
          </div>
        </div>
        {projdata.map((projdata) => (
          <div key={projdata.name} className={`relative`}>
            <Image
              src={projdata.imageSrc}
              alt={projdata.imageAlt}
              width={800}
              height={400}
              objectFit="contain"
              objectPosition="top left"
              className={` border-8`}
            />
            <br />

            <p className={`mt-2 inline-block text-xl`}>
              <a target={"_blank"} rel={"noreferrer"} href={projdata.site}>
                <span className={`underline underline-offset-2 `}>
                  {projdata.name}
                </span>
              </a>
              {projdata.site ? (
                <a
                  target={"_blank"}
                  rel={"noreferrer"}
                  href={projdata.site}
                  className={`ml-3 -mb-3 mr-2 inline-block rounded-lg bg-blue-400 bg-opacity-30 p-1.5 duration-300 hover:scale-105`}
                >
                  <FiLink color="#6b6b6b" size={25} />
                </a>
              ) : (
                <></>
              )}

              {projdata.gh ? (
                <a
                  target={"_blank"}
                  rel={"noreferrer"}
                  href={projdata.gh}
                  className={`ml-3 -mb-3 mr-3 inline-block rounded-lg bg-blue-400 bg-opacity-30 p-1 duration-300 hover:scale-105`}
                >
                  <AiFillGithub color="#6b6b6b" size={29} />
                </a>
              ) : (
                <></>
              )}

              {projdata.dv ? (
                <a
                  target={"_blank"}
                  rel={"noreferrer"}
                  href={projdata.dv}
                  className={`ml-2 -mb-3 inline-block rounded-lg bg-blue-400 bg-opacity-30 p-1 duration-300 hover:scale-105`}
                >
                  <SiDevpost color="#6b6b6b" size={29} />
                </a>
              ) : (
                <></>
              )}
            </p>
            <p className={`text-light mt-1.5 text-base sm:text-lg`}>
              {projdata.description}
            </p>

            {projdata.colab ? (
              <div className="mt-2">
                Built with:
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href={"https://github.com/maggie-j-liu"}
                  className={`bg-opacity inline rounded-lg p-0.5 underline decoration-wavy underline-offset-8 duration-150 hover:cursor-pointer hover:bg-[#88C0D0] hover:bg-opacity-20 hover:text-[#687fa8] hover:no-underline md:p-1`}
                >
                  Maggie Liu
                </a>
                ,
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href={"https://github.com/ShubhamPatilsd"}
                  className={`bg-opacity inline rounded-lg p-0.5 underline decoration-wavy underline-offset-8 duration-150 hover:cursor-pointer hover:bg-[#88C0D0] hover:bg-opacity-20 hover:text-[#687fa8] hover:no-underline md:p-1`}
                >
                  Shubham Patil
                </a>
                ,
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href={"https://github.com/eternalmoon1234"}
                  className={`bg-opacity inline rounded-lg p-0.5 underline decoration-wavy underline-offset-8 duration-150 hover:cursor-pointer hover:bg-[#88C0D0] hover:bg-opacity-20 hover:text-[#687fa8] hover:no-underline md:p-1`}
                >
                  Gautam Paranjape
                </a>
                ,
              </div>
            ) : (
              <></>
            )}
            <hr className={`my-8 h-1 rounded-sm bg-head bg-opacity-40`} />
          </div>
        ))}
      </div>
    </>
  );
}
