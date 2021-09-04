import React, { useState } from 'react';
import TodoHeader from '../../components/TodoHeader';
import TodoInput from '../../components/TodoInput';
import TodoList from '../../components/TodoList';
import styles from './TodoPage.module.scss';

function TodoPage () {
  const [tasksList, setTasksList] = useState([]);
  return (
    <div className={styles.pageContainer}>
      <div className={styles.todoContainer}>
        <TodoHeader count={tasksList.length} />
        <TodoInput getTasks={setTasksList} />
        <TodoList tasks={tasksList} />
      </div>
    </div>
  );
}

export default TodoPage;
