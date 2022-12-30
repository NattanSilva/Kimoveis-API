import { NextFunction, Request, Response } from "express";
import AppDataSource from "../../data-source";
import { Address } from "../../entities/addresses.entity";
import { AppError } from "../../errors/AppError";

const verifyAddressAlreadyExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { address } = req.body;
  const addressRespository = AppDataSource.getRepository(Address);
  const findAddress = await addressRespository.findOne({
    where: {
      city: address.city,
      state: address.state,
      district: address.district,
      number: address.number,
      zipCode: address.zipCode,
    },
  });

  if (findAddress) {
    throw new AppError(409, "Address already exists");
  }

  return next();
};

export default verifyAddressAlreadyExists;
