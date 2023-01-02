import { Request, Response } from "express";
import { IUserRequest } from "../../interfaces/users";
import { createUserService } from "../../services/user/createUser.service";
import { serializeRegistService } from "../../services/user/serializeRegist.service";

export const createUserController = async (req: Request, res: Response) => {
  const userData: IUserRequest = req.validatedBody;
  const createdUser = await createUserService(userData);
  const sarializedResponse = await serializeRegistService(createdUser);
  return res.status(201).json(sarializedResponse);
};
