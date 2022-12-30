import { Request, Response } from "express";
import { listPropertiesService } from "../../services/property/listProperties.service";

const listPropertiesController = async (req: Request, res: Response) => {
  const list = await listPropertiesService();

  return res.status(200).json(list);
};
export { listPropertiesController };
