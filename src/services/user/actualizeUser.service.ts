import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUser, IUserUpdate } from "../../interfaces/users";

export const actualizeUserService = async (
  userId: string,
  newData: IUserUpdate
): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(User);
  const userToUpdate = await userRepository.findOneBy({ id: userId });

  const updatedUser = userRepository.create({
    ...userToUpdate,
    ...newData,
  });
  await userRepository.save(updatedUser);

  return updatedUser;
};
