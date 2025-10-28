import { ProductSchema } from "../../utils/ProductSchema.ts";
import { ApiError } from "../../utils/ApiError.ts";
import multer from "multer";
import productsStorageConfig from "../../config/productsStorageConfig.ts";
import Express from "express";

const imageTypes = ["image/avif", "image/gif", "image/jpeg", "image/png"];

export const productUploadsMiddleware = Express().use(
  multer({
    fileFilter: (req, file, cb) => {
      const isExtensionCorrect = imageTypes.includes(file.mimetype);
      cb(new ApiError(400, JSON.stringify(ProductSchema.parse(req.body))));
      // try {
      //   const isDataValid = ProductSchema.parse(req.body);
      // } catch (error) {
      //   cb(new ApiError(415, "Data is not correct!"));
      // }
      if (isExtensionCorrect) {
        cb(null, false);
      } else {
        cb(new ApiError(415, "Unsupported Media Type!"));
      }
    },
    storage: productsStorageConfig,
    limits: {
      fileSize: 10 * 1024 * 1024,
    },
  }).fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "image_1", maxCount: 1 },
    { name: "image_2", maxCount: 1 },
    { name: "image_3", maxCount: 1 },
    { name: "image_4", maxCount: 1 },
  ])
);
