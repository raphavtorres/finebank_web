"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo_yellow.png";
import Container from "./Container";

export default function Header() {
	const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault();
		// get the href and remove everything before the hash (#)
		const href = e.currentTarget.href;
		const targetId = href.replace(/.*\#/, "");
		// get the element by id and use scrollIntoView
		const elem = document.getElementById(targetId);
		window.scrollTo({
			top: elem?.getBoundingClientRect().top,
			behavior: "smooth",
		});
	};
	return (
		<header className="flex items-center w-full h-20 bg-primary-black absolute">
			<Container>
				<Link href="/" className="flex items-center gap-14">
					<Image src={Logo} alt="logo" className="w-32 sm:w-40 md:w-52" />
				</Link>
				<div className="flex items-center gap-5 ml-10 text-primary-white">
					<Link
						href="#account-sec"
						onClick={handleScroll}
						className="hover:text-light-yellow transition duration-300"
					>
						Conta
					</Link>
					<Link
						href="#about-sec"
						onClick={handleScroll}
						className="hover:text-light-yellow transition duration-300"
					>
						Sobre
					</Link>
					<Link
						href="/login"
						className="border border-primary-yellow border-solid py-2 px-5 rounded-md text-primary-yellow hover:border-light-yellow hover:text-light-yellow transition duration-300"
					>
						Acessar Conta
					</Link>
				</div>
			</Container>
		</header>
	);
}
