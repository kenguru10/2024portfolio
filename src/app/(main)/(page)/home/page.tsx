/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Page() {
	return (
		<div>
			<motion.div
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ ease: "easeInOut", duration: 0.75, delay: 1 }}
			>
				<div className="grid grid-cols-1 md:grid-cols-2">
					<div className="md:text-start sm:text-center pt-10 pb-2 px-10">
						<div className="flex justify-center md:max-w-[60%] sm:max-w-[100%] mb-10">
							<img
								src="/2024portfolio/profile.png"
								alt=""
								className="w-[10em] h-[10em] object-cover rounded-[10%]"
							/>
						</div>
						<p className="text-4xl text-center md:text-start font-[500] my-3">Hi, I'm Kenguru</p>
						<p className="text-xl font-[400] text-center md:text-start max-w-[100%] md:max-w-[70%] my-3 montserrat">
							Hong Kong Web Developer and Designer for front-end and back-end. Good at Python and Nodejs.
						</p>
					</div>
					<div className="flex flex-col items-center md:items-start pt-5">
						<p className="text-3xl font-[500] max-w-100 md:max-w-[10em] my-3">
							Front-end and Back-end Developer with passion in UI/UX Design
						</p>
						<div className="flex gap-3 items-center my-3 justify-center md:justify-start">
							<button className="rounded-full border border-[#DACDBC] px-4 py-1 bg-[#C9B09F] ">
								Send Email to Me
							</button>
							<a href="/2024portfolio/services" className="underline text-[.9em]">
								Learn More
							</a>
						</div>
					</div>
				</div>
			</motion.div>

			<motion.div
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ ease: "easeInOut", duration: 0.75, delay: 1.5 }}
			>
				<div className="grid grid-cols-1 md:grid-cols-2 px-10 py-1">
					<div></div>
					<div className="flex flex-col gap-3">
						<p className="text-xl font-[500]">Works</p>
						<div className="flex w-[75%] min-h-[2em] p-5 bg-[#DFD3C3] gap-3 rounded-[10px]">
							<div className="flex flex-col gap-1">
								<div className="text-[1em] font-bold">Software Engineer</div>
								<div className="text-[.9em]">Carbon Exchange (Hong Kong) Ltd</div>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
