import express from "express";
import productsRouter from "./productsRouter.ts";
import cartsRouter from "./cartsRouter.ts";
import authRouter from "./authRouter.ts";
import multer from "multer";
import productsStorageConfig from "../config/productsStorageConfig.ts";
import { CheckNewProductData } from "../middleware/products/CheckNewProductData.ts";

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

const router = express.Router();

router.use("/products", productsRouter);

router.use("/carts", cartsRouter);

router.use("/auth", authRouter);

export default router;
