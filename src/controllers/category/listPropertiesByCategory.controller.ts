import {Request, Response} from "express";
import {listPropertiesByCategoryService} from "../../services/category/listPropertiesByCategory.service";


const listPropertiesByCategoryController = async (req: Request, res: Response) => {
    const propertiesList = await listPropertiesByCategoryService(req.params.id);

    return res.status(200).json(propertiesList);
}

export { listPropertiesByCategoryController };