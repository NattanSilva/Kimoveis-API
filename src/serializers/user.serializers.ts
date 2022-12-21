import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUser, IUserRequest, IUserUpdate } from "../interfaces/users";

const registRequestBody: SchemaOf<IUserRequest> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  isAdm: yup.boolean().required(),
});

const updateRequestBody: SchemaOf<IUserUpdate> = yup.object().shape({
  name: yup.string(),
  email: yup.string().email(),
  password: yup.string().notRequired(),
});

const registResponseBody: SchemaOf<IUser> = yup.object().shape({
  id: yup.string().required(),
  name: yup.string().required(),
  email: yup.string().required(),
  createdAt: yup.date().required(),
  updatedAt: yup.date().required(),
  isAdm: yup.boolean().required(),
  isActive: yup.boolean(),
});

const listUsersReponse: SchemaOf<IUser[]> = yup.array(registResponseBody);

export {
  registRequestBody,
  updateRequestBody,
  registResponseBody,
  listUsersReponse,
};
