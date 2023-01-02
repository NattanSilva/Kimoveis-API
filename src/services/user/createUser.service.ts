import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserRequest } from "../../interfaces/users";

export const createUserService = async (
  userData: IUserRequest
): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);
  const createdUser = userRepository.create(userData);
  await userRepository.save(createdUser);
  return createdUser;
};
