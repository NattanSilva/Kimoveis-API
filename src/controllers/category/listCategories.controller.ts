import {Request, Response} from "express";
import {listCategoriesService} from "../../services/category/listCategories.service";

const listCategoriesController = async (req: Request, res: Response) => {
    const categoriesList =  await listCategoriesService();

    return res.status(200).json(categoriesList);
}

export { listCategoriesController };