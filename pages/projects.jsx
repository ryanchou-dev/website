import Image from "next/image";
import { projdata } from "../components/things/projdata";
import { FiLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { SiDevpost } from 'react-icons/si'
import Head from "next/head";
import Link from "next/link";
import { BsMedium } from "react-icons/bs";
export default function projects() {
  return (
    <>
      <Head>
        <meta name="title" content="ryan's things" />
        <meta name="description" content="a list of ryan's failures" />
        <title>Ryan Chou</title>
      </Head>
      <div
        className={`min-w-screen min-h-screen bg-lightbg bg-opacity-60 px-12 py-12 lg:py-16 lg:px-52 xl:px-96`}
      >
        <div className={`mb-12`}>
          <Link href={'/'}>
            <a
              className={`float-left inline`}
            >
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
            <p className={`mt-1.5 pl-8  text-black font-normal text-lg pr-28`}>
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
                className={`rounded-lg`}
              />
              <br />

              <p className={`mt-2 inline-block text-xl`}>
                <a
                  target={"_blank"}
                  rel={"noreferrer"}
                  href={projdata.site}
                >
                <span className={`underline underline-offset-2 `}>
                  {projdata.name}
                </span>
                </a>
                {projdata.site ? (
                  <a
                    target={"_blank"}
                    rel={"noreferrer"}
                    href={projdata.site}
                    className={`ml-3 -mb-3 mr-3 inline-block rounded-lg bg-blue-400 bg-opacity-30 p-1.5 duration-300 hover:scale-105`}
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
              <p className={`mt-1.5 text-base sm:text-lg text-light`}>
                {projdata.description}
              </p>
              <hr className={`my-8 bg-head h-1 bg-opacity-40 rounded-sm`} />
            </div>
          ))}
      </div>
    </>
  );
}
