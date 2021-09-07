import React from 'react';
import styles from "./todoList.module.scss";

function TodoList ({ tasks }) {

const taskDone = ({target:{style}}) => {
style.textDecoration ? style.textDecoration = "" : style.textDecoration = "line-through";
}

const mappingTasks = (el, i) => (
  <li key={i} onClick={taskDone}>{el} <button>&#9998;</button></li>
);

  return (
    <ul className={styles.itemsList}>
      {tasks.map(mappingTasks)}
    </ul>
  );
}

export default TodoList;
