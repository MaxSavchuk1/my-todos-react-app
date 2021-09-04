import React from 'react';

function TodoList ({ tasks }) {
  console.log(tasks);

  return (
    <ul>
      {/* {tasks.map((el, i) => (
        <li key={i}>{el}</li>
      ))} */}
    </ul>
  );
}

export default TodoList;
