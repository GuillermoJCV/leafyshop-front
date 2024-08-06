/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react"

export default {
	content: 	[
				'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
				"./node_modules/@nextui-org/**/dist/*.{js,ts,jsx,tsx}"
				],
	theme: {
		extend: {},
		colors: {
			'green-medio': '#35F33B',
		},
	},
	darkMode: "class",
	plugins: [
		nextui({
			addCommonColors : true
		})
	],
}
