import TodoList from "./components/custom/TodoList";
import AddTodo from "./components/custom/AddTodo";
function App() {
  const date = new Date().toLocaleDateString();
  return (
    <div className="">
      <h1>Todos - {date}</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
