import { Router } from "express";
import {createCategoryController, listCategoriesController, listPropertiesByCategoryController} from "../controllers";
import {
    ensureAuthMiddleware,
    validateBodyMiddleware, validateCategoryIdMiddleware,
    verifyCategoryAlreadyExistsMiddleware,
    verifyIsAdmMiddleware
} from "../middlewares";
import {crecategoryRequestBody} from "../serializers/category.serializers";

const categoryRoutes = Router();

categoryRoutes.post("",
     ensureAuthMiddleware,
     verifyIsAdmMiddleware,
     verifyCategoryAlreadyExistsMiddleware,
     validateBodyMiddleware(crecategoryRequestBody),
     createCategoryController
);

categoryRoutes.get("", listCategoriesController);

categoryRoutes.get("/:id/properties", validateCategoryIdMiddleware, listPropertiesByCategoryController);

export default categoryRoutes;