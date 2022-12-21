import { Request, Response } from "express";
import { listUsersService } from "../../services/user/listUsers.service";
import { validateUsersListService } from "../../services/user/validateUsersList.service";

const listUsersController = async (req: Request, res: Response) => {
  const list = await listUsersService();
  const listOfUsers = await validateUsersListService(list);
  return res.status(200).json(listOfUsers);
};

export { listUsersController };
