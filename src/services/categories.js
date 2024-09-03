/*
USO DE LA CLASE CATEGORIES :

//Importación: 
---
import { findById, findMany, ... } from ".../categories.js"

// O también

import Categories from ".../categories.js"
---

//Para usar el findById 	:

const id = 1 // O cualquier número
const category = findById(id) //O también Categories.findById(id)

//Para usar findMany 		:

const params = {
	page : 1 //O cualquier otra página
}
const category = findMany(params) // O también Categories.findMany(params)
*/

export default class Categories {

/*
	async create(data, jwtToken)
	{	
		const fetched = await fetch(`${Categories.#RESOURCE}/`, {
			method : "POST",
			headers : {
				"Content-Type" 	: "application/json",
				"Authorization" : jwtToken
			},
			body : JSON.stringify(data)
		})

		return fetched.ok
	}
*/

	/* Cambiar el error por uno customizado */
	static async findById(id)
	{	
		const resource = `${Categories.#RESOURCE}/${id}`
		const fetched = fetch(resource)
		.then(data => {
			if(data.ok) return data.json()
			else throw new Error("El elemento buscado no existe")
		})

		return fetched;
	}

	/*
	* page : number
	*/
	async findMany(params)
	{
		const { page } = params
		const resource = page ? `${Categories.#RESOURCE}?page=${page}` : `${Categories.#RESOURCE}/`

		const fetched = fetch(resource)
		.then(data => {
			if(data.ok) data.json()
			else throw new Error("No se ha podido hacer la peticion")
		})

		return fetched
		
	}

/*
	async update(id, data)
	{
		throw new Error("Aún no implementado")
	}
*/

/*
	async delete(id)
	{
		throw new Error("Aún no implementado")
	}
*/

	static #API_URL = import.meta.env.PUBLIC_API_URL;
	static #RESOURCE = `${Categories.#API_URL}/categories`;
}