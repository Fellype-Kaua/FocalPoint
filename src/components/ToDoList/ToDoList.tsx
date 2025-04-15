"use client";

import { useEffect, useState } from "react";
import TasksList from "../TasksList/TasksList";
import axios from "axios";
import styles from "./ToDoList.module.scss";
import Btn from "../Btn/Btn";

interface Task {
  id: number;
  titulo: string;
  checked: boolean;
}

const ToDoList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        const res = await axios.get<Task[]>("http://localhost:3001/tasks");
        setTasks(res.data);
        setError(null);
      } catch (err) {
        setError("Erro ao carregar tarefas. Tente novamente mais tarde.");
        console.error("Erro ao buscar tasks:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const toggleChecked = async (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, checked: !task.checked } : task
    );

    setTasks(updatedTasks);

    try {
      const task = tasks.find((t) => t.id === id);
      await axios.patch(`http://localhost:3001/tasks/${id}`, {
        checked: !task?.checked,
      });
    } catch (err) {
      console.error("Erro ao atualizar task:", err);
      setError("Erro ao atualizar tarefa. Alteração revertida.");
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.toDoList}>
        <h4 className={styles.toDoListTitle}>Suas tarefas de hoje</h4>
        <TasksList
          tasks={tasks.filter((task) => !task.checked)}
          onToggle={toggleChecked}
          loading={loading}
          error={error}
        />

        <h4 className={styles.toDoListTitle}>Tarefas finalizadas</h4>
        <TasksList
          tasks={tasks.filter((task) => task.checked)}
          onToggle={toggleChecked}
          loading={loading}
          error={error}
        />
      </div>
      <Btn
        title="Adicionar nova tarefa"
        func={() => {
          console.log("");
        }}
      ></Btn>
    </section>
  );
};

export default ToDoList;
