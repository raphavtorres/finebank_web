"use client";

import React, { useState, useEffect } from "react";

import { useRouter } from "next/navigation";

import { Paper } from "@mantine/core";

import Container from "./Container";
import LinkBox from "./LinkBox";
import { getAccounts } from "@/services/api";
import { ACCOUNT_OBJ, storeGET, storeSET } from "@/services/constants";

interface Account {
	agency: string;
	number: string;
}

export default function AccountChoice() {
	const router = useRouter();

	const [accountsList, setAccountsList] = useState<Account[]>([]);

	useEffect(() => {
		async function fetchData() {
			const accounts = await getAccounts();
			setAccountsList(accounts);
		}
		fetchData();
	}, []);

	async function handleAccountChoice(item: Account) {
		const accountDataAsString = JSON.stringify(item);
		storeSET(ACCOUNT_OBJ, accountDataAsString);
		router.push("/content");
	}

	return (
		<section className="flex w-full h-full bg-primary-black">
			<Container>
				<div className="flex justify-center items-center h-[80%] w-full">
					<Paper
						className="w-[90%] max-w-[598px] h-fit"
						radius="md"
						p="xl"
						withBorder
					>
						<h1 className="my-5 mb-10 text-3xl font-semibold text-primary-white text-center">
							Escolha sua conta
						</h1>

						{accountsList.map((item) => (
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
								action={() => handleAccountChoice(item)}
							/>
						))}
					</Paper>
				</div>
			</Container>
		</section>
	);
}
