import Nav from "../../components/Nav";
import { getSlugs, getData } from "../../lib/posts";
import Date from "../../components/Date";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { BsMedium } from "react-icons/bs";
import Giscus from "@giscus/react";
import Snowfall from "react-snowfall";

export default function post({ data }) {
  return (
    <>
      <Head>
        <base target="_blank" rel="noreferrer" />
        <meta name="title" content={"ryan's blog: " + data.title} />
        <meta name="description" content={data.abstract} />
        <title>{data.title}</title>
      </Head>
      <div>
        <Link href={"/"}>
          <a className={`float-left inline`}>
            <Image
              loading="eager"
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
        <div
          className={`text-md inline font-semibold text-head sm:text-xl md:text-2xl`}
        >
          <p
            className={`inline underline decoration-dotted underline-offset-2`}
          >
            {data.title}
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
            className={`mt-1.5 pl-12 pr-24 text-sm font-normal text-black md:text-lg`}
          >
            {data.abstract}
          </p>
        </div>
      </div>
      <div className={`mb-2 text-gray-600`}>
        <Date dateString={data.date} />
        <div className={`mt-8 block text-xl text-black`}>
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
      <div className="mb-4 space-x-2 text-lg xl:text-xl">
        {data.tags.map((tag) => (
          <Link href={"/tags/" + tag} key={tag}>
            <a
              className={`inline rounded-lg border-2 border-blue-300 bg-blue-300 bg-opacity-20 p-1 font-serif `}
            >
              #{tag}
            </a>
          </Link>
        ))}
      </div>

      <div className={`min-h-`}>
        {console.log(data.contentHTML)}
        <div
          className={`prose max-w-none text-xl text-black  prose-img:rounded-lg prose-hr:my-2 prose-hr:h-1 prose-hr:rounded-sm prose-hr:bg-head prose-hr:opacity-40`}
          dangerouslySetInnerHTML={{ __html: data.contentHTML }}
        />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = await getData(params.slug);
  return {
    props: {
      data,
    },
  };
}
