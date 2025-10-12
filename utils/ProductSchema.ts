import z from "zod";

export const ProductSchema = z.object({
  title: z.string(),
  description: z.string(),
  category: z.string(),
  price: z.string(),
  discountPercentage: z.string(),
  rating: z.string(),
  stock: z.string(),
  brand: z.string(),
  sku: z.string(),
  weight: z.string(),
  width: z.string(),
  height: z.string(),
  depth: z.string(),
  warrantyInformation: z.string(),
  shippingInformation: z.string(),
  availabilityStatus: z.string(),
  returnPolicy: z.string(),
});
