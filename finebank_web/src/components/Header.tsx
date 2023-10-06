import Image from "next/image";
import Logo from "@/assets/logo_yellow.png";
import Container from "./Container";

export default function Header() {
	return (
		<header className="flex items-center w-full h-20 bg-primary-black absolute">
			<Container>
				<div className="flex items-center gap-14">
					<Image src={Logo} alt="logo" className="w-32 sm:w-40 md:w-52" />
				</div>
				<div className="flex items-center gap-5 mr-10 text-primary-white">
					<p>Conta</p>
					<p>Sobre</p>
					<p className="border border-primary-yellow border-solid py-2 px-5 rounded-md text-primary-yellow hover:border-light-yellow hover:text-light-yellow transition duration-300">
						Download
					</p>
				</div>
			</Container>
		</header>
	);
}
