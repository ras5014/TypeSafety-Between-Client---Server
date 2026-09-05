import { z } from "zod";

// Zod Schemas
export const TodoSchema = z.object({
  id: z.string(),
  title: z.string().min(1, "Title must be at least 1 character long"),
  isCompleted: z.boolean(),
});

export const CreateTodoSchema = TodoSchema.omit({
  id: true,
  isCompleted: true,
});

export const UpdateTodoSchema = TodoSchema.partial().omit({ id: true });

// Types
export type Todo = z.infer<typeof TodoSchema>;
export type CreateTodoInput = z.infer<typeof CreateTodoSchema>;
export type UpdateTodoInput = z.infer<typeof UpdateTodoSchema>;
