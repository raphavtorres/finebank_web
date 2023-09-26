import Image from "next/image";
import Container from "./Container";

import PhonePanel from "@/assets/cell_phone_panel.png";

export default function SectionPanel() {
	return (
		<section className="flex w-full h-screen bg-primary-black pt-40">
			<Container>
				<div className="flex-1 first-letter:max-w-2xl">
					<h1 className="text-primary-white text-7xl font-bold mb-12 pt-16">
						Sua Flexibilidade, Nossa Excelência
					</h1>
					<p className="text-light-gray text-xl max-w-2xl">
						Controle tudo diretamente e facilmente com o Finebank. Escolha seu
						limite de pagamento, envie dinheiro para amigos, pague seus
						funcionários mensalmente. Tudo em um só lugar.
					</p>
					<div>
						<button>Download</button>
						<button>Saiba mais</button>
					</div>
				</div>
				<div>
					<Image src={PhonePanel} alt="logo" className="max-h-[800px]" />
				</div>
			</Container>
		</section>
	);
}
