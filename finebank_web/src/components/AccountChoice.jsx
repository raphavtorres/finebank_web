"use client";

import { useRouter } from "next/navigation";

import Container from "./Container";
import LinkBox from "./LinkBox";
import { useAuth } from "@/auth/AuthContext";

export default function AccountChoice() {
	const { login } = useAuth();
	const router = useRouter();

	async function hangleAccountChoice() {
		// Implement your login logic, and call the login function from the context
		console.log("account choice");
	}

	return (
		<section className="flex w-full h-full bg-primary-black">
			<Container>
				<div className="flex justify-center h-[80%] w-full">
					<h1>ESCOLHA CONTA</h1>
					<LinkBox
						fields={[
							{
								title: "Agência",
								value: "422",
							},
							{
								title: "Conta",
								value: "111111",
							},
						]}
						action={() => console.log("clicou para escolher conta")}
					/>

					{/* {accountsData.map((item) => (
					<LinkBox
						key={item.number}
						fields={[
							{
								title: "Agência",
								value: item.agency,
							},
							{
								title: "Conta",
								value: item.number,
							},
						]}
						action={() => handleEnterAccount(item)}
					/>
				))} */}
				</div>
			</Container>
		</section>
	);
}
