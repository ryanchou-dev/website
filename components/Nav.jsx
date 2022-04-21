import Link from "next/link";
import Image from "next/image";

const Nav = () => {
	return (
		<>	
			<nav className={`mb-2 w-7/8 flex items-center justify-center gap-4`}>
				<Link href={`/`}>
					<a>
						<Image
							src="/images/ryan.png"
							alt="me."
							className={`rounded-full hover:scale-105 duration-300`}
							width={95}
							height={95}
						/>
					</a>
				</Link>
				<Link href={`/things`}>
					<a className={`mt-6.5 mr-2 inline p-3 bg-cyan-600 bg-opacity-25 rounded-md hover:scale-105 duration-300`}>/things</a>
				</Link>
				<Link href={`/posts`}>
					<a className={`mt-6.5 inline p-3 bg-cyan-600 bg-opacity-25 rounded-md hover:scale-105 duration-300`}>/posts</a>
				</Link>
			</nav>
			<div className={`mb-12 border-4 border-t border-cyan-600`} />
		</>
	)
}

export default Nav;