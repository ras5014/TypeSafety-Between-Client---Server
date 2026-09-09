import { useTodos } from "../../hooks/todos";

export default function TodoList() {
  const { data: todos, isLoading, isError } = useTodos();
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error loading todos.</p>}
      {todos && (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
