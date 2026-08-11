import type { Request, Response } from "express";
import { tasks } from "../data.ts";
import type { Task } from "@task-app/contracts";

export const getAllTasks = (req: Request, res: Response) => {
  res.json(tasks);
};

export const createTask = (req: Request, res: Response) => {
  const { title } = req.body;
  const newTask: Task = {
    id: Date.now(),
    title,
    completed: false,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

export const deleteTask = (req: Request, res: Response) => {
  const { id } = req.params;
  const taskIndex = tasks.findIndex((task) => task.id === Number(id));
  if (taskIndex === -1) {
    res.status(404).json({ error: "Task not found" });
    return;
  }
  tasks.splice(taskIndex, 1);
  res.status(200).json({ success: true });
};
