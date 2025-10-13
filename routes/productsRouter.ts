import express from "express";
import ProductsController from "../controllers/ProductsController.ts";
import { CheckNewProductData } from "../middleware/products/CheckNewProductData.ts";

const productsRouter = express.Router();

productsRouter.get("/", ProductsController.getAllProducts);

productsRouter.get("/category-list", ProductsController.getProductCategories);

productsRouter.get("/category", ProductsController.getProductsByCategory);

productsRouter.post("/", CheckNewProductData, ProductsController.addProduct);

export default productsRouter;
