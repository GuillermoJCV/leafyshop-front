import { z } from "astro/zod";

const UserRequestSignUpSchema = z.object({
	username : z.string(),
	password : z.string(),
	email : z.string(),
	roleId : z.optional(z.number())
})

export {
	UserRequestSignUpSchema
}