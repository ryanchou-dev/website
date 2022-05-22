import Nav from "../../components/Nav";
import { getSlugs, getData } from "../../lib/posts";
import Date from "../../components/Date";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { BsMedium } from "react-icons/bs";
export default function post({ data }) {
  return (
    <>
      <Head>
        <base target="_blank" rel="noreferrer" />
        <meta name="title" content={"ryan's blog: " + data.title} />
        <meta name="description" content={data.abstract} />
        <title>{data.title}</title>
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
            <p className={`mt-1.5 pl-8 text-black font-normal text-lg pr-24`}>
              {data.abstract}
            </p>
          </div>
        </div>
        <div className={`mb-12 text-gray-600`}>
          <Date dateString={data.date} />
          <hr className={`my-2 bg-head h-1 bg-opacity-40 rounded-sm`} />
        </div>

        <div
          className={` prose max-w-none text-xl prose-img:rounded-lg prose-hr:h-1 prose-hr:rounded-sm prose-hr:bg-head prose-hr:opacity-40 prose-hr:my-2`}
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
