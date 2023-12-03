"use client";

import PrivateRoute from "@/auth/PrivateRoute";
import Container from "@/components/Container";

import { ACCOUNT_OBJ, storeGET } from "@/services/constants";
import UserPicture from "@/components/UserPicture";

export default function Page() {
	const username = "Nome Usuário";
	const account_objString = storeGET(ACCOUNT_OBJ);
	const account_obj = account_objString ? JSON.parse(account_objString) : null;

	return (
		<PrivateRoute>
			<section className="flex w-full h-full bg-primary-black mt-10">
				<Container>
					<div className="flex justify-center h-[80%] w-full">
						<UserPicture />
						<h1>Olá, {username}</h1>
					</div>
					<div className="flex justify-center h-[80%] w-full">
						<h1>Extrato</h1>
						<p>R$ {account_obj?.balance}</p>
					</div>
					<div className="flex justify-center h-[80%] w-full">
						<h1>Transações</h1>
						<p>AQUI VIRÃO AS TRANSAÇÕES</p>
					</div>
				</Container>
			</section>
		</PrivateRoute>
	);
}
