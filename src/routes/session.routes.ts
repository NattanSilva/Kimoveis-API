import { Router } from "express";
import { createSessionController } from "../controllers/session/createSession.controller";
import verifySessionBodyMiddleware from "../middlewares/session/sessionBody.middlware";

const sessionRoutes = Router();

sessionRoutes.post("", verifySessionBodyMiddleware, createSessionController);

export default sessionRoutes;
