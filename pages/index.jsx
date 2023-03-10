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
import React from "react";

export default function home({ post_data }) {
  if (typeof window === "undefined") {
    React.useLayoutEffect = React.useEffect;
  }
  return (
    <div className={``}>
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
        className={`min-h-screen w-screen  bg-[url('/images/bgnow.png')] px-12 pt-12 pb-4 lg:px-52 lg:pt-16 lg:pb-8 xl:px-96 xl:pb-12`}
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
                alt="ryan chou."
                className={`rounded-full`}
                width="80%"
                height="80%"
                layout="fixed"
                objectFit="contain"
              />
            </a>
          </Tippy>
          <h1
            className={`ml-2 inline text-2xl font-semibold text-head underline decoration-underw decoration-dotted underline-offset-2`}
          >
            Ryan Chou
          </h1>
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
          className={`text-light mt-2 block text-sm sm:text-xl md:mt-4 md:text-2xl lg:inline`}
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
          <hr className={`my-2 h-1 rounded-sm bg-head bg-opacity-40`} />
        </div>
        <div className={`text-md mt-8 block pb-12 sm:text-lg`}>
          <p className="mb-2 text-xl font-semibold text-head">
            a lil about me.
          </p>
          yo!
          <br />
          im ryan, but you probably know me as [cryan] online. im a student
          studying computer science in the bay area. i love algorithmic problem
          solving, building things, and teaching others!
          <br />
          <br />
          <p className="mb-2 text-xl font-semibold text-head">
            what am i doing right now??
          </p>
          as summer rolls around, i&apos;ll be working on some more exciting
          projects! meanwhile, i&apos;m continuing to create content and teach
          at{" "}
          <a
            target={"_blank"}
            rel="noreferrer"
            href={"https://joincpi.org"}
            className={`bg-opacity inline rounded-lg p-0.5 text-purple-800 underline duration-150 hover:cursor-pointer hover:bg-purple-500 hover:bg-opacity-20 hover:text-black hover:no-underline md:p-1`}
          >
            CPI
          </a>
          ! What I work on from day-to-day changes sporadically, so you can
          check up on my latest projects at{" "}
          <a
            target={"_blank"}
            rel="noreferrer"
            href={"https://github.com/ryanchou-dev"}
            className={`bg-opacity inline rounded-lg p-0.5 underline duration-150 hover:cursor-pointer hover:bg-[#88C0D0] hover:bg-opacity-20 hover:text-[#687fa8] hover:no-underline md:p-1`}
          >
            @ryanchou-dev
          </a>{" "}
          or look at some of my{" "}
          <Link href={`/projects`}>
            <a
              className={`bg-opacity inline rounded-lg p-0.5 underline duration-150 hover:cursor-pointer hover:bg-[#88C0D0] hover:bg-opacity-20 hover:text-[#687fa8] hover:no-underline`}
            >
              projects
            </a>
          </Link>
          .
          <p className="mt-8 mb-2 text-xl font-semibold text-head">
            what am i planning to do?
          </p>
          <p>
            i&apos;m hoping to study more machine learning, web development, and
            competitive programming. i&apos;ll routinely update on what I&apos;m
            learning{" "}
            <Link href={`/posts`}>
              <a
                className={`bg-opacity inline rounded-lg p-0.5 underline duration-150 hover:cursor-pointer hover:bg-[#88C0D0] hover:bg-opacity-20 hover:text-[#687fa8] hover:no-underline`}
              >
                on my blog
              </a>
            </Link>
            !
          </p>
          <br />
          <p className={`pl-2`}>
            thanks for stopping by. <br />
            <span className={`pl-6`}>~ ryan</span>
          </p>
        </div>

        <footer>
          &gt; made with boba tea 🧋 and &lt;3 <br />
          <span className={`text-sm`}>© Ryan Chou. All Rights Reserved.</span>
        </footer>
      </div>
    </div>
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
