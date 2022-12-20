import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

const verifyIsAdmMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    throw new AppError(401, "Invalid token");
  }

  const userId = jwt.decode(token)?.sub;

  const userRepository = AppDataSource.getRepository(User);
  const currentUser = await userRepository.findOneBy({ id: userId as string });

  if (!currentUser?.isAdm) {
    throw new AppError(403, "Admin credentials required");
  }

  return next();
};

export default verifyIsAdmMiddleware;
