/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";

export default function Page() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2">
			<div className="text-start py-10 px-10">
				<img src="" alt="" />
				<p className="text-4xl font-[500] my-3">Hi, I'm Kenguru</p>
				<p className="text-xl font-[400] max-w-[70%] my-3 montserrat">
					Hong Kong Web Developer and Designer for front-end and back-end. Good at Python and Nodejs
				</p>
			</div>
			<div>
				<p className="text-3xl font-[500] max-w-[10em] my-3">
					Front-end and Back-end Developer with passion in UI/UX Design
				</p>
			</div>
		</div>
	);
}
