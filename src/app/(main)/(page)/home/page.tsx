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
        <div className="relative">
            {toast.open && <Toast message={toast.message} type={toast.type as "success" | "error" | "warning"} />}
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: "easeInOut", duration: 0.75, delay: 1 }}>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="md:text-start sm:text-center pt-10 pb-2 sm:px-10 px-2">
                        <div className="flex justify-center md:max-w-[60%] sm:max-w-[100%] mb-10">
                            <img src="/2024portfolio/profile.png" alt="" className="w-[10em] h-[10em] object-cover rounded-[10%]" />
                        </div>
                        <p className="text-4xl text-center md:text-start font-[500] my-3">Hi, I'm Ken Kong</p>
                        <p className="text-xl font-[400] text-center md:text-start max-w-[100%] md:max-w-[70%] my-3 montserrat">
                            People used to call me Kenguru. I am a Hong Kong Web Developer and Designer for front-end and back-end. Good at Python and Nodejs.
                        </p>
                        <div className="relative mt-10">
                            <h5 className="text-xl font-[500] mb-5">Skills</h5>
                            <div className="items-center inline-flex flex-nowrap gap-3 w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                                <div className="flex flex-nowrap gap-3 items-center animate-infinite-scroll justify-center md:justify-start">
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
                                <div className="flex gap-3 flex-nowrap items-center animate-infinite-scroll justify-center md:justify-start">
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
                        </div>
                    </div>
                    <div className="flex flex-col items-center md:items-start pt-5">
                        <p className="text-3xl font-[500] max-w-100 md:max-w-[10em] my-3">Front-end and Back-end Developer with passion in UI/UX Design</p>
                        <div className="flex gap-3 items-center mt-3 mb-10 justify-center md:justify-start">
                            <Modal>
                                <ModalTrigger className="rounded-full border border-[#DACDBC] px-4 py-1 bg-[#C9B09F]">
                                    <div className="">Send Email to Me</div>
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

                            <a href="/2024portfolio/services" className="underline text-[.9em] flex gap-1">
                                <FaWhatsapp className="text-[1.5em]" />
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
                                    <div
                                        className="flex flex-wrap min-h-[2em] w-fit py-5 px-8 bg-[#DFD3C3] gap-4 items-center rounded-[10px] cursor-pointer shadow-sm hover:shadow-lg"
                                        style={{ transition: "0.5s ease all" }}
                                    >
                                        <img src="https://www.polyu.edu.hk/assets/img/main-logo-1x.png" alt="" className="w-[3em] h-[3em] object-cover object-left" />
                                        <div className="flex flex-col gap-1">
                                            <div className="text-[1em] font-bold"> BEng(Hons) in Product Analysis and Engineering Design Programme</div>
                                            <div className="text-[.9em]">The Hong Kong Polytechnic University</div>
                                        </div>
                                        <div className="flex items-end h-100 ms-auto">
                                            <div className="text-[.8em]">2020 - 2025</div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex flex-wrap min-h-[2em] w-fit py-5 px-8 bg-[#DFD3C3] gap-4 items-center rounded-[10px] cursor-pointer shadow-sm hover:shadow-lg"
                                        style={{ transition: "0.5s ease all" }}
                                    >
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAh1BMVEUKCiMAABgAAA0JCSMAAA9XV2Obm6IAAB0AABRGRlP///+wsLcXFyo7O00AAAAnJzempqwEBCHr6+5zc3wAABHCwsfa2t47O0f09PZRUV5cXGgAABeBgYrT09cAABO2trwAABqXl58AAAUAACAVFSphYWlbW2E1NUKPj5cfHzLMzNBoaHQsLD//65ZnAAABT0lEQVR4AcRQBYKDQAwMTtM2FN/i7v9/32XZcvKCGyQycfgvaLrx12Ho2qWalq0pn3NF25apNPeGd/3kHk9SLv2ON1cqjocvOsv6jyCMVAl6oeew1OJE8+EMSwW+VQNfS2LNAC1DK/8UKxDLSs2WW5hpQHVCoGo1CaKwGmVRUhNUov2QXYGMQv+QrXDBE6ELEv0gEAMsSNV1Q+FBKsZGDXhHjAucCjjZZhQpzGLUzsiMG3qhuOOiS1sbxQyrKmvkG+JCC3dNwFdlVzBF28mOc8BespkM0l6O1woTKC5JkmmAe+SGkpwlSWVMEIU4y0MNiYDe0N57WfJpwJmRT+mvSd2xFS2Ja/AhqN5zju3iZPXZu+NO8pr1w2Dh2RELYmcEDJ5id9ntHD7/n5Lj3ra6mx/VZSW3UZYUVVmbPii78Xr4g95r/Es3Lu2Cyv8arQAAQJwXtvIxXO8AAAAASUVORK5CYII=" alt="" className="w-[3em] h-[3em] object-cover" />
                                        <div className="flex flex-col gap-1">
                                            <div className="text-[1em] font-bold">Responsive Web Design Certification</div>
                                            <div className="text-[.9em]">FreeCodeCamp</div>
                                        </div>
                                        <div className="flex items-end h-100 ms-auto">
                                            <div className="text-[.8em]">2024</div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex flex-wrap min-h-[2em] w-fit py-5 px-8 bg-[#DFD3C3] gap-4 items-center rounded-[10px] cursor-pointer shadow-sm hover:shadow-lg"
                                        style={{ transition: "0.5s ease all" }}
                                    >
                                        <img src="https://www.carbonexchange.net/img/footer_logo.png" alt="" className="w-[3em] h-[3em] object-cover" />
                                        <div className="flex flex-col gap-1">
                                            <div className="text-[1em] font-bold">Software Engineer</div>
                                            <div className="text-[.9em]">Carbon Exchange (Hong Kong) Ltd</div>
                                        </div>
                                        <div className="flex items-end h-100 ms-auto">
                                            <div className="text-[.8em]">2022 - 2023</div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex flex-wrap min-h-[2em] w-fit py-5 px-8 bg-[#DFD3C3] gap-4 items-center rounded-[10px] cursor-pointer shadow-sm hover:shadow-lg"
                                        style={{ transition: "0.5s ease all" }}
                                    >
                                        <img src="https://www.carbonexchange.net/img/footer_logo.png" alt="" className="w-[3em] h-[3em] object-cover" />
                                        <div className="flex flex-col gap-1">
                                            <div className="text-[1em] font-bold">Coop Engineer</div>
                                            <div className="text-[.9em]">Carbon Exchange (Hong Kong) Ltd</div>
                                        </div>
                                        <div className="flex items-end h-100 ms-auto">
                                            <div className="text-[.8em]">2023 - Present</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: "easeInOut", duration: 0.75, delay: 2 }}>
                <div className="mx-1 sm:mx-10 my-5 p-5 border-[#DFD3C3] border-t">
                    <div className="flex flex-col">
                        {/* <h5 className="text-xl font-[500]">Project</h5> */}

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-4 gap-3 sm:gap-10">
                            <div className="border p-4 rounded-lg border-[#DFD3C3] cursor-pointer shadow-md hover:shadow-lg transition duration-500" onClick={() => window.open("https://esgbot.net")}>
                                <div className="flex justify-between">
                                    <h5 className="text-[0.9em] m-0 p-0 font-bold montserrat">ESGBOT</h5>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[0.8em] text-gray-600">2022</span>
                                        <Badge variant="default">Production</Badge>
                                    </div>
                                </div>
                                <span className="text-[0.8em] text-gray-600">ESG Report Generation Services</span>
                                <img src="esgbot.png" alt="" className="w-full rounded-md my-2" />
                                <p className="text-[0.9em] my-3">
                                    An ESG reporting generation platform using Python Flask and SQL, allowing organizations to efficiently input, analyze, and generate customizable ESG reports.
                                    Utilized Flask for backend development and SQL for data management, ensuring a reliable and scalable solution for sustainable business practices.
                                </p>
                            </div>
                            <div
                                className="border p-4 rounded-lg border-[#DFD3C3] cursor-pointer shadow-md hover:shadow-lg transition duration-500"
                                onClick={() => window.open("https://saveforme.devcollab.pro")}
                            >
                                <div className="flex justify-between">
                                    <h5 className="text-[0.9em] m-0 p-0 font-bold montserrat">Save For Me</h5>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[0.8em] text-gray-600">2024</span>
                                        <Badge variant="outline">Beginner</Badge>
                                    </div>
                                </div>
                                <span className="text-[0.8em] text-gray-600">Personal Saving Assistant</span>
                                <img src="saveforme_bg.png" alt="" className="w-full rounded-md my-2" />
                                <p className="text-[0.9em] my-3">
                                    A personal saving assistant website using Next.js to help users track their savings goals and manage their budgets effectively. The platform features a
                                    user-friendly interface, real-time data visualization, and customizable saving plans. Leveraged Next.js for fast performance and improved SEO, providing an engaging
                                    experience for users looking to enhance their financial management.
                                </p>
                            </div>
                            <div
                                className="border p-4 rounded-lg border-[#DFD3C3] cursor-pointer shadow-md hover:shadow-lg transition duration-500"
                                onClick={() => window.open("https://pennywise.devcollab.pro")}
                            >
                                <div className="flex justify-between">
                                    <h5 className="text-[0.9em] m-0 p-0 font-bold montserrat">PennyWise</h5>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[0.8em] text-gray-600">2024</span>
                                        <Badge variant="default">Production</Badge>
                                    </div>
                                </div>
                                <span className="text-[0.8em] text-gray-600">Personal Subscription Management Platform</span>
                                <img src="pennywisebg.png" alt="" className="w-full rounded-md my-2" />
                                <p className="text-[0.9em] my-3">
                                    The platform utilizes a SQL database to efficiently store and retrieve user data, subscription details, and payment information. Users can easily sign up, manage
                                    their subscriptions, and access personalized content through a user-friendly interface. I focused on ensuring security, scalability, and responsiveness, creating an
                                    effective solution for individuals and businesses looking to streamline subscription management.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            <div className="flex justify-end">
                <div className="h-100 text-[.8em] underline">Copyright 2024 by KenKong</div>
            </div>
        </div>
    );
}
