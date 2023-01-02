import { NextFunction, Request, Response } from "express";
import AppDataSource from "../../data-source";
import { Propertie } from "../../entities/properties.entity";
import { Schedules_user_properties } from "../../entities/schedules_user_properties.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

const verifyAvailabilityMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { body, decodedId } = req;
  const userRepository = AppDataSource.getRepository(User);
  const propertyRepository = AppDataSource.getRepository(Propertie);
  const scheduleRepository = AppDataSource.getRepository(
    Schedules_user_properties
  );

  const onePropertyScheduleAvaliability = await scheduleRepository
    .createQueryBuilder("schedules_user_properties")
    .innerJoinAndSelect("schedules_user_properties.propertie", "properties")
    .where("properties.id = :id", { id: body.propertyId })
    .andWhere("schedules_user_properties.hour = :hour", { hour: body.hour })
    .andWhere("schedules_user_properties.date = :date", { date: body.date })
    .getMany();

  if (onePropertyScheduleAvaliability.length > 0) {
    throw new AppError(409, "This property have this schedule");
  }

  const userScheduleAvaliability = await scheduleRepository
    .createQueryBuilder("schedules_user_properties")
    .innerJoinAndSelect("schedules_user_properties.user", "user")
    .where("user.id = :id", { id: decodedId })
    .andWhere("schedules_user_properties.hour = :hour", { hour: body.hour })
    .andWhere("schedules_user_properties.date = :date", { date: body.date })
    .getMany();

  if (userScheduleAvaliability.length > 0) {
    throw new AppError(409, "This schedule has exists");
  }

  return next();
};

export default verifyAvailabilityMiddleware;
