import { Request, Response } from "express";
import { IUserRequest } from "../../interfaces/users";
import { createUserService } from "../../services/users/createUser.service";
import { serializeRegistService } from "../../services/users/serializeRegist.service";

export const createUserController = async (req: Request, res: Response) => {
  const userData: IUserRequest = req.body;
  const createdUser = await createUserService(userData);
  const data = await serializeRegistService(createdUser);
  return res.status(201).json(data);
};
