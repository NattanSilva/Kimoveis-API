import { Router } from "express";
import { listPropertiesController } from "../controllers";
import { createPropertyController } from "../controllers/property/createProperty.controller";
import {
  ensureAuthMiddleware,
  validateBodyMiddleware,
  verifyAddressAlreadyExists,
  verifyIsAdmMiddleware,
  verifyPropertyCategoryIdMiddleware,
} from "../middlewares";
import { propertyRequestBody } from "../serializers/property.serializers";

const propertyRoutes = Router();

propertyRoutes.post(
  "",
  ensureAuthMiddleware,
  verifyIsAdmMiddleware,
  validateBodyMiddleware(propertyRequestBody),
  verifyAddressAlreadyExists,
  verifyPropertyCategoryIdMiddleware,
  createPropertyController
);

propertyRoutes.get("", listPropertiesController);

export default propertyRoutes;
