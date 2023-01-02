import { Request, Response } from "express";
import { IUserLogin } from "../../interfaces/users";
import { createSessionService } from "../../services/sessions/createSession.service";

export const createSessionController = async (req: Request, res: Response) => {
  const userCredentials: IUserLogin = req.validatedBody;
  const userToken = await createSessionService(userCredentials);

  return res.status(200).json({ token: userToken });
};
