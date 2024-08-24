import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
	basePath: "/2024portfolio",
	output: "export", // <=== enables static exports
	reactStrictMode: true,
	env: {
		resend_API: "re_BindviUm_BHZfgCSMMm11FDdN4dsBa3VU",
		HOST: "https://devcollab.pro",
	},
};

export default nextConfig;
