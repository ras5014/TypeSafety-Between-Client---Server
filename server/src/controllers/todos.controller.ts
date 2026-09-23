import { Request, Response } from "express";
import { createTodo } from "../services/todos.service";
import { successResponse } from "../utils/responses";

export const create = async (req: Request, res: Response) => {
  const todo = await createTodo(req.body);
  successResponse(res, todo, 201, "Todo created successfully");
};
