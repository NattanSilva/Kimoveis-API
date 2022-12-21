import * as express from "express";

declare global {
  namespace Express {
    interface Request {
      validatedBody: any,
      decodedId: string,
      validatedID: string,
    }
  }
}
