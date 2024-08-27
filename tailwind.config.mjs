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
			/*
			* Lo que hice fue ir al layout y tomar el color que se encuentra en esta variable :
			* --header-bg-color
			* Luego llevé ese color a la página https://uicolors.app/create
			* Y después agregué los colores con el nombre primary
			*/
			main : {
				50 	: "#eefff4",
				100 : "#d7ffe7",
				200 : "#b2ffd0",
				300 : "#76ffad",
				400 : "#33f582",
				500 : "#09de5f",
				600 : "#01b84b",
				700 : "#05903f",
				800 : "#0a7135",
				900 : "#095028",
				950 : "#003417",
			}
			/*
			* Para los grises vamos a usar el gray que ya existe en tailwind
			* Ya que este no es gris puro, sino más bien un gris ligeramente más cyan
			*/
		},
	},
	darkMode: "class",
	plugins: [
		nextui({
			addCommonColors : true
		})
	],
}

/*
NOTA:

Para usar estos colores solo tiene que usarlos en las clases tanto de astro como de react, por ejemplo

astro :
	<div class:list={["bg-primary-200"]}> Texto genérico <div>
	<div class="bg-primary-200"> Texto genérico <div>
Ambos son válidos

react :
	<div className="bg-primary-200"></div>


Como puede ver la sintaxis es:
propiedad-color-tono

bg-gray-950
bg-primary-200
text-primary-700
ring-primary-500
...etc

Se puede utilizar con todas las propiedades de tailwind

*/