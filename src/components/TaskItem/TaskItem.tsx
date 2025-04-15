"use client";
import React from "react";
import styles from "./TaskItem.module.scss";
import Image from "next/image";

type TaskProps = {
  id: number;
  title: string;
  checked: boolean;
  onToggle: (id: number) => void;
};

const TaskItem: React.FC<TaskProps> = ({ id, title, checked, onToggle }) => {

  return (
    <div className={`${styles["task-item"]} ${checked ? styles["task-item--checked"] : ""}`}>
      <input
        type="checkbox"
        id={`task-checkbox-${id}`}
        className={styles["task-item__checkbox-input"]}
        checked={checked}
        onChange={() => onToggle(id)}
      />
      <label
        htmlFor={`task-checkbox-${id}`}
        className={styles["task-item__title"]}
      >
        {title}
      </label>
      <button className={styles["task-item__delete-btn"]}>
        <Image
          src="/images/DeleteIcon.svg"
          alt="Botão de lixeira"
          width={18}
          height={20}
        />
      </button>
    </div>
  );
};

export default TaskItem;
