import React from 'react';
import styles from './todoList.module.scss';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

function TodoList ({ tasks, deleteItem }) {
  const taskDone = ({ target: { style } }) => {
    style.textDecoration
      ? (style.textDecoration = '')
      : (style.textDecoration = 'line-through');
  };

  const mappingTasks = (el, i) => (
    <li key={i} onClick={taskDone}>
      {el}
      <button>
        <EditIcon fontSize='small' />
      </button>
      <button onClick={deleteItem}>
        <DeleteIcon fontSize='small' />
      </button>
    </li>
  );

  return <ul className={styles.itemsList}>{tasks.map(mappingTasks)}</ul>;
}

export default TodoList;
