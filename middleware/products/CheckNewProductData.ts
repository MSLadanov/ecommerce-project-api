import type { Request, Response, NextFunction } from "express";
import { ProductSchema } from "../../utils/ProductSchema.ts";
import { ApiError } from "../../utils/ApiError.ts";
import type { ZodError } from "zod";

export const CheckNewProductData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (ProductSchema.parse(req.body)) {
      next();
    }
  } catch (error) {
    next(new ApiError(404, "Error"));
  }
};
