import React from 'react';
import styles from './todoList.module.scss';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

function TodoList ({ tasks, deleteItem, editItem }) {
  const mappingTasks = ({ value, id }, i) => {
    const taskDone = ({ target: { style } }) => {
      style.textDecoration
        ? (style.textDecoration = '')
        : (style.textDecoration = 'line-through');
    };

    const deleteTodo = () => deleteItem(i);
    const editTodo = () => {
      editItem(value);
      deleteItem(i);
    };
    return (
      <li key={id} onClick={taskDone}>
        {value}
        <button onClick={editTodo}>
          <EditIcon fontSize='small' />
        </button>
        <button onClick={deleteTodo}>
          <DeleteIcon fontSize='small' />
        </button>
      </li>
    );
  };
  return <ul className={styles.itemsList}>{tasks.map(mappingTasks)}</ul>;
}

export default TodoList;
