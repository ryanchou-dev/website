import { getPosts } from "../lib/posts";
import Date from "../components/Date";
import Link from "next/link";
import Head from "next/head";
import Tippy from "@tippyjs/react";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { BsMedium } from "react-icons/bs";

export default function posts({ post_data }) {
  return (
    <>
      <Head>
        <meta name="title" content="ryan's blog" />
        <meta name="description" content="ryan's disgusting writing" />
        <title>Ryan Chou</title>
      </Head>
      <div
        className={`min-w-screen min-h-screen bg-lightbg bg-opacity-60 px-12 py-12 lg:py-16 lg:px-52 xl:px-96`}
      >
        <div>
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
              Posts
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
            <p className={`mt-1.5 pl-8 text-black font-normal text-lg pr-24`}>
              things that im currently learning/excited for!
            </p>
          </div>
        </div>

        <div className={`mt-12`}>
          {post_data.map(({ slug, abstract, date, title }) => (
            <Link href={"/posts/" + slug} key={slug}>
              <div className={`cursor-pointer`}>
                <hr className={`my-2 bg-head h-1 bg-opacity-40 rounded-sm`} />
                <div className={`ml-4`}>
                  <p className={`text-2xl`}>{title}</p>
                  <p className={`text-gray-600`}>
                    <Date dateString={date} />
                  </p>
                  <p className={`mt-2`}>
                    {abstract}
                  </p>
                </div>
                <hr className={`my-2 bg-head h-1 bg-opacity-40 rounded-sm`} />
              </div>
            </Link>
          ))}
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
