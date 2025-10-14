import type { Request, Response, NextFunction } from "express";
import { ProductSchema } from "../../utils/ProductSchema.ts";
import { ApiError } from "../../utils/ApiError.ts";
import type { ZodError } from "zod";
import multer from "multer";
import productsStorageConfig from "../../config/productsStorageConfig.ts";
import Express from "express";

const app = Express();

const productUploadConfig = multer({
  storage: productsStorageConfig,
});

const productTextDataMiddleware = multer().any();

const productUploadsMiddleware = productUploadConfig.fields([
  { name: "thumbnail", maxCount: 1 },
  { name: "image_1", maxCount: 1 },
  { name: "image_2", maxCount: 1 },
  { name: "image_3", maxCount: 1 },
  { name: "image_4", maxCount: 1 },
]);

export const CheckNewProductData = app.use(
  productTextDataMiddleware,
  productUploadsMiddleware,
  (req: Request, res: Response, next: NextFunction) => {
    console.log(req);
    next();
  }
);

// export const CheckNewProductData = [
//   async (req: Request, res: Response, next: NextFunction) => {
//     console.log("first");
//     console.log(req.body);
//     next();
//   },
//   async (req: Request, res: Response, next: NextFunction) => {
//     console.log("second");
//     console.log(req.body);
//     next();
//   },
// ];
