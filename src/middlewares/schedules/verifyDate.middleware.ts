import { NextFunction, Request, Response } from "express";

const verifyDateMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { date } = req.body;

  if(date.match()){}
};

export default verifyDateMiddleware;
