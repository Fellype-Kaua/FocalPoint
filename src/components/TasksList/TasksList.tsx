"use client";

import TaskItem from "../TaskItem/TaskItem";
import styles from "./TasksList.module.scss";

interface Task {
  id: number;
  titulo: string;
  checked: boolean;
}

interface TasksListProps {
  tasks: Task[];
  onToggle: (id: number) => void;
  loading: boolean;
  error: string | null;
}

const TasksList = ({ tasks, onToggle, loading, error }: TasksListProps) => {
  return (
    <section className={styles.tasksList}>
      {loading && <p>Carregando tarefas...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && tasks.length === 0 && <p>Nenhuma tarefa encontrada.</p>}
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          title={task.title}
          checked={task.checked}
          onToggle={onToggle}
        />
      ))}
    </section>
  );
};

export default TasksList;
