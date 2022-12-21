import { Router } from "express";
import { createSessionController } from "../controllers";
import { validateBodyMiddleware } from "../middlewares";
import { loginRequestBody } from "../serializers/session.serializers";

const sessionRoutes = Router();

sessionRoutes.post(
  "",
  validateBodyMiddleware(loginRequestBody),
  createSessionController
);

export default sessionRoutes;
