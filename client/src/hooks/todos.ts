import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAllTodos, createTodo } from "../api/todos";
import type { CreateTodo } from "shared";
import toast from "react-hot-toast";

export function useTodos() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["todos"],
    queryFn: () => getAllTodos(),
  });
  return { data, isLoading, isError };
}

export function useCreateTodo() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: CreateTodo) => createTodo(input),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      toast.success("Todo created successfully");
    },
    onError: (error) => {
      console.log(error);
      toast.error("Failed to create todo");
    },
  });
}
