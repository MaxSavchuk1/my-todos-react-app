import React from 'react';
import TodoHeader from '../../components/TodoHeader';
import TodoInput from '../../components/TodoInput';
import TodoList from '../../components/TodoList';
import styles from './TodoPage.module.scss';

function TodoPage () {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.todoContainer}>
        <TodoHeader />
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
}

export default TodoPage;
