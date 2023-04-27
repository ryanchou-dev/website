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
        <title>ryan&apos;s projects</title>
      </Head>
      <div className={`mb-12 `}>
        <Link href={"/"} className="">
          <a className={`float-left inline`}>
            <Image
              priority
              src="/images/ryan.jpg"
              alt="ryan chou."
              className={`rounded-full `}
              width="85%"
              height="85%"
              layout="fixed"
              objectFit="cover"
              quality={100}
            />
          </a>
        </Link>
        <p
          className={`ml-4 inline text-xl font-semibold text-head underline decoration-dotted underline-offset-2 sm:text-4xl`}
        >
          Projects
        </p>
        <div className={`inline  text-xl font-semibold text-head sm:text-4xl`}>
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
          <p
            className={`mt-1.5  pl-24 pr-24 text-sm font-normal text-black sm:text-xl md:text-2xl`}
          >
            projects im most proud of :D
          </p>
        </div>
        <div className={`mt-10 block text-xl`}>
          <Link href={`/projects`}>
            <a
              className={`bg-opacity inline rounded-lg p-0.5 underline duration-150 hover:cursor-pointer hover:bg-[#88C0D0] hover:bg-opacity-20 hover:text-[#687fa8] hover:no-underline md:p-1`}
            >
              projects
            </a>
          </Link>
          &nbsp;&#8226;&#8226;&#8226;&nbsp;
          <Link href={`/posts`}>
            <a
              className={`bg-opacity inline rounded-lg p-0.5 underline duration-150 hover:cursor-pointer hover:bg-[#88C0D0] hover:bg-opacity-20 hover:text-[#687fa8] hover:no-underline md:p-1`}
            >
              posts
            </a>
          </Link>
          &nbsp;&#8226;&#8226;&#8226;&nbsp;
          <Link href={`/tags`}>
            <a
              className={`bg-opacity inline rounded-lg p-0.5 underline duration-150 hover:cursor-pointer hover:bg-[#88C0D0] hover:bg-opacity-20 hover:text-[#687fa8] hover:no-underline md:p-1`}
            >
              tags
            </a>
          </Link>
          <hr className={`my-2 h-1 rounded-sm bg-head bg-opacity-40`} />
        </div>
      </div>
      {projdata.map((projdata) => (
        <div key={projdata.name} className={`relative `}>
          <Image
            src={projdata.imageSrc}
            alt={projdata.imageAlt}
            width={800}
            height={400}
            objectFit="contain"
            objectPosition="top left"
            className={``}
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
    </>
  );
}
