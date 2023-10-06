import Image from "next/image";
import Container from "./Container";

import PhonePanel from "@/assets/cell_phone_panel.png";

export default function SectionPanel() {
	return (
		<section className="flex w-full h-screen bg-primary-black pt-40">
			<Container>
				<div className="flex-1 first-letter:max-w-2xl">
					<h1 className="text-primary-white text-6xl md:text-7xl font-bold mb-12 pt-16 max-w-2xl">
						Sua Flexibilidade, Nossa Excelência
					</h1>
					<p className="text-light-gray text-lg max-w-2xl">
						Controle tudo diretamente e facilmente com o Finebank. Escolha seu
						limite de pagamento, envie dinheiro para amigos, pague seus
						funcionários mensalmente. Tudo em um só lugar.
					</p>
					<div className="mt-20">
						<button className="w-32 h-12 text-base md:w-40 md:h-14 md:text-lg font-extrabold text-primary-black bg-light-yellow rounded-lg mr-10 hover:bg-primary-yellow transition duration-300">
							Download
						</button>
						<button className="w-32 h-12 text-base md:w-44 md:h-14 md:text-lg font-medium text-primary-yellow bg-primary-gray rounded-lg hover:bg-[#2B3137] hover:text-light-yellow transition duration-300">
							Acessar Conta
						</button>
					</div>
				</div>
				<div>
					<Image
						src={PhonePanel}
						alt="logo"
						className="hidden lg:block max-h-[800px]"
					/>
				</div>
			</Container>
		</section>
	);
}
