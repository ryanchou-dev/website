import Head from "next/head";
import Image from "next/image";

import Link from "next/link";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { getPosts } from "../../lib/posts";
import { AiFillGithub } from "react-icons/ai";
import { BsMedium } from "react-icons/bs";
import { Typewriter } from "react-simple-typewriter";
import React from "react";

export default function home({ tags, post_data }) {
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
          content="ryan chou usaco cs computer science competitive-programming"
        />
        <title>Ryan&apos;s Personal Website</title>
      </Head>

      <div className={`mb-12`}>
        <Link href={"/"}>
          <a className={`float-left inline`}>
            <Image
              loading="eager"
              src="/images/ryan.png"
              alt="me."
              className={`rounded-full saturate-[100%]`}
              width="80%"
              height="80%"
              layout="fixed"
              objectFit="contain"
            />
          </a>
        </Link>
        <div className={`inline text-xl font-semibold text-head sm:text-4xl`}>
          <p className={`underline decoration-dotted underline-offset-2`}>
            Tags
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
          <p
            className={`mt-1.5 pl-8 pr-24 text-sm font-normal text-black sm:text-xl md:text-2xl`}
          >
            omg im organized
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

      <div className={`mt-8 block space-y-2 pb-12 text-lg sm:text-xl`}>
        {tags.map((tag) => (
          <Link
            className="r mb-4 w-full space-x-2 p-2 text-lg xl:text-xl"
            key={tag}
            href={"/tags/" + tag}
          >
            <p className="rounded-lg border-2 border-blue-300 bg-blue-300 bg-opacity-20 p-1 font-serif hover:cursor-pointer ">
              #{tag} (
              {post_data.filter((post) => post.tags.includes(tag)).length})
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const [tags, post_data] = getPosts();

  return {
    props: {
      tags,
      post_data,
    },
  };
}
