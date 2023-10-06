import Image from "next/image";
import Container from "./Container";
import WhiteLogo from "@/assets/logo_white.png";

export default function Footer() {
	return (
		<footer className="flex items-center h-32 bg-primary-black">
			<Container>
				<div className="flex justify-between items-center">
					<Image src={WhiteLogo} alt="logo" className="h-5 md:h-10 w-auto" />
					<p className="text-xs md:text-sm text-light-gray w-[60%]">
						© 2023 Finebank S.A - Instituição de Pagamento. 1322.043/0001-42
						Rua Piton Teixeira, 157 - São Pedro, SP - 7714721-000
					</p>
				</div>
			</Container>
		</footer>
	);
}
