import { NextFunction, Request, Response } from "express";
import { AnySchema } from "yup";
import { AppError } from "../errors/AppError";

const validateBodyMiddleware =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      req.validatedBody = await schema.validate(req.body, {
        stripUnknown: true,
        abortEarly: false,
      });

      return next();
    } catch (error) {
      if (error instanceof Error) {
        throw new AppError(400, error.message);
      }
    }
  };

export default validateBodyMiddleware;
