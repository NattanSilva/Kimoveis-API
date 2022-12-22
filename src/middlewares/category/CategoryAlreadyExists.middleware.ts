import { Request, Response, NextFunction} from "express";
import AppDataSource from "../../data-source";
import {Category} from "../../entities/categories.entity";
import {AppError} from "../../errors/AppError";

const verifyCategoryAlreadyExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const{ body } = req;
    const categoryRepository = AppDataSource.getRepository(Category);
    const findCategory = await categoryRepository.findOneBy({
        name: body.name,
    })

    if(findCategory) {
        throw new AppError(409, "Category already exists");
    }

    return next();
}

export default verifyCategoryAlreadyExistsMiddleware;