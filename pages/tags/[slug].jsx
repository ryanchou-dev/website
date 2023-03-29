import { getPosts, getTags, getData } from "../../lib/posts";
import Date from "../../components/Date";
import Link from "next/link";
import Head from "next/head";
import Tippy from "@tippyjs/react";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { BsMedium } from "react-icons/bs";
import Snowfall from "react-snowfall";
import { useState } from "react";

export default function tagged({ tag, post_data }) {
  return (
    <>
      <Head>
        <meta name="title" content="ryan's blog" />
        <meta name="description" content="ryan's disgusting writing" />
        <title>Ryan Chou</title>
      </Head>
      <div>
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
            {tag}
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
            All blog posts tagged with &quot;{tag}&quot;
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

      <div className={`mt-4 space-x-4 text-lg sm:space-x-2 sm:text-xl`}>
        <div className={`mt-4`}>
          {post_data.map(({ slug, abstract, date, title, tags }) => (
            <Link href={"/posts/" + slug} key={slug}>
              <div className={`cursor-pointer`}>
                <div className={`ml-4`}>
                  <p className={`text-3xl font-semibold text-[#000000]`}>
                    {title}
                  </p>
                  <p className={`py-1 text-gray-600`}>
                    <Date dateString={date} /> |{" "}
                    <div className="ml-2 inline space-x-2">
                      {tags.map((tag) => (
                        <Link href={"/tags/" + tag} key={tag}>
                          <a
                            className={`inline rounded-lg border-2 border-blue-300 bg-blue-300 bg-opacity-20 p-1 `}
                          >
                            #{tag}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </p>
                  <p className={`mt-2`}>{abstract}</p>
                </div>
                <hr className={`my-2 h-1 rounded-sm bg-head bg-opacity-40`} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getTags();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const [_, post_data] = getPosts();

  return {
    props: {
      tag: params.slug,
      post_data: post_data.filter((post) => post.tags.includes(params.slug)),
    },
  };
}
