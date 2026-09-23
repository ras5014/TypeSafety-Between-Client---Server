import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { createTodoSchema, type CreateTodo } from "shared";
import { useCreateTodo } from "../../hooks/todos";

export default function AddTodo() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CreateTodo>({
    defaultValues: {
      title: "",
    },
    resolver: zodResolver(createTodoSchema),
  });

  const { mutateAsync: createTodo } = useCreateTodo();

  const onSubmit: SubmitHandler<CreateTodo> = async (input: CreateTodo) => {
    await createTodo(input);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title")} />
      {errors.title && <span>{errors.title.message}</span>}
      <button type="submit" disabled={isSubmitting}>
        Add Todo
      </button>
    </form>
  );
}
