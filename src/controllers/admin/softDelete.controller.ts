import { Request, Response } from "express";
import { softDeleteService } from "../../services/admin/softDelete.service";

const softDeleteController = async (req: Request, res: Response) => {
  await softDeleteService(req.params.id);
  return res.status(204).json({});
};

export { softDeleteController };
