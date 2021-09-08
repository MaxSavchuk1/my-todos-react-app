import React, { useState } from 'react';
import ThemeSwitcher from '../../components/ThemeSwitcher';
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

  const editItem = text => {
    console.log(text); //еще думаю, как реализовать редактирование
  };

  return (
    <div className={styles.pageContainer}>
      <ThemeSwitcher />
      <div className={styles.todoContainer}>
        <TodoHeader count={tasksList.length} />
        <TodoInput getNewTask={getNewTask} />
        <TodoList
          tasks={tasksList}
          deleteItem={deleteItem}
          editItem={editItem}
        />
      </div>
    </div>
  );
}

export default TodoPage;
