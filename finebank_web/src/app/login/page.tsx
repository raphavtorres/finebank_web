"use client";
import { useAuth, AuthContextType } from "@/auth/AuthContext";

import Login from "@/components/Login";
import AccountChoice from "@/components/AccountChoice";

export default function Page() {
	const { jwt } = useAuth() as AuthContextType;

	return <AccountChoice />;
	// return jwt ? <AccountChoice /> : <Login />;
}
