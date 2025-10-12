import type { NextFunction, Request, Response } from "express";
import type { ApiError } from "../utils/ApiError.ts";

export const ErrorHandling = (
  err: ApiError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(err.statusCode).json({ message: err.message });
};
