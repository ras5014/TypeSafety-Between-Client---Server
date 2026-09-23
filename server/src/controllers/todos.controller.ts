import { Request, Response } from "express";
import {
  createTodo,
  getAllTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
} from "../services/todos.service";
import { successResponse } from "../utils/responses";

type TodoParams = {
  id: string;
};

export const getAll = async (res: Response) => {
  const todos = await getAllTodos();
  successResponse(res, todos, 200, "Todos retrieved successfully");
};

export const getById = async (req: Request<TodoParams>, res: Response) => {
  const { id } = req.params;
  const todo = await getTodoById(id);
  successResponse(res, todo, 200, "Todo retrieved successfully");
};

export const create = async (req: Request, res: Response) => {
  const todo = await createTodo(req.body);
  successResponse(res, todo, 201, "Todo created successfully");
};

export const update = async (req: Request<TodoParams>, res: Response) => {
  const { id } = req.params;
  const todo = await updateTodo(id, req.body);
  successResponse(res, todo, 200, "Todo updated successfully");
};

export const remove = async (req: Request<TodoParams>, res: Response) => {
  const { id } = req.params;
  const todo = await deleteTodo(id);
  successResponse(res, todo, 200, "Todo deleted successfully");
};
