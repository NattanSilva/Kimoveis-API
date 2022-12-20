import { NextFunction, Request, Response } from "express";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

const verifyUserAlreadyExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const newUserData = req.body;
  const userReposiroty = AppDataSource.getRepository(User);
  const user = await userReposiroty.findOneBy({ email: newUserData.email });

  if (user) {
    throw new AppError(409, "Email already registred");
  }

  return next();
};

export default verifyUserAlreadyExistsMiddleware;
