import express from "express";
import ProductsController from "../controllers/ProductsController.ts";
import { productUploadsMiddleware } from "../middleware/products/CheckNewProductData.ts";

const productsRouter = express.Router();

productsRouter.get("/", ProductsController.getAllProducts);

productsRouter.get("/category-list", ProductsController.getProductCategories);

productsRouter.get("/category", ProductsController.getProductsByCategory);

productsRouter.post(
  "/",
  productUploadsMiddleware,
  ProductsController.addProduct
);

export default productsRouter;
