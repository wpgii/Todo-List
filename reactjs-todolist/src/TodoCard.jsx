import React from 'react';

export default function TodoCard({ todo, handleRemoveTodo, index, handleEditTodo }) {
  return (
    <li className="todoItem">
      {todo}
      <div className="actionsContainer">
        <button
          type="button"
          onClick={() => handleEditTodo(index)}
          aria-label={`Edit task at index ${index}`}
        >
          <i className="fa-regular fa-pen-to-square" aria-hidden="true"></i>
        </button>
        <button
          type="button"
          onClick={() => handleRemoveTodo(index)}
          aria-label={`Remove task at index ${index}`}
        >
          <i className="fa-regular fa-trash-can" aria-hidden="true"></i>
        </button>
      </div>
    </li>
  );
}
