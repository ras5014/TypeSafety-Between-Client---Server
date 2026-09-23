import api from "../lib/axios";
import {
  type CreateTodo,
  type UpdateTodo,
  type TodosResponse,
  type TodoResponse,
  todosResponseSchema,
  todoResponseSchema,
} from "shared";

export const getAllTodos = async (): Promise<TodosResponse> => {
  const res = await api.get("/todos");
  todosResponseSchema.parse(res.data);
  return res.data;
};

export const getTodoById = async (id: string): Promise<TodoResponse> => {
  const res = await api.get(`/todos/${id}`);
  todoResponseSchema.parse(res.data);
  return res.data;
};

export const createTodo = async (input: CreateTodo): Promise<TodoResponse> => {
  const res = await api.post("/todos", input);
  todoResponseSchema.parse(res.data);
  return res.data;
};

export const updateTodo = async (
  id: string,
  input: UpdateTodo,
): Promise<TodoResponse> => {
  const res = await api.put(`/todos/${id}`, input);
  todoResponseSchema.parse(res.data);
  return res.data;
};

export const deleteTodo = async (id: string): Promise<TodoResponse> => {
  const res = await api.delete(`/todos/${id}`);
  todoResponseSchema.parse(res.data);
  return res.data;
};
