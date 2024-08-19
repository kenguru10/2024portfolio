import type { Metadata } from "next";
import { Noto_Serif } from "next/font/google";
import "./globals.css";

const noto = Noto_Serif({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Kenguru",
	description: "",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${noto.className} bg-[#F8EDE3] bg-no-repeat bg-none`}>{children}</body>
		</html>
	);
}
