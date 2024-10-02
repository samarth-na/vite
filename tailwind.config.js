/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx,html}",
		"./pages/index.html",
		"./htmls/*.html",
	],
	theme: {
		extend: {
			fontFamily: {
				github: ["Inter", "sans-serif"], // Naming the font "github" for convenience
			},
		},
	},
	plugins: [],
};
