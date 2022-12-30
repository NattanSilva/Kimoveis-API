import { NextFunction, Request, Response } from "express";
import AppDataSource from "../../data-source";
import { Category } from "../../entities/categories.entity";
import { AppError } from "../../errors/AppError";

const verifyPropertyCategoryIdMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { categoryId } = req.body;
  const categoryRepository = AppDataSource.getRepository(Category);
  const findCategory = await categoryRepository.findOneBy({
    id: categoryId,
  });

  if (!findCategory) {
    throw new AppError(404, "Invalid category ID");
  }

  return next();
};

export default verifyPropertyCategoryIdMiddleware;
