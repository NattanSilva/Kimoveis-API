import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUser, IUserRequest, IUserUpdate } from "../interfaces/users";

const registBody: SchemaOf<IUserRequest> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  isAdm: yup.boolean().required(),
});

const actualizeBody: SchemaOf<IUserUpdate> = yup.object().shape({
  name: yup.string(),
  email: yup.string().email(),
  password: yup.string().notRequired(),
});

const responseBody: SchemaOf<IUser> = yup.object().shape({
  id: yup.string().required(),
  name: yup.string().required(),
  email: yup.string().required(),
  createdAt: yup.date().required(),
  updatedAt: yup.date().required(),
  isAdm: yup.boolean().required(),
  isActive: yup.boolean(),
});

const requestId = yup.object().shape({
  id: yup.string().uuid(),
});

const listUsersReturn: SchemaOf<IUser[]> = yup.array(responseBody);

export { responseBody, registBody, actualizeBody, listUsersReturn, requestId };
