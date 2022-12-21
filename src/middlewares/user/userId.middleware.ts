import { NextFunction, Request, Response } from "express";
import validate from "uuid-validate";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

const verifyUserIdIsValidMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { params } = req;

  if (!validate(params.id)) {
    throw new AppError(401, "Invalid Id");
  }

  const userRepository = AppDataSource.getRepository(User);
  const findUser = await userRepository.findOneBy({ id: params.id });

  if (!findUser) {
    throw new AppError(404, "User not found");
  }

  req.validatedID = params.id;

  return next();
};

export default verifyUserIdIsValidMiddleware;
