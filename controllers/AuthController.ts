import type { Request, Response, NextFunction } from "express";

class AuthController {
  async Login(req: Request, res: Response, next: NextFunction) {
    res.send("<h1>Login</h1>");
  }
  async Register(req: Request, res: Response, next: NextFunction) {
    res.send("<h1>Register</h1>");
  }
  async Me(req: Request, res: Response, next: NextFunction) {
    res.send("<h1>Me</h1>");
  }
}

export default new AuthController();
