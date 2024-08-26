"use client";
import React, { useEffect, useState } from "react";

export default function Page() {
	useEffect(() => {
		const items = document.querySelectorAll("#nav-bar-items a");
		items[2].classList.add("underline");
	}, []);
	return <div></div>;
}
