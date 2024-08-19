/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Page() {
	return (
		<motion.div
			initial={{ y: 20, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ ease: "easeInOut", duration: 0.75, delay: 1 }}
		>
			<div className="grid grid-cols-1 md:grid-cols-2">
				<div className="text-start py-10 px-10">
					<img src="" alt="" />
					<p className="text-4xl font-[500] my-3">Hi, I'm Kenguru</p>
					<p className="text-xl font-[400] max-w-[70%] my-3 montserrat">
						Hong Kong Web Developer and Designer for front-end and back-end. Good at Python and Nodejs.
					</p>
				</div>
				<div className="flex flex-col items-start">
					<p className="text-3xl font-[500] max-w-[10em] my-3">
						Front-end and Back-end Developer with passion in UI/UX Design
					</p>
					<div className="flex gap-3">
						<button className="rounded-full border border-[#DACDBC] px-4 py-1 bg-[#C9B09F] ">
							Send Email to Me
						</button>
						<a href="/2024portfolio/services">Learn More</a>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
