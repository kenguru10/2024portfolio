/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
// update the above line to remove the eslint warning
"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3, FaJs, FaReact, FaPhp, FaPython, FaSass, FaWhatsapp } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { DiMysql } from "react-icons/di";
import { SiFlask } from "react-icons/si";
import { Modal, ModalBody, ModalProvider, ModalTrigger, ModalContent } from "@/app/components/ui/animated-modal";
import { useForm } from "react-hook-form";
import { Toast } from "@/app/components/ui/toast";
import axios from "axios";
import Badge from "@/app/components/ui/badge";

export default function Page() {
    const { register, handleSubmit } = useForm();
    const [toast, setToast] = useState({
        open: false,
        message: "",
        type: "",
    });
    const [isSendingEmail, setIsSendingEmail] = useState(false);

    // set the navbar link active
    useEffect(() => {
        const items = document.querySelectorAll("#nav-bar-items a");
        items[0].classList.add("underline");
    }, []);

    const onSubmitMessage = async (data: any) => {
        setIsSendingEmail(true);
        axios.post(`${process.env.HOST}/devcollab/contact-me`, data).then((res) => {
            if (res.status === 200) {
                // show success alert
                setToast({
                    open: true,
                    message: "Thank you for contacting me! I will reply you as soon as possible.",
                    type: "default",
                });
                setIsSendingEmail(false);
            } else {
                setToast({
                    open: true,
                    message: "I am currently not availiable to respond to you. Please try again later.",
                    type: "warning",
                });
                setIsSendingEmail(false);
            }
        });
    };

    useEffect(() => {
        if (toast.open) {
            setTimeout(() => {
                setToast({ open: false, message: "", type: "" });
            }, 10000);
        }
    }, [toast]);

    return (
        <div className="relative px-4 sm:px-6 lg:px-8">
            {toast.open && <Toast message={toast.message} type={toast.type as "success" | "error" | "warning"} />}
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: "easeInOut", duration: 0.75, delay: 1 }}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="md:text-start text-center pt-6 sm:pt-10">
                        <div className="flex justify-center lg:justify-start lg:max-w-[60%] mb-8">
                            <img src="/2024portfolio/profile.png" alt="" className="w-[8em] sm:w-[10em] h-[8em] sm:h-[10em] object-cover rounded-[10%]" />
                        </div>
                        <p className="text-2xl sm:text-4xl text-center lg:text-start font-[500] my-3">Hi, I'm Ken Kong</p>
                        <p className="text-lg sm:text-xl font-[400] text-center lg:text-start max-w-[100%] lg:max-w-[70%] my-3 montserrat">
                            People used to call me Kenguru. I am a Hong Kong Web Developer and Designer for front-end and back-end. Good at Python and Nodejs.
                        </p>
                        <div className="relative mt-8 sm:mt-10">
                            <h5 className="text-lg sm:text-xl font-[500] mb-5">Skills</h5>
                            <div className="items-center inline-flex flex-nowrap gap-2 sm:gap-3 w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                                <div className="flex p-3 sm:p-5 border-2 border-[#DFD3C3] gap-2 sm:gap-3 rounded-[.5em] items-center">
                                    <FaHtml5 className="w-[1.2em] sm:w-[1.5em] h-[1.2em] sm:h-[1.5em]" />
                                    <div className="text-sm sm:text-base font-bold">HTML</div>
                                </div>
                                <div className="flex p-3 sm:p-5 border-2 border-[#DFD3C3] gap-2 sm:gap-3 rounded-[.5em] items-center">
                                    <FaCss3 className="w-[1.2em] sm:w-[1.5em] h-[1.2em] sm:h-[1.5em]" />
                                    <div className="text-sm sm:text-base font-bold">CSS</div>
                                </div>
                                <div className="flex p-3 sm:p-5 border-2 border-[#DFD3C3] gap-2 sm:gap-3 rounded-[.5em] items-center">
                                    <FaJs className="w-[1.2em] sm:w-[1.5em] h-[1.2em] sm:h-[1.5em]" />
                                    <div className="text-sm sm:text-base font-bold">Javascript</div>
                                </div>
                                <div className="flex p-3 sm:p-5 border-2 border-[#DFD3C3] gap-2 sm:gap-3 rounded-[.5em] items-center">
                                    <FaReact className="w-[1.2em] sm:w-[1.5em] h-[1.2em] sm:h-[1.5em]" />
                                    <div className="text-sm sm:text-base font-bold">React</div>
                                </div>
                                <div className="flex p-3 sm:p-5 border-2 border-[#DFD3C3] gap-2 sm:gap-3 rounded-[.5em] items-center">
                                    <RiNextjsFill className="w-[1.2em] sm:w-[1.5em] h-[1.2em] sm:h-[1.5em]" />
                                    <div className="text-sm sm:text-base font-bold">NextJS</div>
                                </div>
                                <div className="flex p-3 sm:p-5 border-2 border-[#DFD3C3] gap-2 sm:gap-3 rounded-[.5em] items-center">
                                    <FaPhp className="w-[1.2em] sm:w-[1.5em] h-[1.2em] sm:h-[1.5em]" />
                                    <div className="text-sm sm:text-base font-bold">PHP</div>
                                </div>
                                <div className="flex p-3 sm:p-5 border-2 border-[#DFD3C3] gap-2 sm:gap-3 rounded-[.5em] items-center">
                                    <DiMysql className="w-[1.2em] sm:w-[1.5em] h-[1.2em] sm:h-[1.5em]" />
                                    <div className="text-sm sm:text-base font-bold">MySQL</div>
                                </div>
                                <div className="flex p-3 sm:p-5 border-2 border-[#DFD3C3] gap-2 sm:gap-3 rounded-[.5em] items-center">
                                    <FaPython className="w-[1.2em] sm:w-[1.5em] h-[1.2em] sm:h-[1.5em]" />
                                    <div className="text-sm sm:text-base font-bold">Python</div>
                                </div>
                                <div className="flex p-3 sm:p-5 border-2 border-[#DFD3C3] gap-2 sm:gap-3 rounded-[.5em] items-center">
                                    <SiFlask className="w-[1.2em] sm:w-[1.5em] h-[1.2em] sm:h-[1.5em]" />
                                    <div className="text-sm sm:text-base font-bold">Flask</div>
                                </div>
                                <div className="flex p-3 sm:p-5 border-2 border-[#DFD3C3] gap-2 sm:gap-3 rounded-[.5em] items-center">
                                    <FaSass className="w-[1.2em] sm:w-[1.5em] h-[1.2em] sm:h-[1.5em]" />
                                    <div className="text-sm sm:text-base font-bold">Sass</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center lg:items-start pt-8 sm:pt-10">
                        <p className="text-2xl sm:text-3xl font-[500] max-w-100 lg:max-w-[10em] my-3 text-center lg:text-start">
                            Front-end and Back-end Developer with passion in UI/UX Design
                        </p>
                        <div className="flex flex-wrap gap-3 items-center mt-3 mb-10 justify-center lg:justify-start">
                            <Modal>
                                <ModalTrigger className="rounded-full border border-[#DACDBC] px-4 py-1 bg-[#C9B09F] text-sm sm:text-base">
                                    Send Email to Me
                                </ModalTrigger>
                                <ModalBody>
                                    <ModalContent>
                                        <div className="flex flex-col items-center px-3">
                                            <h5 className="text-xl font-[500]">Welcome to send email to me!</h5>
                                            <div className="mt-5 self-start w-full">
                                                <form onSubmit={handleSubmit(onSubmitMessage)} className="">
                                                    <div className="flex flex-col items-start w-full">
                                                        <div className="mt-2 w-50">
                                                            <input
                                                                type="text"
                                                                {...register("name")}
                                                                placeholder="Name"
                                                                autoComplete="off"
                                                                required
                                                                className="bg-transparent rounded-md px-4 py-1 w-full text-black placeholder:text-black border border-black border-2 outline-none"
                                                            />
                                                        </div>
                                                        <div className="mt-2 w-full">
                                                            <input
                                                                {...register("email")}
                                                                type="email"
                                                                required
                                                                autoComplete="off"
                                                                placeholder="Email"
                                                                className="bg-transparent rounded-md px-4 py-1 w-full text-black placeholder:text-black border border-black border-2 outline-none"
                                                            />
                                                        </div>
                                                        <div className="mt-2 w-full">
                                                            <textarea
                                                                {...register("message")}
                                                                placeholder="Message"
                                                                rows={5}
                                                                autoComplete="off"
                                                                required
                                                                className="bg-transparent rounded-md px-4 py-1 w-full text-black placeholder:text-black border border-black border-2 outline-none"
                                                            />
                                                        </div>
                                                        <div className="flex flex-1 justify-end w-full pt-3">
                                                            {!isSendingEmail ? (
                                                                <button className="underline cursor-pointer" type="submit">
                                                                    Submit
                                                                </button>
                                                            ) : (
                                                                <button className="underline">Sending...</button>
                                                            )}
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </ModalContent>
                                </ModalBody>
                            </Modal>

                            <a href="/2024portfolio/services" className="underline text-[.8em] sm:text-[.9em] flex gap-1 items-center">
                                <FaWhatsapp className="text-[1.3em] sm:text-[1.5em]" />
                                WhatsApp Me
                            </a>
                        </div>
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                ease: "easeInOut",
                                duration: 0.75,
                                delay: 1.5,
                            }}
                        >
                            <div className="flex flex-col gap-3 py-8 border-t border-[#DFD3C3]">
                                <p className="text-xl mb-5 font-[500]">Career</p>
                                <div className="flex flex-col gap-7">
                                    <motion.div
                                        whileHover={{ 
                                            scale: 1.02,
                                            backgroundColor: "#F3EDE7"
                                        }}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5 }}
                                        className="flex flex-wrap min-h-[2em] w-full py-6 px-4 sm:px-8 bg-[#F9F6F3] gap-4 sm:gap-6 items-start sm:items-center rounded-2xl cursor-pointer shadow-sm hover:shadow-md relative overflow-hidden group"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:translate-x-full duration-1000 transition-transform"></div>
                                        <img 
                                            src="https://www.polyu.edu.hk/assets/img/main-logo-1x.png" 
                                            alt="" 
                                            className="w-[3em] h-[3em] sm:w-[4em] sm:h-[4em] object-cover object-left rounded-xl transition-transform duration-300 group-hover:scale-110" 
                                        />
                                        <div className="flex flex-col gap-2 flex-1">
                                            <div className="text-[1em] sm:text-[1.1em] font-bold montserrat">
                                                BEng(Hons) in Product Analysis and Engineering Design Programme
                                            </div>
                                            <div className="text-[.8em] sm:text-[.9em] text-gray-600 flex flex-wrap items-center gap-2">
                                                <span>The Hong Kong Polytechnic University</span>
                                                <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                                                <span className="text-[.9em] text-gray-500">2020 - 2025</span>
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ 
                                            scale: 1.02,
                                            backgroundColor: "#F3EDE7"
                                        }}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        className="flex flex-wrap min-h-[2em] w-full py-6 px-4 sm:px-8 bg-[#F9F6F3] gap-4 sm:gap-6 items-start sm:items-center rounded-2xl cursor-pointer shadow-sm hover:shadow-md relative overflow-hidden group"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:translate-x-full duration-1000 transition-transform"></div>
                                        <img 
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAh1BMVEUKCiMAABgAAA0JCSMAAA9XV2Obm6IAAB0AABRGRlP///+wsLcXFyo7O00AAAAnJzempqwEBCHr6+5zc3wAABHCwsfa2t47O0f09PZRUV5cXGgAABeBgYrT09cAABO2trwAABqXl58AAAUAACAVFSphYWlbW2E1NUKPj5cfHzLMzNBoaHQsLD//65ZnAAABT0lEQVR4AcRQBYKDQAwMTtM2FN/i7v9/32XZcvKCGyQycfgvaLrx12Ho2qWalq0pn3NF25apNPeGd/3kHk9SLv2ON1cqjocvOsv6jyCMVAl6oeew1OJE8+EMSwW+VQNfS2LNAC1DK/8UKxDLSs2WW5hpQHVCoGo1CaKwGmVRUhNUov2QXYGMQv+QrXDBE6ELEv0gEAMsSNV1Q+FBKsZGDXhHjAucCjjZZhQpzGLUzsiMG3qhuOOiS1sbxQyrKmvkG+JCC3dNwFdlVzBF28mOc8BespkM0l6O1woTKC5JkmmAe+SGkpwlSWVMEIU4y0MNiYDe0N57WfJpwJmRT+mvSd2xFS2Ja/AhqN5zju3iZPXZu+NO8pr1w2Dh2RELYmcEDJ5id9ntHD7/n5Lj3ra6mx/VZSW3UZYUVVmbPii78Xr4g95r/Es3Lu2Cyv8arQAAQJwXtvIxXO8AAAAASUVORK5CYII=" 
                                            alt="" 
                                            className="w-[3em] h-[3em] sm:w-[4em] sm:h-[4em] object-cover rounded-xl transition-transform duration-300 group-hover:scale-110" 
                                        />
                                        <div className="flex flex-col gap-2 flex-1">
                                            <div className="text-[1em] sm:text-[1.1em] font-bold montserrat">
                                                Responsive Web Design Certification
                                            </div>
                                            <div className="text-[.8em] sm:text-[.9em] text-gray-600 flex flex-wrap items-center gap-2">
                                                <span>FreeCodeCamp</span>
                                                <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                                                <span className="text-[.9em] text-gray-500">2024</span>
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ 
                                            scale: 1.02,
                                            backgroundColor: "#F3EDE7"
                                        }}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                        className="flex flex-wrap min-h-[2em] w-full py-6 px-4 sm:px-8 bg-[#F9F6F3] gap-4 sm:gap-6 items-start sm:items-center rounded-2xl cursor-pointer shadow-sm hover:shadow-md relative overflow-hidden group"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:translate-x-full duration-1000 transition-transform"></div>
                                        <img 
                                            src="https://www.carbonexchange.net/img/footer_logo.png" 
                                            alt="" 
                                            className="w-[3em] h-[3em] sm:w-[4em] sm:h-[4em] object-cover rounded-xl transition-transform duration-300 group-hover:scale-110" 
                                        />
                                        <div className="flex flex-col gap-2 flex-1">
                                            <div className="text-[1em] sm:text-[1.1em] font-bold montserrat">
                                                Software Engineer & Coop Engineer
                                            </div>
                                            <div className="text-[.8em] sm:text-[.9em] text-gray-600 flex flex-wrap items-center gap-2">
                                                <span>Carbon Exchange (Hong Kong) Ltd</span>
                                                <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                                                <span className="text-[.9em] text-gray-500">2022 - Present</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: "easeInOut", duration: 0.75, delay: 2 }}>
                <div className="mx-1 sm:mx-6 lg:mx-10 my-5 p-0 sm:p-5 border-[#DFD3C3] border-t">
                    <div className="flex flex-col">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4 gap-4 sm:gap-6 lg:gap-8">
                            <motion.div 
                                whileHover={{ 
                                    scale: 1.02,
                                    boxShadow: "0 8px 16px rgba(0,0,0,0.06)"
                                }}
                                className="group border p-6 rounded-2xl border-[#DFD3C3] cursor-pointer bg-[#F9F6F3] backdrop-blur-sm transition-all duration-300"
                                onClick={() => window.open("https://esgbot.net")}
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <h5 className="text-[1.1em] font-bold montserrat mb-1">ESGBOT</h5>
                                        <span className="text-[0.8em] text-gray-600">ESG Report Generation Services</span>
                                    </div>
                                    <div className="flex flex-col items-end gap-2">
                                        <Badge variant="outline">Python</Badge>
                                        <span className="text-[0.8em] text-gray-500">2022</span>
                                    </div>
                                </div>
                                <div className="relative overflow-hidden rounded-lg mb-4">
                                    <img 
                                        src="esgbot.png" 
                                        alt="ESGBOT Preview" 
                                        className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110" 
                                    />
                                </div>
                                <p className="text-[0.9em] text-gray-600 leading-relaxed">
                                    A web platform that simplifies ESG report generation for organizations using Python and SQL. Features automated data analysis and customizable report templates.
                                </p>
                            </motion.div>

                            <motion.div 
                                whileHover={{ 
                                    scale: 1.02,
                                    boxShadow: "0 8px 16px rgba(0,0,0,0.06)"
                                }}
                                className="group border p-6 rounded-2xl border-[#DFD3C3] cursor-pointer bg-[#F9F6F3] backdrop-blur-sm transition-all duration-300"
                                onClick={() => window.open("https://saveforme.devcollab.pro")}
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <h5 className="text-[1.1em] font-bold montserrat mb-1">Save For Me</h5>
                                        <span className="text-[0.8em] text-gray-600">Personal Saving Assistant</span>
                                    </div>
                                    <div className="flex flex-col items-end gap-2">
                                        <Badge variant="default">Nextjs</Badge>
                                        <span className="text-[0.8em] text-gray-500">2024</span>
                                    </div>
                                </div>
                                <div className="relative overflow-hidden rounded-lg mb-4">
                                    <img 
                                        src="saveforme_bg.png" 
                                        alt="Save For Me Preview" 
                                        className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110" 
                                    />
                                </div>
                                <p className="text-[0.9em] text-gray-600 leading-relaxed">
                                    A modern web app built with Next.js that helps users track savings goals and manage budgets with an intuitive interface and visual analytics.
                                </p>
                            </motion.div>

                            <motion.div 
                                whileHover={{ 
                                    scale: 1.02,
                                    boxShadow: "0 8px 16px rgba(0,0,0,0.06)"
                                }}
                                className="group border p-6 rounded-2xl border-[#DFD3C3] cursor-pointer bg-[#F9F6F3] backdrop-blur-sm transition-all duration-300"
                                onClick={() => window.open("https://pennywise.devcollab.pro")}
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <h5 className="text-[1.1em] font-bold montserrat mb-1">PennyWise</h5>
                                        <span className="text-[0.8em] text-gray-600">Personal Subscription Management Platform</span>
                                    </div>
                                    <div className="flex flex-col items-end gap-2">
                                        <Badge variant="default">Nextjs</Badge>
                                        <span className="text-[0.8em] text-gray-500">2024</span>
                                    </div>
                                </div>
                                <div className="relative overflow-hidden rounded-lg mb-4">
                                    <img 
                                        src="pennywisebg.png" 
                                        alt="PennyWise Preview" 
                                        className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110" 
                                    />
                                </div>
                                <p className="text-[0.9em] text-gray-600 leading-relaxed">
                                    A subscription management platform that helps users track and organize their recurring payments with a clean, user-friendly interface.
                                </p>
                            </motion.div>

                            <motion.div 
                                whileHover={{ 
                                    scale: 1.02,
                                    boxShadow: "0 8px 16px rgba(0,0,0,0.06)"
                                }}
                                className="group border p-6 rounded-2xl border-[#DFD3C3] cursor-pointer bg-[#F9F6F3] backdrop-blur-sm transition-all duration-300"
                                onClick={() => window.open("https://shop.kitny.land")}
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <h5 className="text-[1.1em] font-bold montserrat mb-1">KitnyLand - 香港手工針織</h5>
                                        <span className="text-[0.8em] text-gray-600">E-commerce Website</span>
                                    </div>
                                    <div className="flex flex-col items-end gap-2">
                                        <Badge variant="default">Nextjs</Badge>
                                        <span className="text-[0.8em] text-gray-500">2025</span>
                                    </div>
                                </div>
                                <div className="relative overflow-hidden rounded-lg mb-4">
                                    <img 
                                        src="KitnyLand-香港手工針織.png" 
                                        alt="KitnyLand Preview" 
                                        className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110" 
                                    />
                                </div>
                                <p className="text-[0.9em] text-gray-600 leading-relaxed">
                                    An elegant e-commerce platform for handcrafted knitwear featuring secure payments, customization options, and a beautiful product showcase.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
            <div className="flex justify-end px-4 py-4">
                <div className="text-[.7em] sm:text-[.8em] underline">Copyright 2024 by KenKong</div>
            </div>
        </div>
    );
}
