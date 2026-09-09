import TodoList from "./components/custom/TodoList";
import AddTodo from "./components/custom/AddTodo";
function App() {
  return (
    <div>
      <h1>Todos</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
