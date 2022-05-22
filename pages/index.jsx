import Head from "next/head";
import Image from "next/image";
import Date from "../components/Date";
import Link from "next/link";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { getPosts } from "../lib/posts";
import { AiFillGithub } from "react-icons/ai";
import { BsMedium } from "react-icons/bs";
import { Typewriter } from "react-simple-typewriter";

export default function home({ post_data }) {
  return (
    <>
      <Head>
        <meta name="title" content="ryan chou's website" />
        <meta name="description" content="a collection of ryan's failures." />
        <meta
          name="keywords"
          content="ryan chou usaco cpi competitive-programming"
        />
        <title>Ryan Chou</title>
      </Head>
      <div
        className={`min-w-screen min-h-screen bg-lightbg bg-opacity-60 px-12 py-12 lg:py-16 lg:px-52 xl:px-96`}
      >
        <div>
          <Tippy content="stop touching me!">
            <a
              target={`_blank`}
              rel={"noreferrer"}
              className={`float-left inline`}
              href={`https://cloud-i3qrqzy85-hack-club-bot.vercel.app/0image.png`}
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
          </Tippy>
          <p className={`ml-2 inline text-2xl font-semibold text-head underline underline-offset-2 decoration-dotted`}>
            Ryan Chou
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
        </div>
        <p
          className={`text-light mt-2 block text-xl md:mt-4 md:text-2xl lg:inline`}
        >
          &nbsp;|&nbsp;im&nbsp;
          <Typewriter
            words={[
              "a competitive programmer",
              "a web developer",
              "a cow enthusiast",
              "a boba addict",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            delaySpeed={4000}
          />
        </p>
        <div className={`mt-8 block text-xl`}>
          <Link href={`/posts`}>
            <a
              className={`bg-opacity inline rounded-lg p-0.5 underline duration-150 hover:cursor-pointer hover:bg-[#88C0D0] hover:bg-opacity-20 hover:text-[#687fa8] hover:no-underline md:p-1`}
            >
              posts
            </a>
          </Link>
          &nbsp;&#8226;&#8226;&#8226;&nbsp;
          <Link href={`/projects`}>
            <a
              className={`bg-opacity inline rounded-lg p-0.5 underline duration-150 hover:cursor-pointer hover:bg-[#88C0D0] hover:bg-opacity-20 hover:text-[#687fa8] hover:no-underline md:p-1`}
            >
              projects
            </a>
          </Link>
          <hr className={`my-2 bg-head h-1 bg-opacity-40 rounded-sm`} />
        </div>
        <div className={`text-md mt-8 block sm:text-lg`}>
          <p className="mb-2 text-xl font-semibold text-head">
            a lil about me.
          </p>
          hey! -w-
          <br />
          im ryan, but you might know me as `1potato2potato` online. im a
          student studying computer science in the bay area.
          <br />
          <br />
          <p className="mb-2 text-xl font-semibold text-head">
            what am i doing right now??
          </p>
          Right now, I'm working at CPI, and over the course of this summer,
          I'll be binge sleeping.
          <br />
          <p className={`mt-1.5`}>
            Consider checking out what im currently working on at{" "}
            <span
              className={`bg-opacity rounded-lg p-0.5 underline duration-150 hover:cursor-pointer hover:bg-[#88C0D0] hover:bg-opacity-20 hover:text-[#687fa8] hover:no-underline md:p-1`}
            >
              @ryanchou-dev
            </span>{" "}
            or look at some of my projects here.
          </p>
          <p className="mt-8 mb-2 text-xl font-semibold text-head">
            what am i planning to do?
          </p>
          <p>
            I'm hoping to study more machine learning, web development, and
            competitive programming. I'll routinely update on what I'm learning
            here.
          </p>
          <br />
          <p className={`pl-2`}>
            thanks for stopping by. <br />
            <span className={`pl-6`}>- ryan</span>
          </p>
        </div>

        <div className={`absolute bottom-4 w-auto font-mono`}>
          &gt; made with boba tea 🧋 and &lt;3 <br />
          <span className={`text-sm`}>© Ryan Chou. All Rights Reserved.</span>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const post_data = getPosts();

  return {
    props: {
      post_data,
    },
  };
}
