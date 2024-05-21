import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { GoogleAnalytics } from "@next/third-parties/google";

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
			<GoogleAnalytics gaId="G-TP1N6QL225" />
		</html>
	);
}
