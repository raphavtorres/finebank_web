import Image from "next/image";
import Logo from "@/assets/logo_yellow.png";
import Container from "./Container";

export default function Header() {
	return (
		<header className="flex items-center w-full h-20 bg-primary-black absolute">
			<Container>
				<div className="flex items-center gap-14">
					<Image src={Logo} alt="logo" className="w-52" />
				</div>
				<div className="flex items-center gap-5 mr-10 text-primary-white">
					<p>Conta</p>
					<p>Sobre</p>
					<p>Download</p>
				</div>
			</Container>
		</header>
	);
}
