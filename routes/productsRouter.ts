import express from "express";
import ProductsController from "../controllers/ProductsController.ts";

const productsRouter = express.Router();

productsRouter.get("/", ProductsController.getAllProducts);

productsRouter.get("/category-list", ProductsController.getProductCategories);

productsRouter.get("/category", ProductsController.getProductsByCategory);

productsRouter.post("/", ProductsController.addProduct);

export default productsRouter;
