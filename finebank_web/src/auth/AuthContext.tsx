"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface JWT {
	jwt: string;
}

export interface AuthContextType {
	jwt: JWT | null;
	login: (userData: JWT) => void;
	logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
	children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [jwt, setJWT] = useState<JWT | null>(null);

	const login = (userData: JWT) => {
		// Implement your login logic here
		setJWT(userData);
	};

	const logout = () => {
		// Implement your logout logic here
		setJWT(null);
	};

	return (
		<AuthContext.Provider value={{ jwt, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = (): AuthContextType => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};
