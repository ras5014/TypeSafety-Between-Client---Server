import { useDeleteTodo, useTodos } from "../../hooks/todos";

export default function TodoList() {
  const { data: todos, isLoading, isError } = useTodos();
  const deleteTodo = useDeleteTodo();
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error loading todos.</p>}
      {todos && (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {todos.map((todo) => (
            <li key={todo.id} className="">
              <input
                className="mr-2 "
                type="checkbox"
                onChange={() => deleteTodo.mutate(todo.id)}
              />
              {todo.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
