import verifyCategoryAlreadyExistsMiddleware from "./category/CategoryAlreadyExists.middleware";
import validateCategoryIdMiddleware from "./category/validateCategoryId.middleware";
import verifyAddressAlreadyExists from "./property/verifyAddressAlreadyexists.middleware";
import verifyPropertyCategoryIdMiddleware from "./property/verifyPropertyCategoryId.middleware";
import ensureAuthMiddleware from "./session/ensureAuth.middleware";
import verifyIsAdmMiddleware from "./user/isAdm.middleware";
import verifyUpdateBodyMiddleware from "./user/updateBody.middleware";
import verifyUpdatePermissionsMiddleware from "./user/updatePermissions.middleware";
import verifyUserAlreadyExistsMiddleware from "./user/userAlredyExists.middleware";
import verifyUserIdIsValidMiddleware from "./user/userId.middleware";
import validateBodyMiddleware from "./validateBody.middleware";

export {
  ensureAuthMiddleware,
  verifyUpdateBodyMiddleware,
  verifyUpdatePermissionsMiddleware,
  verifyIsAdmMiddleware,
  verifyUserAlreadyExistsMiddleware,
  verifyUserIdIsValidMiddleware,
  validateBodyMiddleware,
  verifyCategoryAlreadyExistsMiddleware,
  validateCategoryIdMiddleware,
  verifyAddressAlreadyExists,
  verifyPropertyCategoryIdMiddleware,
};
