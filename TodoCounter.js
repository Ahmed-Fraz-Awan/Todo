import React from "react";

function TodoCounter({ todos }) {
  const completed = todos.filter(t => t.completed).length;

  return (
    <p>Total: {todos.length} | Completed: {completed}</p>
  );
}

export default TodoCounter;