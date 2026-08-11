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

// API response schema for returning a list of tasks
export const TaskResponseSchema = z.array(TaskSchema);
export const CreateTaskResponseSchema = TaskSchema;
export const DeleteTaskResponseSchema = z.object({
  success: z.literal(true),
});

export type Task = z.infer<typeof TaskSchema>;
export type CreateTaskInput = z.infer<typeof CreateTaskSchema>;
export type DeleteTaskInput = z.infer<typeof DeleteTaskSchema>;
export type TaskResponse = z.infer<typeof TaskResponseSchema>;
export type CreateTaskResponse = z.infer<typeof CreateTaskResponseSchema>;
export type DeleteTaskResponse = z.infer<typeof DeleteTaskResponseSchema>;
