import React, { useState, useContext } from 'react';
import classNames from 'classnames';
import TodoHeader from '../TodoHeader';
import TodoInputForm from '../TodoInputForm';
import TodoList from '../TodoList';
import styles from './TodoContainer.module.scss';
import { ThemeContext } from '../../contexts';

function TodoContainer () {
  const [isLight] = useContext(ThemeContext);

  const dynamicStyle = classNames({
    [styles.todoContainer]: isLight,
    [styles.todoContainerDark]: !isLight,
  });
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
    <div className={dynamicStyle}>
      <TodoHeader count={tasksList.length} />
      <TodoInputForm getNewTask={getNewTask} />
      <TodoList tasks={tasksList} deleteItem={deleteItem} editItem={editItem} />
    </div>
  );
}

export default TodoContainer;
