import { z } from "zod";

// Todo Schema
export const todoSchema = z.object({
  id: z.uuid(),
  title: z.string().min(1, "Title must be at least 1 character long"),
  isCompleted: z.boolean(),
});

export type Todo = z.infer<typeof todoSchema>;

// Create Todo Schema
export const createTodoSchema = todoSchema.omit({
  id: true,
  isCompleted: true,
});

export type CreateTodo = z.infer<typeof createTodoSchema>;

// Update Todo Schema
export const updateTodoSchema = z.object({
  id: z.uuid(),
  title: z
    .string()
    .min(1, "Title must be at least 1 character long")
    .optional(),
  isCompleted: z.boolean().optional(),
});

export type UpdateTodo = z.infer<typeof updateTodoSchema>;
