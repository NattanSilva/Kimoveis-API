import { Request, Response } from "express";
import { actualizeUserService } from "../../services/user/actualizeUser.service";
import { serializeRegistService } from "../../services/user/serializeRegist.service";

export const actualizeUserController = async (req: Request, res: Response) => {
  const updatedUser = await actualizeUserService(
    req.validatedID,
    req.validatedBody
  );
  const serializedReponse = await serializeRegistService(updatedUser);

  return res.status(200).json(serializedReponse);
};
