import type { Request, Response, NextFunction } from "express";
import { ProductSchema } from "../../utils/ProductSchema.ts";
import { ApiError } from "../../utils/ApiError.ts";
import type { ZodError } from "zod";
import multer from "multer";
import productsStorageConfig from "../../config/productsStorageConfig.ts";
import Express from "express";

const app = Express();

const imageTypes = ["image/avif", "image/gif", "image/jpeg", "image/png"];

const productUploadsMiddleware = multer({
  fileFilter: (req, file, cb) => {
    console.log(req.body);
    // const isExtensionCorrect = imageTypes.find(
    //   (item) => item === file.mimetype
    // );
    // console.log(isExtensionCorrect);
    if (false) {
      cb(new ApiError(500, `${file.mimetype}`));
    }
    cb(new ApiError(200, "ok!"));
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
