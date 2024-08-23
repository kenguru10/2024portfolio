/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
// update the above line to remove the eslint warning
"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3, FaJs, FaReact, FaPhp, FaPython, FaSass } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { DiMysql } from "react-icons/di";
import { SiFlask } from "react-icons/si";

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
						<p className="text-4xl text-center md:text-start font-[500] my-3">Hi, I'm Ken Kong</p>
						<p className="text-xl font-[400] text-center md:text-start max-w-[100%] md:max-w-[70%] my-3 montserrat">
							People used to call me Kenguru. I am a Hong Kong Web Developer and Designer for front-end
							and back-end. Good at Python and Nodejs.
						</p>
					</div>
					<div className="flex flex-col items-center md:items-start pt-5">
						<p className="text-3xl font-[500] max-w-100 md:max-w-[10em] my-3">
							Front-end and Back-end Developer with passion in UI/UX Design
						</p>
						<div className="flex gap-3 items-center mt-3 mb-10 justify-center md:justify-start">
							<button className="rounded-full border border-[#DACDBC] px-4 py-1 bg-[#C9B09F] ">
								Send Email to Me
							</button>
							<a href="/2024portfolio/services" className="underline text-[.9em]">
								Learn More
							</a>
						</div>
						<motion.div
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ ease: "easeInOut", duration: 0.75, delay: 1.5 }}
						>
							<div className="flex flex-col gap-3 py-8 border-t border-[#DFD3C3] cursor-pointer">
								<p className="text-xl mb-5 font-[500]">Career</p>
								<div className="flex flex-col gap-7">
									<div
										className="flex min-h-[2em] w-fit py-5 px-8 bg-[#DFD3C3] gap-4 items-center rounded-[10px]"
										style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
									>
										<img
											src="https://www.polyu.edu.hk/assets/img/main-logo-1x.png"
											alt=""
											className="w-[3em] h-[3em] object-cover object-left"
										/>
										<div className="flex flex-col gap-1">
											<div className="text-[1em] font-bold">
												{" "}
												BEng(Hons) in Product Analysis and Engineering Design Programme
											</div>
											<div className="text-[.9em]">The Hong Kong Polytechnic University</div>
										</div>
										<div className="flex items-end h-100 ms-auto">
											<div className="text-[.8em]">2020 - 2025</div>
										</div>
									</div>
									<div
										className="flex min-h-[2em] w-fit py-5 px-8 bg-[#DFD3C3] gap-4 items-center rounded-[10px]"
										style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
									>
										<img
											src="https://www.carbonexchange.net/img/footer_logo.png"
											alt=""
											className="w-[3em] h-[3em] object-cover"
										/>
										<div className="flex flex-col gap-1">
											<div className="text-[1em] font-bold">Software Engineer</div>
											<div className="text-[.9em]">Carbon Exchange (Hong Kong) Ltd</div>
										</div>
										<div className="flex items-end h-100 ms-auto">
											<div className="text-[.8em]">2022 - Present</div>
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</motion.div>
			<motion.div
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ ease: "easeInOut", duration: 0.75, delay: 2.25 }}
			>
				<div className="px-10 mb-10 relative">
					<h5 className="text-xl font-[500] mb-5">Skills</h5>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
						<div className="flex flex-wrap gap-3 items-center">
							<div className="flex p-5 border-2 border-[#DFD3C3] gap-3 rounded-[.5em] items-center cursor-pointer">
								<FaHtml5 className="w-[1.5em] h-[1.5em]" />
								<div className="flex">
									<div className="font-bold">HTML</div>
								</div>
							</div>
							<div className="flex p-5 border-2 border-[#DFD3C3] gap-3 rounded-[.5em] items-center cursor-pointer">
								<FaCss3 className="w-[1.5em] h-[1.5em]" />
								<div className="flex">
									<div className="font-bold">CSS</div>
								</div>
							</div>
							<div className="flex p-5 border-2 border-[#DFD3C3] gap-3 rounded-[.5em] items-center cursor-pointer">
								<FaJs className="w-[1.5em] h-[1.5em]" />
								<div className="flex">
									<div className="font-bold">Javascript</div>
								</div>
							</div>
							<div className="flex p-5 border-2 border-[#DFD3C3] gap-3 rounded-[.5em] items-center cursor-pointer">
								<FaReact className="w-[1.5em] h-[1.5em]" />
								<div className="flex">
									<div className="font-bold">React</div>
								</div>
							</div>
							<div className="flex p-5 border-2 border-[#DFD3C3] gap-3 rounded-[.5em] items-center cursor-pointer">
								<RiNextjsFill className="w-[1.5em] h-[1.5em]" />
								<div className="flex">
									<div className="font-bold">NextJS</div>
								</div>
							</div>
							<div className="flex p-5 border-2 border-[#DFD3C3] gap-3 rounded-[.5em] items-center cursor-pointer">
								<FaPhp className="w-[1.5em] h-[1.5em]" />
								<div className="flex">
									<div className="font-bold">PHP</div>
								</div>
							</div>
							<div className="flex p-5 border-2 border-[#DFD3C3] gap-3 rounded-[.5em] items-center cursor-pointer">
								<DiMysql className="w-[1.5em] h-[1.5em]" />
								<div className="flex">
									<div className="font-bold">MySQL</div>
								</div>
							</div>
							<div className="flex p-5 border-2 border-[#DFD3C3] gap-3 rounded-[.5em] items-center cursor-pointer">
								<FaPython className="w-[1.5em] h-[1.5em]" />
								<div className="flex">
									<div className="font-bold">Python</div>
								</div>
							</div>
							<div className="flex p-5 border-2 border-[#DFD3C3] gap-3 rounded-[.5em] items-center cursor-pointer">
								<SiFlask className="w-[1.5em] h-[1.5em]" />
								<div className="flex">
									<div className="font-bold">Flask</div>
								</div>
							</div>
							<div className="flex p-5 border-2 border-[#DFD3C3] gap-3 rounded-[.5em] items-center cursor-pointer">
								<FaSass className="w-[1.5em] h-[1.5em]" />
								<div className="flex">
									<div className="font-bold">Sass</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-end">
						<div className="h-100 text-[.8em] underline">Copyright 2024 by KenKong</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
