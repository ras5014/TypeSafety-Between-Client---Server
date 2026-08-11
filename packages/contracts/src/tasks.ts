import { z } from "zod";

export const TaskSchema = z.object({
  id: z.number(),
  title: z.string().min(1, "Title cannot be empty"),
  completed: z.boolean(),
});

export const CreateTaskSchema = TaskSchema.omit({ id: true, completed: true });

export const DeleteTaskSchema = z.object({
  id: z.coerce.number(),
});

export type Task = z.infer<typeof TaskSchema>;
export type CreateTaskInput = z.infer<typeof CreateTaskSchema>;
export type DeleteTaskInput = z.infer<typeof DeleteTaskSchema>;
