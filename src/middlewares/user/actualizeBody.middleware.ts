import { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { actualizeBody } from "../../serializers/user.serializers";

const verifyActualizeBodyMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userData = req.body;

  if (userData.hasOwnProperty("isAdm")) {
    throw new AppError(401, "Non-updatable field");
  }

  if (userData.hasOwnProperty("id")) {
    throw new AppError(401, "Non-updatable field");
  }

  if (userData.hasOwnProperty("isActive")) {
    throw new AppError(401, "Non-updatable field");
  }

  try {
    await actualizeBody.validate(userData);

    return next();
  } catch (error) {
    if (error instanceof Error) {
      throw new AppError(401, error.message);
    }
  }
};

export default verifyActualizeBodyMiddleware;
