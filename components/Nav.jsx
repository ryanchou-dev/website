import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <>
      <nav className={`w-7/8 mb-2 flex items-center justify-center gap-4`}>
        <Link href={`/`}>
          <a>
            <Image
              loading="eager"
              src="/images/ryan.png"
              alt="me."
              className={`rounded-full duration-300 hover:scale-105`}
              width={95}
              height={95}
            />
          </a>
        </Link>
        <Link href={`/things`}>
          <a
            className={`mt-6.5 mr-2 inline rounded-md bg-cyan-600 bg-opacity-25 p-3 duration-300 hover:scale-105`}
          >
            /things
          </a>
        </Link>
        <Link href={`/posts`}>
          <a
            className={`mt-6.5 inline rounded-md bg-cyan-600 bg-opacity-25 p-3 duration-300 hover:scale-105`}
          >
            /posts
          </a>
        </Link>
      </nav>
      <div className={`mb-12 border-4 border-t border-cyan-600`} />
    </>
  );
};

export default Nav;
