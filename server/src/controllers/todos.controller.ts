import { Request, Response } from "express";
import { createTodo, getAllTodos } from "../services/todos.service";
import { successResponse } from "../utils/responses";

export const getAll = async (req: Request, res: Response) => {
  const todos = await getAllTodos();
  successResponse(res, todos, 200, "Todos retrieved successfully");
};

export const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  //   const todo = await getTodoById(id);
  //   successResponse(res, todo, 200, "Todo retrieved successfully");
};

export const create = async (req: Request, res: Response) => {
  const todo = await createTodo(req.body);
  successResponse(res, todo, 201, "Todo created successfully");
};
