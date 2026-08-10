import TaskForm from "./components/TaskForm.tsx";
import TaskList from "./components/TaskList.tsx";
import { useGetTasks, useDeleteTask, useAddtask } from "./hooks/tasks.ts";

function App() {
  const { data: tasks = [], isPending, isError } = useGetTasks();

  const { mutate: deleteTask } = useDeleteTask();
  const { mutate: handleAdd } = useAddtask();

  if (isPending) return <p>Loading tasks...</p>;
  if (isError) return <p>Error loading tasks.</p>;

  return (
    <>
      <h1>Tasks Manager</h1>
      <TaskForm onAdd={handleAdd} />
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </>
  );
}

export default App;
