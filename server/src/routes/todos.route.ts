import { Router } from "express";
import { todosController } from "../controllers/todos.controller";
import { validateBody } from "../middlewares/validation";
import { CreateTodoSchema } from "shared";

export const todosRouter = Router();

todosRouter.get("/", todosController.list);
todosRouter.post("/", validateBody(CreateTodoSchema), todosController.create);
