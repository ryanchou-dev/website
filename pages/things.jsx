import Nav from "../components/Nav";
import Image from "next/image";
import { motion } from "framer-motion";
import { projdata } from "../components/things/projdata";
import { FiLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import Head from "next/head";
export default function things() {
  const container = {
    hidden: { opacity: 1, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
      <Head>
        <meta name="title" content="ryan's things" />
        <meta name="description" content="a list of ryan's failures" />
        <title>ryan&apos;s things</title>
      </Head>
      <div
        className={`min-w-screen min-h-screen bg-lightbg bg-opacity-90 py-12 px-16 lg:px-48`}
      >
        <Nav />

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className={`mt-6 flex-col space-y-12 xl:px-32 2xl:px-64`}
        >
          <p className={`text-3xl underline`}>~my things~</p>

          {projdata.map((projdata) => (
            <div key={projdata.name} className="group relative">
              <Image
                src={projdata.imageSrc}
                alt={projdata.imageAlt}
                width={800}
                height={400}
                objectFit="contain"
                objectPosition="top left"
                className={`mx-auto rounded-lg`}
              />
              <br />

              <p className={`mt-2 inline-block text-xl`}>
                {projdata.name}
                {projdata.site ? (
                  <a
                    target={"_blank"}
                    rel={"noreferrer"}
                    href={projdata.site}
                    className={`ml-3 -mb-3 mr-3 inline-block rounded-lg bg-blue-400 bg-opacity-30 p-1.5 duration-300 hover:scale-105`}
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
                    className={`ml-2 -mb-3 inline-block rounded-lg bg-blue-400 bg-opacity-30 p-1 duration-300 hover:scale-105`}
                  >
                    <AiFillGithub color="#6b6b6b" size={29} />
                  </a>
                ) : (
                  <></>
                )}
              </p>
              <p className={`text-lg font-semibold text-light`}>
                {projdata.description}
              </p>
              <div className={`mt-4 mb-2 border-4 border-t border-slate-400`} />
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
