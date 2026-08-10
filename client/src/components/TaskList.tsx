import type { Task } from "../types/task";

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: number) => void;
}

export default function TaskList({ tasks, onDelete }: TaskListProps) {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <span>{task.title}</span>
          <button type="button" onClick={() => onDelete(task.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
