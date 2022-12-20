import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserLogin } from "../interfaces/users";

const loginBody: SchemaOf<IUserLogin> = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export { loginBody };
