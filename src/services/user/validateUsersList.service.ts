import { IUser } from "../../interfaces/users";
import { listUsersReponse } from "../../serializers/user.serializers";

const validateUsersListService = async (list: IUser[]): Promise<IUser[]> => {
  const validatedList = await listUsersReponse.validate(list, {
    stripUnknown: true,
  });

  return validatedList!;
};

export { validateUsersListService };
