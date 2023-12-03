"use client";
import { useAuth, AuthContextType } from "@/auth/AuthContext";

import Login from "@/components/Login";
import AccountChoice from "@/components/AccountChoice";
import Header from "@/components/Header";

export default function Page() {
	const { jwt } = useAuth() as AuthContextType;

	return (
		<>
			<Header />
			{jwt ? <AccountChoice /> : <Login />}
		</>
	);
}
