import { Router } from "express";

import {
  actualizeUserController,
  createUserController,
  listUsersController,
  softDeleteController,
} from "../controllers";

import {
  ensureAuthMiddleware,
  validateBodyMiddleware,
  verifyIsAdmMiddleware,
  verifyUpdateBodyMiddleware,
  verifyUpdatePermissionsMiddleware,
  verifyUserAlreadyExistsMiddleware,
  verifyUserIdIsValidMiddleware,
} from "../middlewares";

import {
  registRequestBody,
  updateRequestBody,
} from "../serializers/user.serializers";

const userRoutes = Router();

userRoutes.post(
  "",
  validateBodyMiddleware(registRequestBody),
  verifyUserAlreadyExistsMiddleware,
  createUserController
);

userRoutes.get(
  "",
  ensureAuthMiddleware,
  verifyIsAdmMiddleware,
  listUsersController
);

userRoutes.patch(
  "/:id",
  verifyUpdateBodyMiddleware,
  ensureAuthMiddleware,
  verifyUserAlreadyExistsMiddleware,
  verifyUserIdIsValidMiddleware,
  verifyUpdatePermissionsMiddleware,
  validateBodyMiddleware(updateRequestBody),
  actualizeUserController
);

userRoutes.delete(
  "/:id",
  verifyUserIdIsValidMiddleware,
  ensureAuthMiddleware,
  verifyIsAdmMiddleware,
  softDeleteController
);

export default userRoutes;
