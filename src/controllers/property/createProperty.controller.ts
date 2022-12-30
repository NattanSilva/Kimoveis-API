import { Request, Response } from "express";
import { createPropertyService } from "../../services/property/createProperty.service";

const createPropertyController = async (req: Request, res: Response) => {
  const data = await createPropertyService(req.validatedBody);
  return res.status(201).json(data);
};

export { createPropertyController };
