import { getPosts } from "../lib/posts";
import Nav from "../components/Nav";
import Date from "../components/Date";
import Link from "next/link";
import { motion } from "framer-motion";
import Head from "next/head";
export default function posts({ post_data }) {
  return (
    <>
      <Head>
        <meta name="title" content="ryan's blog" />
        <meta name="description" content="ryan's disgusting writing" />
        <title>ryan&apos;s blog</title>
      </Head>
      <div
        className={`min-w-screen min-h-screen bg-lightbg bg-opacity-60 py-12 px-16 lg:px-48`}
      >
        <Nav />

        <motion.div
          initial={{
            x: -100,
            opacity: 0.2,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.4,
          }}
          className={`xl:px-32 2xl:px-64`}
        >
          <p className={`mb-6 text-3xl underline`}>~my posts~</p>
          {post_data.map(({ slug, abstract, date, title }) => (
            <Link href={"/posts/" + slug} key={slug}>
              <div
                className={`mb-6 rounded-lg bg-gray-900 bg-opacity-10 p-4 text-xl duration-300 hover:scale-105`}
              >
                <p className={`text-2xl`}>{title}</p>
                <p className={`text-gray-600`}>
                  <Date dateString={date} />
                </p>
                <br />
                {abstract}
              </div>
            </Link>
          ))}
        </motion.div>
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
