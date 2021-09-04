import React from 'react';
import styles from './TodoHeader.module.scss';

function TodoHeader ({ count }) {
  return (
    <div className={styles.headerContainer}>
      <h2>Todos ({count})</h2>
    </div>
  );
}

export default TodoHeader;
