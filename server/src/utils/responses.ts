import { Response } from "express";

export const successResponse = <T>(
  res: Response,
  data: T,
  statusCode: number = 200,
  message: string = "Request was successful",
) => {
  res.status(statusCode).json({
    status: "success",
    message,
    data,
  });
};

export const errorResponse = (
  res: Response,
  statusCode: number = 500,
  message: string = "An error occurred",
) => {
  res.status(statusCode).json({
    status: "error",
    message,
  });
};
