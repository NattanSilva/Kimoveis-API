import * as express from "express";
import {Category} from "../../entities/categories.entity";

declare global {
  namespace Express {
    interface Request {
      validatedBody: any,
      decodedId: string,
      validatedID: string,
      foundCategory: Category
    }
  }
}
