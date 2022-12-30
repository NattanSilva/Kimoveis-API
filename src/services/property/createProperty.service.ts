import AppDataSource from "../../data-source";
import { Address } from "../../entities/addresses.entity";
import { Category } from "../../entities/categories.entity";
import { Propertie } from "../../entities/properties.entity";
import { AppError } from "../../errors/AppError";
import { IPropertyRequest } from "../../interfaces/properties";

const createPropertyService = async (
  propertyData: IPropertyRequest
): Promise<Propertie> => {
  const { categoryId, size, value, address } = propertyData;

  const propertyRepository = AppDataSource.getRepository(Propertie);
  const addressRepository = AppDataSource.getRepository(Address);
  const categoryRepository = AppDataSource.getRepository(Category);

  const findCategory = await categoryRepository.findOneBy({
    id: categoryId as any,
  });

  const createdAddress = addressRepository.create(address);
  await addressRepository.save(createdAddress);

  const createdProperty = propertyRepository.create({
    size,
    value,
    address: createdAddress,
    category: [findCategory],
  });

  await propertyRepository.save(createdProperty);

  return createdProperty;
};

export { createPropertyService };
