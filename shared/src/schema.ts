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
// If you make it partial then all fields become optional
export const updateTodoSchema = todoSchema
  .omit({
    id: true,
  })
  .partial();

export type UpdateTodo = z.infer<typeof updateTodoSchema>;

// Todo Params Schema
export const todoParamsSchema = z.object({
  id: z.uuid(),
});

export type TodoParams = z.infer<typeof todoParamsSchema>;
