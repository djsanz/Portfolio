/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			screens: {
				'xs': '475px',
				...defaultTheme.screens,
			},
			fontFamily: {
				Dancing: ["Dancing Script", "cursive"],
			},
		},
	},
	plugins: [],
}