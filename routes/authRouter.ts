import express from "express";
import AuthController from "../controllers/AuthController.ts";

const authRouter = express.Router();

authRouter.get("/login", AuthController.Login);

authRouter.get("/register", AuthController.Register);

authRouter.get("/me", AuthController.Me);

export default authRouter;
