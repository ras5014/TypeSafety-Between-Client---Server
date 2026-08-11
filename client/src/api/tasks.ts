import axios from "axios";

import {
  type TaskResponse,
  type CreateTaskResponse,
  type DeleteTaskResponse,
  CreateTaskSchema,
  TaskResponseSchema,
  CreateTaskResponseSchema,
  DeleteTaskResponseSchema,
} from "@task-app/contracts";

export const getTasks = async (): Promise<TaskResponse> => {
  const response = await axios.get("http://localhost:3000/api/tasks");
  return TaskResponseSchema.parse(response.data);
};

export const addTask = async (title: string): Promise<CreateTaskResponse> => {
  const body = CreateTaskSchema.parse({ title });
  const response = await axios.post("http://localhost:3000/api/tasks", {
    ...body,
  });
  return CreateTaskResponseSchema.parse(response.data);
};

export const deleteTask = async (id: number): Promise<DeleteTaskResponse> => {
  const response = await axios.delete(`http://localhost:3000/api/tasks/${id}`);
  return DeleteTaskResponseSchema.parse(response.data);
};
