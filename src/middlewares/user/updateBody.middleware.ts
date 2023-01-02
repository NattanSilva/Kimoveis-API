import { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors/AppError";

const verifyUpdateBodyMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { body } = req;

  if (body.hasOwnProperty("isAdm")) {
    throw new AppError(401, "Non-updatable field");
  }

  if (body.hasOwnProperty("id")) {
    throw new AppError(401, "Non-updatable field");
  }

  if (body.hasOwnProperty("isActive")) {
    throw new AppError(401, "Non-updatable field");
  }

  return next();
};

export default verifyUpdateBodyMiddleware;
