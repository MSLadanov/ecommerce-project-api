import express from "express";
import productsRouter from "./productsRouter.ts";
import cartsRouter from "./cartsRouter.ts";
import authRouter from "./authRouter.ts";

const router = express.Router();

router.use("/products", productsRouter);

router.use("/carts", cartsRouter);

router.use("/auth", authRouter);

export default router;
