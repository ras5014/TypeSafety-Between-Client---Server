import { Router } from "express";
import { todosController } from "../controllers/todos.controller";
import { validateBody, validateParams } from "../middlewares/validation";
import { CreateTodoSchema, TodoParamsSchema } from "shared";

export const todosRouter = Router();

todosRouter.get("/", todosController.list);
todosRouter.get(
  "/:id",
  validateParams(TodoParamsSchema),
  todosController.getById,
);
todosRouter.post("/", validateBody(CreateTodoSchema), todosController.create);
todosRouter.delete(
  "/:id",
  validateParams(TodoParamsSchema),
  todosController.delete,
);
