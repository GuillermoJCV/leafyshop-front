import { UserRequestSignUpSchema } from "../types/Auth";

/*
USO DE LA CLASE AUTHORIZATION :

//Importación: 
---
import { login, signup } from ".../auth.js"

// O también

import Auth from ".../auth.js"
---

//Para usar el login 	:

const username = "usuario"
const password = "contraseña"
const userData = login(username, password) // O también Auth.login(username, password)

//Para usar signup 		:

const data = {
	username 	: "nombre de usuario",
	password 	: "contraseña del usuario",
	email 		: "email_del_usuario@ejemplo.com",
	roleId 		: 2 // (Opcional) En caso de querer crear un usuario no cliente, sería necesario poner un token de admin
}
const userData = signup(data) // O también Auth.signup(data)

*/

export default class Authorization {
	/* Cambiar el error del fetch a uno más descriptivo*/
	static async login(username, password) {
		if(typeof username !== "string") throw new TypeError("username debe ser una cadena de texto")
		if(typeof password !== "string") throw new TypeError("password debe ser una cadena de texto")

		const fetched = await fetch(`${Authorization.#RESOURCE}/${username}/${password}`)
		.then(data => {
			if(data.ok) return data.json()
			else throw new Error("Ha ocurrido un error al iniciar sesión")
		})

		return fetched
	}

	static async signup(data) {
		const parsedData = UserRequestSignUpSchema.parse(data)

		const fetched = await fetch(`${Authorization.#RESOURCE}/`, {
			method : "POST",
			headers : {
				"Content-Type" : "application/json"
			},
			body : JSON.stringify(parsedData)
		})
		.then(data => {
			if(data.ok) return data.json()
			else throw new Error("Ha ocurrido un error al iniciar sesión")
		})

		return fetched
	}

	static #RESOURCE = `${Authorization.#API_URL}/users/auth`;
	static #API_URL = import.meta.env.PUBLIC_API_URL;
}