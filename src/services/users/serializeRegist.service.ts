import { IUser } from "../../interfaces/users";
import { responseBody } from "../../serializers/user.serializers";

export const serializeRegistService = async (createdUser: IUser): Promise<IUser> => {
  const data = await responseBody.validate(createdUser, { stripUnknown: true });

  return data;
};

