"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import PrivateRoute from "@/auth/PrivateRoute";
import { useAuth } from "@/auth/AuthContext";

import {
	USER_OBJ,
	ACCOUNT_OBJ,
	USER_TYPE,
	storeGET,
} from "@/services/constants";

import { getStatements } from "@/services/api";
import UserPicture from "@/components/UserPicture";
import SentIcon from "@/assets/statement-sent-img.png";
import ReceiveIcon from "@/assets/statement-receive-img.png";
import LogoutIcon from "@/assets/logout-icon.png";

export default function Page() {
	const { logout } = useAuth();

	const [username, setUsername] = useState("");
	const [statementData, setStatementData] = useState([]);

	useEffect(() => {
		async function fetchData() {
			setUsername(await getUsername());
			setStatementData(await getStatements(account_obj?.id));
		}
		fetchData();
	}, []);

	const account_objString = storeGET(ACCOUNT_OBJ);
	const account_obj = account_objString ? JSON.parse(account_objString) : null;

	const user_objString = storeGET(USER_OBJ);
	const user_obj = user_objString ? JSON.parse(user_objString) : null;

	function getUsername() {
		const usertype = storeGET(USER_TYPE);
		return usertype == "natural" ? user_obj?.name : user_obj?.fantasy_name;
	}

	function handleExit() {
		logout();
	}

	return (
		<PrivateRoute>
			<section className="w-full min-h-full bg-primary-black">
				<div className="flex items-center mx-auto pt-14 w-[90%] justify-between">
					<div className="flex items-center">
						<UserPicture />
						<h1 className="ml-5 text-xl text">Olá, {username}</h1>
					</div>
					<div>
						<button onClick={handleExit}>
							<Image src={LogoutIcon} alt="icon" width={25} height={25} />
						</button>
					</div>
				</div>
				<div className="w-[80%] mx-auto flex flex-col">
					<div className="flex flex-col w-full mt-14">
						<h1 className="text-xl">Extrato:</h1>
						<p className="text-primary-white text-2xl">
							R$ {account_obj?.balance}
						</p>
					</div>
					<div className="flex flex-col w-full h-full mt-14">
						<h1 className="text-xl">Transações:</h1>
						{statementData &&
							statementData.map((transaction: any, i: any) => (
								<div key={i}>
									<div>
										<div className="flex my-3">
											{transaction.transaction_action == "Sent" ? (
												<Image
													src={SentIcon}
													alt="icon"
													width={25}
													height={25}
												/>
											) : (
												<Image
													src={ReceiveIcon}
													alt="icon"
													width={25}
													height={25}
												/>
											)}
											<p className="ml-3 w-24">{transaction.source}</p>
											<p className="ml-3">R$ {transaction.amount}</p>
										</div>
									</div>
									<div className="h-[1px] w-full bg-primary-gray" />
								</div>
							))}
					</div>
				</div>
			</section>
		</PrivateRoute>
	);
}
