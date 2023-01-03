import { NextFunction, Request, Response } from "express";
import AppDataSource from "../../data-source";
import { Propertie } from "../../entities/properties.entity";
import { AppError } from "../../errors/AppError";

const verifyPropertyIdMiddleware =
  (idLocality: string) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const { validatedBody, params } = req;
    let currentID: string;

    if (idLocality === "body") {
      currentID = validatedBody.propertyId;
    }

    if (idLocality === "params") {
      currentID = params.id;
    }

    const propertyRepository = AppDataSource.getRepository(Propertie);
    const findProperty = await propertyRepository.findOneBy({
      id: currentID as any,
    });

    if (!findProperty) {
      throw new AppError(404, "Invalid property id");
    }

    return next();
  };

export default verifyPropertyIdMiddleware;
