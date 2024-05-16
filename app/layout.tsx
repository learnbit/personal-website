import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import styles from "./page.module.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Wilson Balderrama",
	description: "Wilson Balderrama's personal website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={clsx(inter.className)}>{children}</body>
		</html>
	);
}
