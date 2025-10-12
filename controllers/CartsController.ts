import type { Request, Response, NextFunction } from "express";

class CartsController {
  async AllCarts(req: Request, res: Response, next: NextFunction) {
    res.send("<h1>All Carts</h1>");
  }
  async UserCarts(req: Request, res: Response, next: NextFunction) {
    res.send("<h1>User carts</h1>");
  }
}

export default new CartsController();
