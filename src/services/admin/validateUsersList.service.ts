import { IUser } from "../../interfaces/users";
import { listUsersReturn } from "../../serializers/user.serializers";

const validateUsersListService = async (list: IUser[]): Promise<IUser[]> => {
  const validatedList = await listUsersReturn.validate(list, {
    stripUnknown: true,
  });

  return validatedList!;
};

export { validateUsersListService };
