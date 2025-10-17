import type { Request, Response, NextFunction } from "express";
import { ProductSchema } from "../../utils/ProductSchema.ts";
import { ApiError } from "../../utils/ApiError.ts";
import type { ZodError } from "zod";
import multer from "multer";
import productsStorageConfig from "../../config/productsStorageConfig.ts";
import Express from "express";

const app = Express();

const productUploadsMiddleware = multer({
  fileFilter: (req, file, cb) => {
    cb(new ApiError(500, `${file.size}`));
  },
  storage: productsStorageConfig,
}).fields([
  { name: "thumbnail", maxCount: 1 },
  { name: "image_1", maxCount: 1 },
  { name: "image_2", maxCount: 1 },
  { name: "image_3", maxCount: 1 },
  { name: "image_4", maxCount: 1 },
]);

export const CheckNewProductData = app.use(
  productUploadsMiddleware,
  async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);
    try {
      const isDataValid = await ProductSchema.parse(req.body);
    } catch (error) {
      console.log(error);
    }
    res.send({ status: "Good!" });
  }
);
