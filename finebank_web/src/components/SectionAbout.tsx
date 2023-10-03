import Container from "./Container";
import Image from "next/image";

import ImgAbout from "@/assets/about_img.png";

export default function SectionAbout() {
	return (
		<section className="flex w-full h-screen bg-white pt-40">
			<Container>
				<div className="flex">
					<Image src={ImgAbout} alt="logo" className="w-[30rem] h-[30rem]" />
					<div className="ml-32">
						<h1 className="font-bold text-4xl mt-20 mb-16 w-[40rem]">
							Tudo o que você mais deseja e precisa, em um único app.
						</h1>
						<ul className="list-disc ml-5 mb-16 text-xl">
							<li>Empréstimos que combinam com cada momento da sua vida.</li>
							<li>Opções de investimento a partir de R$ 1,00</li>
							<li>Transações seguras e os serviços mais modernos</li>
						</ul>
						<p className="font-bold text-xl">
							Abra a sua conta e acesse os produtos do{" "}
							<span className="text-primary-yellow">Finebank</span>
						</p>
					</div>
				</div>
			</Container>
		</section>
	);
}
