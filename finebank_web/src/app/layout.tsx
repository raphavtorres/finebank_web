import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@mantine/core/styles.css";

import { MantineProvider, ColorSchemeScript } from "@mantine/core";

import { AuthProvider } from "@/auth/AuthContext";

import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({
	subsets: ["latin"],
	weight: ["400", "700"],
});

export const metadata: Metadata = {
	title: "Finebank",
	description: "Raphael Torres - Project",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				<AuthProvider>
					<MantineProvider defaultColorScheme="dark">
						{children}
					</MantineProvider>
				</AuthProvider>
				<Footer />
			</body>
		</html>
	);
}
