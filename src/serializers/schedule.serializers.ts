import * as yup from "yup";
import { SchemaOf } from "yup";
import { IScheduleRequest } from "../interfaces/schedules";

const scheduleRequestBody: SchemaOf<IScheduleRequest> = yup.object().shape({
  date: yup.string().required(),
  hour: yup.string().required(),
  propertyId: yup.string().required(),
  userId: yup.string().notRequired(),
});

export { scheduleRequestBody };
