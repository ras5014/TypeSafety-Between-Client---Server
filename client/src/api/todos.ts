import api from "../lib/axios";
import type { Todo, CreateTodoInput } from "shared";

export const todosApi = {
  list: async (): Promise<Todo[]> => {
    const res = await api.get<{ todos: Todo[] }>("/todos");
    return res.data.todos;
  },
  getById: async (id: string): Promise<Todo> => {
    const res = await api.get<{ todo: Todo }>(`/todos/${id}`);
    return res.data.todo;
  },
  create: async (input: CreateTodoInput) => {
    const res = await api.post<{ todo: Todo }>("/todos", input);
    return res.data.todo;
  },
  delete: async (id: string): Promise<{ message: string }> => {
    const res = await api.delete<{ message: string }>(`/todos/${id}`);
    return res.data;
  },
};
