import Head from "next/head";
import Image from "next/image";
import Date from "../components/Date";
import Link from "next/link";
import { motion } from "framer-motion";
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
        <meta name="keywords" content="ryan chou usaco cpi competitive-programming" />
        <title>ryan&apos;s website</title>
      </Head>
      <div
        className={`min-w-screen min-h-screen bg-lightbg bg-opacity-60 py-20 px-24 text-center`}
      >
        <motion.div
          initial={{ rotate: 180, scale: 0.5 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className={`flex shrink items-center justify-center`}
        >
          <Link href={`/things`}>
            <a
              className={`mr-3 rounded-md bg-cyan-600 bg-opacity-25 p-3 text-xl duration-300 hover:scale-105`}
            >
              /things
            </a>
          </Link>

          <Tippy content="stop touching me!">
            <a
              target={`_blank`}
              rel={"noreferrer"}
              href={`https://cloud-i3qrqzy85-hack-club-bot.vercel.app/0image.png`}
            >
              <Image
                src="/images/ryan.png"
                alt="me."
                className={`rounded-full md:block`}
                width={200}
                height={200}
              />
              <p
                className={`mt-0 w-48 text-2xl font-semibold md:mt-8 md:block md:text-2xl`}
              >
                ryan chou &gt;w&lt;
              </p>
            </a>
          </Tippy>
          <Link href={`/posts`}>
            <a
              className={`ml-3 rounded-md bg-cyan-600 bg-opacity-25 p-3 text-xl duration-300 hover:scale-105`}
            >
              /posts
            </a>
          </Link>
        </motion.div>

        <p className={`mt-4 text-xl text-light md:text-2xl`}>
          im&nbsp;
          <Typewriter
            words={[
              "a competitive programmer",
              "a professional failure",
              "a web dev",
              "a cow enthusiast",
              "an ✨ artist ✨",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            delaySpeed={4000}
          />
        </p>

        <div
          className={`mt-7 flex items-center justify-center gap-3 text-2xl md:mt-2`}
        >
          <a
            href={`https://github.com/ryanchou-dev`}
            target="_blank"
            rel={"noreferrer"}
            className={`duration-300 hover:scale-105 mr-2`}
          >
            <AiFillGithub className={`inline h-7 w-7 opacity-80`} />
          </a>

          <Tippy content="no longer updated...">
            <a
              target="_blank"
              rel={"noreferrer"}
              href={`https://medium.com/@ryan-chou`}
              className={`duration-300 hover:scale-105`}
            >
              <BsMedium className={`inline h-7 w-7 opacity-80`} />
            </a>
          </Tippy>
        </div>
        <motion.div
          initial={{ scale: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          animate={{
            x: 0,
            y: 0,
            scale: 1,
            rotate: 0,
          }}
          className={`mt-2 border-t-4 border-cyan-600 opacity-50`}
        />

        <p className={`w-7/8 mx-auto mt-12 text-center text-2xl text-light`}>
          ~about me~
        </p>
        <div
          className={`w-7/8 mx-auto mt-4 text-center text-lg text-light lg:text-xl`}
        >
          hi, im ryan, a <p className={`inline-block underline`}>useless</p>{" "}
          programmer who enjoys doing{" "}
          <p className={`inline-block underline`}>nothing</p>.
          <br />
          <br />
          sometimes, i pull myself (out of my bed) into my chair where i click
          random keys.
          <br />
          <br />
          if you want to see what these keys create, check out my&nbsp;
          <Link href={`/things`}>
            <a className={`text-green-700`}>/things</a>
          </Link>
          , or my&nbsp;
          <Link href={`https://github.com/ryanchou-dev`} passHref={true}>
            <a
              target={"_blank"}
              rel={"noreferrer"}
              className={`text-green-700 underline decoration-wavy underline-offset-4 hover:decoration-solid`}
            >
              github
            </a>
          </Link>
          .
          <br />
          <br />
          hmm. i think that&apos;s it. check out my blog posts if you want to learn
          more about me!
        </div>
        <motion.div
          initial={{ scale: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          animate={{
            x: 0,
            y: 0,
            scale: 1,
            rotate: 0,
          }}
          className={`mt-12 border-t-4 border-cyan-600 opacity-50`}
        />

        <div>
          <p className={`mt-12 block text-center text-2xl text-light`}>
            ~my posts~
          </p>
        </div>
        <div className={`mt-12 flex flex-col items-center justify-center`}>
          {post_data.map(({ slug, abstract, date, title }) => (
            <Link href={"/posts/" + slug} key={slug}>
              <div
                className={`mb-6 block w-full rounded-lg bg-gray-900 bg-opacity-10 p-4 text-lg duration-300 hover:scale-105 md:w-1/2 lg:w-1/3 lg:text-xl`}
              >
                <p className={`text-2xl`}>{title}</p>
                <div className={`text-gray-600`}>
                  <Date dateString={date} />
                </div>
                <br />
                {abstract}
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
