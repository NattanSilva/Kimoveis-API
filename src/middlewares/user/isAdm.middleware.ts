import { NextFunction, Request, Response } from "express";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

const verifyIsAdmMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { decodedId } = req;

  const userRepository = AppDataSource.getRepository(User);
  const currentUser = await userRepository.findOneBy({
    id: decodedId,
  });

  if (!currentUser?.isAdm) {
    throw new AppError(403, "Admin credentials required");
  }

  return next();
};

export default verifyIsAdmMiddleware;
