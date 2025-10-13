import type { Request, Response, NextFunction } from "express";
import { ProductSchema } from "../../utils/ProductSchema.ts";
import { ApiError } from "../../utils/ApiError.ts";
import type { ZodError } from "zod";

export const CheckNewProductData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const isProductDataCorrect = ProductSchema.parse(req.body);
  console.log(isProductDataCorrect);
  try {
    if (isProductDataCorrect) {
      next();
    }
  } catch (error) {
    console.log(error);
    next(new Error("error"));
  }
};
