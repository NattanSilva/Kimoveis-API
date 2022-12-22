import {NextFunction, Request, Response} from "express";
import {AppError} from "../../errors/AppError";
import AppDataSource from "../../data-source";
import {Category} from "../../entities/categories.entity";

const validateCategoryIdMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { params } = req;

    const categoryRepository = AppDataSource.getRepository(Category);
    const findCategory = await  categoryRepository.findOneBy({
        id: params.id as any
    })

    if(!findCategory) {
        throw new AppError(404, "CAtegory not found");
    }

    req.foundCategory = findCategory;

    return next();
}

export default validateCategoryIdMiddleware;