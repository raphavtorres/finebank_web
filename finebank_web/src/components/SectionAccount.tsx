import Image from "next/image";
import Container from "./Container";

import CellPJAccount from "@/assets/cell_pjaccount.png";
import CellDigitalAccount from "@/assets/cell_digitalaccount.png";

export default function SectionAccount() {
	return (
		<section className="flex w-full h-screen bg-white pt-40">
			<Container>
				<div>
					<div className="w-96 h-96 p-5 bg-primary-white rounded-3xl text-center">
						<h1 className="font-bold text-primary-black text-2xl">
							Conta Digital
						</h1>
						<p>
							Para todas as idades.Mude para o Finebank e faça tudo em um só
							lugar
						</p>
						<Image
							src={CellDigitalAccount}
							alt="logo"
							className="max-h-72 w-auto m"
						/>
					</div>
				</div>
			</Container>
		</section>
	);
}
