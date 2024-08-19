"use client";
import { motion } from "framer-motion";

type Props = {
	children: React.ReactNode;
};

export default function Layout({ children }: Props) {
	return (
		<div>
			<motion.div
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ ease: "easeInOut", duration: 0.75 }}
			>
				<div className="flex gap-3 py-5 px-10 items-center justify-between">
					<div className="flex items-center">
						<div className="">
							<a href="/2024portfolio/home" className="text-xl font-[500]">
								Kenguru
							</a>
						</div>
						<div className="flex gap-3 items-center ml-10">
							<a href="/2024portfolio/home" className="text-[1em] font-[400]">
								Home
							</a>
							<a className="text-[1em] font-[400]">Services</a>
							<a className="text-[1em] font-[400]">About Me</a>
							<a className="text-[1em] font-[400]">Contact Me</a>
						</div>
					</div>
					<button className="flex px-7 py-1 border rounded-full border-[#DACDBC]">
						<div className="montserrat font-[500]">Projects</div>
					</button>
				</div>
			</motion.div>
			<div className="px-10">{children}</div>
		</div>
	);
}
