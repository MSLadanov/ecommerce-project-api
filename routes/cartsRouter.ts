import express from "express";
import CartsController from "../controllers/CartsController.ts";

const cartsRouter = express.Router();

cartsRouter.get("/", CartsController.AllCarts);

cartsRouter.get("/user", CartsController.UserCarts);

export default cartsRouter;
