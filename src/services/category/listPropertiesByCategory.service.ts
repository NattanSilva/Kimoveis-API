import AppDataSource from "../../data-source";
import { Category } from "../../entities/categories.entity";

const listPropertiesByCategoryService = async (categoryId) => {
  const categoryRepository = AppDataSource.getRepository(Category);
  const currentCategory = await categoryRepository.findOne({
    where: {
      id: categoryId,
    },
    relations: {
      properties: true,
    },
  });

  return currentCategory;
};

export { listPropertiesByCategoryService };
