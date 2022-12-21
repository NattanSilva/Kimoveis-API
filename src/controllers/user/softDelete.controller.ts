import { Request, Response } from "express";
import { softDeleteService } from "../../services/user/softDelete.service";

const softDeleteController = async (req: Request, res: Response) => {
  await softDeleteService(req.validatedID);
  return res.status(204).json({});
};

export { softDeleteController };
