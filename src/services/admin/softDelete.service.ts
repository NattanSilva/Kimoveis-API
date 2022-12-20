import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

const softDeleteService = async (userId: string): Promise<void> => {
  const userRepository = AppDataSource.getRepository(User);
  const userFind = await userRepository.findOneBy({ id: userId });

  if (!userFind) {
    throw new AppError(404, "User not found");
  }

  if (!userFind.isActive) {
    throw new AppError(400, "User is already inactive");
  }

  const userToDelete = userRepository.create({
    ...userFind,
    isActive: false,
  });
  await userRepository.save(userToDelete);
};

export { softDeleteService };
