import { compare } from "bcryptjs";
import "dotenv/config";
import jwt from "jsonwebtoken";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IUserLogin } from "../../interfaces/users";

export const createSessionService = async ({
  email,
  password,
}: IUserLogin): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({
    email,
  });

  if (!user) {
    throw new AppError(401, "Email or password invalid");
  }

  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    throw new AppError(403, "Email or password invalid");
  }

  if (!process.env.SECRET_KEY) {
    throw new AppError(400, "SECRET_KEY is required!");
  }

  const token = jwt.sign({}, process.env.SECRET_KEY, {
    subject: user.id,
    expiresIn: "24H",
  });

  return token;
};
