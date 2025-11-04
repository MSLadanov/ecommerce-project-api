import express from "express";
import AuthController from "../controllers/AuthController.ts";
import { checkNewUserData } from "../middleware/products/CheckNewUserData.ts";

const authRouter = express.Router();

authRouter.get("/login", AuthController.Login);

authRouter.post("/register", checkNewUserData, AuthController.Register);

authRouter.get("/me", AuthController.Me);

export default authRouter;
