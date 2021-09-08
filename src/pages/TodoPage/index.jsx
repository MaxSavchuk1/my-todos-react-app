import React, { useState } from 'react';
import TodoHeader from '../../components/TodoHeader';
import TodoInput from '../../components/TodoInput';
import TodoList from '../../components/TodoList';
import styles from './TodoPage.module.scss';

function TodoPage () {
  const [tasksList, setTasksList] = useState([]);

  const getNewTask = task => {
    setTasksList([...tasksList, task]);
  };

  const deleteItem = i => {
    const newTasksList = [...tasksList];
    newTasksList.splice(i, 1);
    setTasksList(newTasksList);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.todoContainer}>
        <TodoHeader count={tasksList.length} />
        <TodoInput getNewTask={getNewTask} />
        <TodoList tasks={tasksList} deleteItem={deleteItem} />
      </div>
    </div>
  );
}

export default TodoPage;
