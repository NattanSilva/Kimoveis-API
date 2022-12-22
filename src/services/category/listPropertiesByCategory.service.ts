import AppDataSource from "../../data-source";
import {Category} from "../../entities/categories.entity";
import {Propertie} from "../../entities/properties.entity";


const listPropertiesByCategoryService = async (categoryId): Promise<Propertie[]> => {
    const categoryRepository = AppDataSource.getRepository(Category);
    const currentCategory = await categoryRepository.findOne({
        where: {
            id: categoryId
        },
        relations: {
            propeties: true
        }
    })

    return currentCategory.propeties;
}

export { listPropertiesByCategoryService };