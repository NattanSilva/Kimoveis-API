import { Router } from "express";
import { listUsersController } from "../controllers/admin/listUsers.controller";
import { softDeleteController } from "../controllers/admin/softDelete.controller";
import { actualizeUserController } from "../controllers/user/actualizeUser.controller";
import { createUserController } from "../controllers/user/createUser.controller";
import verifyActualizeBodyMiddleware from "../middlewares/user/actualizeBody.middleware";
import verifyActualizePermissionsMiddleware from "../middlewares/user/actualizePermissions.middleware";
import verifyIsAdmMiddleware from "../middlewares/user/isAdm.middleware";
import verifyRegistBodyMiddleware from "../middlewares/user/registBody.middleware";
import verifyUserAlreadyExistsMiddleware from "../middlewares/user/userAlredyExists.middleware";
import verifyUserIdIsValidMiddleware from "../middlewares/user/userId.middleware";

const userRoutes = Router();

userRoutes.post(
  "",
  verifyRegistBodyMiddleware,
  verifyUserAlreadyExistsMiddleware,
  createUserController
);

userRoutes.get("", verifyIsAdmMiddleware, listUsersController);

userRoutes.patch(
  "/:id",
  verifyUserIdIsValidMiddleware,
  verifyActualizePermissionsMiddleware,
  verifyActualizeBodyMiddleware,
  actualizeUserController
);

userRoutes.delete("/:id", verifyIsAdmMiddleware, softDeleteController);

export default userRoutes;
