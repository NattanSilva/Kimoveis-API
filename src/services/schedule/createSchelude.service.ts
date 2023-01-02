import AppDataSource from "../../data-source";
import { Propertie } from "../../entities/properties.entity";
import { Schedules_user_properties } from "../../entities/schedules_user_properties.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IScheduleRequest } from "../../interfaces/schedules";

const createScheludeService = async (
  userId: string,
  scheduleData: IScheduleRequest
) => {
  const { propertyId, date, hour } = scheduleData;

  const userRepository = AppDataSource.getRepository(User);
  const propertyRepository = AppDataSource.getRepository(Propertie);
  const scheduleRepository = AppDataSource.getRepository(
    Schedules_user_properties
  );

  const findUser = await userRepository.findOneBy({
    id: userId,
  });

  if (!findUser) {
    throw new AppError(404, "Invalid user id");
  }

  const findProperty = await propertyRepository.findOneBy({
    id: propertyId as any,
  });

  if (!findProperty) {
    throw new AppError(404, "Invalid property id");
  }

  const createdSchedule = await scheduleRepository.create({
    date,
    hour,
    propertie: findProperty,
    user: findUser,
  });

  await scheduleRepository.save(createdSchedule);

  return "Created schedule";
};

export { createScheludeService };
