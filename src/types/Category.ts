import { z } from "astro/zod";
import { subCategoryRequestScheme } from "./SubCategory";

const categoryRequestScheme = z.object({
	name : z.string(),
	subcategories : z.optional(z.array(subCategoryRequestScheme))
})

const categoryResponseScheme = z.object({
	id : z.number(),
	name : z.string(),
})

type CategoryRequest 	= z.infer<typeof categoryRequestScheme>
type CategoryResponse 	= z.infer<typeof categoryResponseScheme>

export {
	categoryRequestScheme,
    categoryResponseScheme
};

export type {
	CategoryRequest,
	CategoryResponse 
};
