import AppDataSource from "../../data-source";
import { Propertie } from "../../entities/properties.entity";

const listSchedulesByPropertyService = async (propertyId: string) => {
  const propertyRepository = AppDataSource.getRepository(Propertie);
};

export { listSchedulesByPropertyService };
