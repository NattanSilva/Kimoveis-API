import { NextFunction, Request, Response } from "express";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

const verifyUpdatePermissionsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { decodedId, params } = req;

  const userRepository = AppDataSource.getRepository(User);
  const currentUser = await userRepository.findOneBy({
    id: decodedId as string,
  });

  if (!currentUser?.isAdm && decodedId !== params.id) {
    throw new AppError(401, "Admin credentials required");
  }

  return next();
};

export default verifyUpdatePermissionsMiddleware;
