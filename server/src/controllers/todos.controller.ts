import { Request, Response } from "express";
import { todosService } from "../services/todos.service";

export const todosController = {
  list: async (req: Request, res: Response) => {
    res.status(200).json({ todos: await todosService.getAll() });
  },
  create: async (req: Request, res: Response) => {
    res.status(201).json({ todo: await todosService.create(req.body) });
  },
};
