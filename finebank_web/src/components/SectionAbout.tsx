import Container from "./Container";
import Image from "next/image";

import ImgAbout from "@/assets/about_img.png";

export default function SectionAbout() {
	return (
		<section id="about-sec" className="flex w-full h-screen bg-white pt-40">
			<Container>
				<div className="flex md:flex-nowrap">
					<Image
						src={ImgAbout}
						alt="logo"
						className="mr-[6%] hidden md:block w-[20rem] h-[20rem] lg:w-[30rem] lg:h-[30rem]"
					/>
					<div className="">
						<h1 className="font-bold text-4xl mt-[5%] mb-16 max-w-full">
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
