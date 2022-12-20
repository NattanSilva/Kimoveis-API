import { NextFunction, Request, Response } from "express";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { requestId } from "../../serializers/user.serializers";

const verifyUserIdIsValidMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const paramsID = req.params.id;
  try {
    await requestId.validate({ id: paramsID });
  } catch (error) {
    if (error instanceof Error) {
      throw new AppError(404, "Invalid Id");
    }
  }

  const userRepository = AppDataSource.getRepository(User);
  const findUser = await userRepository.findOneBy({ id: paramsID });

  if (!findUser) {
    throw new AppError(404, "User not found");
  }

  return next();
};

export default verifyUserIdIsValidMiddleware;
