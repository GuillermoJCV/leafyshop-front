import { z } from "astro/zod";

const subCategoryRequestScheme = z.object({
	name : z.string()
})

const subCategoryResponseScheme = z.object({
	id : z.number().positive(),
	name : z.string()
})

export {
	subCategoryRequestScheme,
	subCategoryResponseScheme
}