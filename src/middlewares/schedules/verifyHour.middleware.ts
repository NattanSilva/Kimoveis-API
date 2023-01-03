import { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors/AppError";

const verifyHourMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { hour } = req.body;

  const scheduleHour = parseInt(hour.replace(":", ""));

  if (scheduleHour < 800 || scheduleHour > 1800) {
    throw new AppError(400, "Invalid schedule hour");
  }

  return next();
};

export default verifyHourMiddleware;
