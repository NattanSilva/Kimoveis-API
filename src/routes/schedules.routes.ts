import { Router } from "express";
import { createScheludeController } from "../controllers";
import { ensureAuthMiddleware, validateBodyMiddleware, verifyAvailabilityMiddleware, verifyDateMiddleware } from "../middlewares";
import { scheduleRequestBody } from "../serializers/schedule.serializers";

const schedulesRoutes = Router();

schedulesRoutes.post(
  "",
  ensureAuthMiddleware,
  validateBodyMiddleware(scheduleRequestBody),
  verifyAvailabilityMiddleware,
  verifyDateMiddleware,
  createScheludeController
);

export default schedulesRoutes;
