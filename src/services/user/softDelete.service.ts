import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

const softDeleteService = async (userId: string): Promise<void> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id: userId });

  if (!user!.isActive) {
    throw new AppError(400, "User is already inactive");
  }

  const userToDelete = userRepository.create({
    ...user,
    isActive: false,
  });
  
  await userRepository.save(userToDelete);
};

export { softDeleteService };
