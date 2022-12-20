import { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { registBody } from "../../serializers/user.serializers";

const verifyRegistBodyMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const newUserData = req.body;

  try {
    await registBody.validate(newUserData, {
      stripUnknown: true,
      abortEarly: false,
    });

    return next();
  } catch (error) {
    if (error instanceof Error) {
      throw new AppError(400, error.message);
    }
  }
};

export default verifyRegistBodyMiddleware;
