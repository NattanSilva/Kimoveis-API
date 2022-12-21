import { IUser } from "../../interfaces/users";
import { registResponseBody } from "../../serializers/user.serializers";

export const serializeRegistService = async (
  createdUser: IUser
): Promise<IUser> => {
  const data = await registResponseBody.validate(createdUser, {
    stripUnknown: true,
  });

  return data;
};
