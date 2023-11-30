"use client";

import React, { useState, useEffect } from "react";

import { useRouter } from "next/navigation";

import { Paper } from "@mantine/core";

import Container from "./Container";
import LinkBox from "./LinkBox";
import { useAuth } from "@/auth/AuthContext";
import { getAccounts } from "@/services/api";

export default function AccountChoice() {
	const { login } = useAuth();
	const router = useRouter();

	const [accountsList, setAccountsList] = useState([]);

	useEffect(() => {
		async function fetchData() {
			setAccountsList(await getAccounts());
		}
		fetchData();
	}, []);

	async function hangleAccountChoice() {
		// Implement your login logic, and call the login function from the context
		console.log("account choice");
	}

	return (
		<section className="flex w-full h-full bg-primary-black">
			<Container>
				<div className="flex justify-center h-[80%] w-full">
					<Paper
						className="w-[90%] max-w-[598px] h-fit"
						radius="md"
						p="xl"
						withBorder
						// {...props}
					>
						<h1 className="my-5 mb-10 text-3xl font-semibold text-primary-white text-center">
							Escolha sua conta
						</h1>
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
					</Paper>
				</div>
			</Container>
		</section>
	);
}
