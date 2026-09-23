import { Router } from "express";
import {
  create,
  getAll,
  getById,
  update,
  remove,
} from "../controllers/todos.controller";
import { validateBody, validateParams } from "../middlewares/validation";
import { createTodoSchema, todoParamsSchema, updateTodoSchema } from "shared";

export const todosRouter = Router();

todosRouter.get("/", getAll);
todosRouter.get("/:id", validateParams(todoParamsSchema), getById);
todosRouter.post("/", validateBody(createTodoSchema), create);
todosRouter.put(
  "/:id",
  validateParams(todoParamsSchema),
  validateBody(updateTodoSchema),
  update,
);
todosRouter.delete("/:id", validateParams(todoParamsSchema), remove);
