import { Router } from "express";
import {
  createScheludeController,
  listSchedulesByPropertyController,
} from "../controllers";

import {
  ensureAuthMiddleware,
  validateBodyMiddleware,
  verifyAvailabilityMiddleware,
  verifyHourMiddleware,
  verifyIsAdmMiddleware,
  verifyPropertyIdMiddleware,
} from "../middlewares";

import { scheduleRequestBody } from "../serializers/schedule.serializers";

const schedulesRoutes = Router();

schedulesRoutes.post(
  "",
  ensureAuthMiddleware,
  validateBodyMiddleware(scheduleRequestBody),
  verifyPropertyIdMiddleware("body"),
  verifyAvailabilityMiddleware,
  verifyHourMiddleware,
  createScheludeController
);

schedulesRoutes.get(
  "/properties/:id",
  ensureAuthMiddleware,
  verifyIsAdmMiddleware,
  verifyPropertyIdMiddleware("params"),
  listSchedulesByPropertyController
);

export default schedulesRoutes;
