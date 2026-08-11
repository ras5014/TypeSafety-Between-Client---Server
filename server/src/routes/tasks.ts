import { Router } from "express";
import { getAllTasks, createTask, deleteTask } from "../controllers/tasks.ts";
import { validateBody, validateParams } from "../middlewares/validation.ts";
import { CreateTaskSchema, DeleteTaskSchema } from "@task-app/contracts";

const router = Router();

router.get("/", getAllTasks);

router.post("/", validateBody(CreateTaskSchema), createTask);

router.delete("/:id", validateParams(DeleteTaskSchema), deleteTask);

export default router;
