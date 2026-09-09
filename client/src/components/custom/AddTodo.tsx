import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { CreateTodoSchema, type CreateTodoInput } from "shared";
import { useCreateTodo } from "../../hooks/todos";

export default function AddTodo() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CreateTodoInput>({
    defaultValues: {
      title: "",
    },
    resolver: zodResolver(CreateTodoSchema),
  });

  const { mutateAsync: createTodo } = useCreateTodo();

  const onSubmit: SubmitHandler<CreateTodoInput> = async (
    input: CreateTodoInput,
  ) => {
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
