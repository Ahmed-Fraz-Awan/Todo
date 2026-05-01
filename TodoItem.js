import React from "react";

function TodoItem({ todo, index, onDelete, onToggle }) {
  return (
    <li
      onClick={() => onToggle(index)}
      style={{
        textDecoration: todo.completed ? "line-through" : "none"
      }}
    >
      {todo.text}
      <button onClick={(e) => {
        e.stopPropagation();
        onDelete(index);
      }}>X</button>
    </li>
  );
}

export default TodoItem;