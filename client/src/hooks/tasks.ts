import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Task } from "../types/task.ts";
import { getTasks, deleteTask, addTask } from "../api/tasks.ts";

export const useGetTasks = () => {
  const { data, isPending, isError } = useQuery<Task[]>({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });
  return { data, isPending, isError };
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteTask(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: (error) => {
      console.error("Error deleting task:", error);
    },
  });
};

export const useAddtask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (title: string) => addTask(title),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: (error) => {
      console.error("Error adding task:", error);
    },
  });
};
