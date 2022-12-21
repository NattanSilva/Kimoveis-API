import { NextFunction, Request, Response } from "express";
import { AnySchema } from "yup";

const validateBodyMiddleware =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    req.validatedBody = await schema.validate(req.body, {
      stripUnknown: true,
      abortEarly: false
    })

    return next();
  };

  export default validateBodyMiddleware;