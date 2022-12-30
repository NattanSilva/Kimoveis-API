import * as yup from "yup";
import { SchemaOf } from "yup";
import { IAddressRequest, IPropertyRequest } from "../interfaces/properties";

const addresRequestBody: SchemaOf<IAddressRequest> = yup.object().shape({
  district: yup.string().required(),
  zipCode: yup.string().max(8).required(),
  number: yup.string().nullable(),
  city: yup.string().required(),
  state: yup.string().max(2).required(),
});

const propertyRequestBody: SchemaOf<IPropertyRequest> = yup.object().shape({
  value: yup.number().required(),
  size: yup.number().required(),
  address: addresRequestBody,
  categoryId: yup.string().required(),
});

export { addresRequestBody, propertyRequestBody };
