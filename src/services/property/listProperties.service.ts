import AppDataSource from "../../data-source";
import { Propertie } from "../../entities/properties.entity";

const listPropertiesService = async () => {
  const propertyRepository = AppDataSource.getRepository(Propertie);

  const findProperty = await propertyRepository.find({
    relations: { address: true, category: true },
  });

  return findProperty;
};

export { listPropertiesService };
