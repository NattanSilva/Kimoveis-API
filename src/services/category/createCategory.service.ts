import {ICategoryRequest} from "../../interfaces/categories";
import AppDataSource from "../../data-source";
import {Category} from "../../entities/categories.entity";

const createCategoryService = async (catedoryData: ICategoryRequest): Promise<Category> => {
    const categoryRepository = AppDataSource.getRepository(Category);
    const createdCategory = await categoryRepository.create(catedoryData);
    await categoryRepository.save(createdCategory);

    return createdCategory;
}

export {createCategoryService};