import express from "express";
import cors from "cors";
import type { Task, CreateTaskRequest } from "./types/task.ts";

const app = express();

app.use(cors());
app.use(express.json());

let tasks: Task[] = [
  {
    id: 1,
    title: "Learn TypeScript",
    completed: false,
  },
  {
    id: 2,
    title: "Build Task Manager",
    completed: false,
  },
];

// Get all tasks
app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

// Create a new task
app.post("/api/tasks", (req, res) => {
  const { title }: CreateTaskRequest = req.body;
  const newtask: Task = {
    id: Date.now(),
    title,
    completed: false,
  };
  tasks.push(newtask);
  res.status(201).json(newtask);
});

app.delete("/api/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  tasks = tasks.filter((task) => task.id !== taskId);
  res.status(204).send();
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
