import { Router } from "express";
import { create } from "../controllers/todos.controller";
import { validateBody, validateParams } from "../middlewares/validation";
import { createTodoSchema } from "shared";

export const todosRouter = Router();

// todosRouter.get("/", todosController.list);
// todosRouter.get(
//   "/:id",
//   validateParams(TodoParamsSchema),
//   todosController.getById,
// );
todosRouter.post("/", validateBody(createTodoSchema), create);
// todosRouter.delete(
//   "/:id",
//   validateParams(TodoParamsSchema),
//   todosController.delete,
// );
