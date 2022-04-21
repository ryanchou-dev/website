import Nav from "../../components/Nav";
import { getSlugs, getData } from "../../lib/posts";
import Date from "../../components/Date";
import Head from "next/head";

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
        className={`min-w-screen min-h-screen bg-lightbg bg-opacity-60 py-12 px-28 font-sans`}
      >
        <Nav />
        <div className={`mb-12`}>
          <p className={`text-4xl font-bold`}>{data.title}</p>
          <Date dateString={data.date} />
          <div className={`mt-1 rounded-lg border-t-2 border-cyan-600`} />
        </div>

        <div
          className={`prose-a: prose max-w-prose text-xl prose-img:rounded-lg prose-hr:h-2 prose-hr:rounded-lg prose-hr:bg-cyan-600 prose-hr:opacity-25`}
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
