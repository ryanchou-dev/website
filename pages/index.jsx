import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js + TailwindCSS Starter</title>
        <meta
          name="description"
          content="A Next.js + TailwindCSS starter"
        />
      </Head>
      <main className={"flex items-center justify-center w-screen h-screen"}>
        <h1 className={"text-4xl font-bold text-indigo-800 hover:italic"}>
          A Next.js + TailwindCSS Starter
        </h1>
      </main>
    </div>
  );
}
