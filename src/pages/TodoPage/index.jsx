import React, { useState } from 'react';
import TodoHeader from '../../components/TodoHeader';
import TodoInput from '../../components/TodoInput';
import TodoList from '../../components/TodoList';
import styles from './TodoPage.module.scss';

function TodoPage () {
  const [tasksList, setTasksList] = useState([]);

  const newTasksList = [];

  const getNewTask = task => {
    newTasksList.push(task);
    setTasksList([...tasksList, newTasksList]);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.todoContainer}>
        <TodoHeader count={tasksList.length} />
        <TodoInput getNewTask={getNewTask} />
        <TodoList tasks={tasksList} />
      </div>
    </div>
  );
}

export default TodoPage;
