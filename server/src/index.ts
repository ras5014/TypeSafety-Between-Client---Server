import express from "express";
import cors from "cors";
import { CreateTaskSchema } from "@task-app/contracts";
import type { Task } from "@task-app/contracts";
import taskRouter from "./routes/tasks.ts";

const app = express();

app.use(cors());
app.use(express.json());

// Get all tasks
app.use("/api/tasks", taskRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
