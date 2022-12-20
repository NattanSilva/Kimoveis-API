import { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { loginBody } from "../../serializers/session.serializers";

const verifySessionBodyMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userData = req.body;

  if (!userData) {
    throw new AppError(401, "Email or password invalid");
  }

  try {
    await loginBody.validate(userData, {
      stripUnknown: true,
      abortEarly: false,
    });

    return next();
  } catch (error) {
    if (error instanceof Error) {
      throw new AppError(401, "Email or password invalid");
    }
  }
};

export default verifySessionBodyMiddleware;
