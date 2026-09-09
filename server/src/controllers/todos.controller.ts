import { Request, Response } from "express";
import { todosService } from "../services/todos.service";
import { AppError } from "../middlewares/errorHandler";
import { TodoParams } from "shared";

export const todosController = {
  list: async (req: Request, res: Response) => {
    res.status(200).json({ todos: await todosService.getAll() });
  },
  getById: async (req: Request<TodoParams>, res: Response) => {
    const todo = await todosService.getById(req.params.id);
    if (!todo) {
      throw new AppError("Todo not found", 404);
    }
    res.status(200).json({ todo });
  },
  create: async (req: Request, res: Response) => {
    res.status(201).json({ todo: await todosService.create(req.body) });
  },
  delete: async (req: Request<TodoParams>, res: Response) => {
    const deleted = await todosService.delete(req.params.id);
    res
      .status(200)
      .json({ message: deleted ? "Deleted successfully" : "Todo not found" });
  },
};
