import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisScroll from "@/components/LenisScroll";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "BEEJX",
	description: "India's Smart Farming & Farmland Leasing Platform.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<LenisScroll />
				{children}
			</body>
		</html>
	);
}
