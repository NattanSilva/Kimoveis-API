import { Request, Response } from "express";
import { createScheludeService } from "../../services/schedule/createSchelude.service";

const createScheludeController = async (req: Request, res: Response) => {
  const response = await createScheludeService(
    req.validatedID,
    req.validatedBody
  );

  return res.status(201).json({ message: response });
};

export { createScheludeController };
