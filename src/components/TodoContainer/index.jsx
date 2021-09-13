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
    setTasksList([...tasksList, { value: task, id: Date.now() }]);
  };

  const deleteItem = i => {
    const newTasksList = [...tasksList];
    newTasksList.splice(i, 1);
    setTasksList(newTasksList);
  };

  const [itemToEdit, setItemToEdit] = useState('');
  const editItem = text => {
    setItemToEdit(text);
  };

  return (
    <div className={dynamicStyle}>
      <TodoHeader count={tasksList.length} />
      <TodoInputForm
        getNewTask={getNewTask}
        itemToEdit={''}
        reset={setItemToEdit}
      />
      {itemToEdit && (
        <div className={styles.editTask}>
          <TodoInputForm
            getNewTask={getNewTask}
            itemToEdit={itemToEdit}
            reset={setItemToEdit}
          />
          <span>EDIT YOUR TASK</span>
        </div>
      )}
      <TodoList tasks={tasksList} deleteItem={deleteItem} editItem={editItem} />
    </div>
  );
}

export default TodoContainer;
