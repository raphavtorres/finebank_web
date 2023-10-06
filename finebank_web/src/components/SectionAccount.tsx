import Container from "./Container";
import AccountBlock from "./AccountBlock";

import CellPJAccount from "@/assets/cell_pjaccount.png";
import CellDigitalAccount from "@/assets/cell_digitalaccount.png";

export default function SectionAccount() {
	return (
		<section
			id="account-sec"
			className="flex justify-center  min-w-full min-h-screen bg-white pt-40"
		>
			<div className="justify-center">
				<Container>
					<div className="flex justify-center flex-wrap">
						<AccountBlock
							image={CellDigitalAccount}
							msg="Para todas as idades.Mude para o Finebank e faça tudo em um só lugar"
						/>
						<AccountBlock
							image={CellPJAccount}
							msg="A agilidade e simplicidade que o seu negócio precisa para continuar crescendo"
						/>
					</div>
				</Container>
			</div>
		</section>
	);
}
