import "dotenv/config";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../../errors/AppError";

const ensureAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const auth = req.headers.authorization;

  if (!auth) {
    throw new AppError(401, "Invalid token");
  }

  const token = auth.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY!, (error, decoded) => {
    if (error) {
      throw new AppError(401, error.message);
    }

    req.decodedId = decoded?.sub as string;
  });

  return next();
};

export default ensureAuthMiddleware;
