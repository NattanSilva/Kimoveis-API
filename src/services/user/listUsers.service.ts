import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUser } from "../../interfaces/users";

const listUsersService = async (): Promise<IUser[]> => {
  const userRepository = AppDataSource.getRepository(User);

  const list = await userRepository.find();

  return list;
};

export { listUsersService };
