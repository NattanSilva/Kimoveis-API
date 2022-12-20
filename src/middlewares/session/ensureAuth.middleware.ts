import "dotenv/config";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../../errors/AppError";

const ensureAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    throw new AppError(401, "Invalid token");
  }

  if (!process.env.SECRET_KEY) {
    throw new AppError(400, "SECRET_KEY is required");
  }

  jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
    if (error) {
      throw new AppError(401, error.message);
    }
  });

  return next();
};

export default ensureAuthMiddleware;
