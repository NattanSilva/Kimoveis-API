import { Request, Response } from "express";
import { listSchedulesByPropertyService } from "../../services/schedule/listSchedulesByProperty.service";

const listSchedulesByPropertyController = async (
  req: Request,
  res: Response
) => {
  const list = await listSchedulesByPropertyService(req.decodedId);

  return res.status(200).json(list);
};

export { listSchedulesByPropertyController };
