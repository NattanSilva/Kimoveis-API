import { Request, Response } from "express";
import { actualizeUserService } from "../../services/users/actualizeUser.service";
import { serializeRegistService } from "../../services/users/serializeRegist.service";

export const actualizeUserController = async (req: Request, res: Response) => {
  const data = await actualizeUserService(req.params.id, req.body);
  const responseData = await serializeRegistService(data);

  return res.status(200).json(responseData);
};
