
import React from 'react';

export default function TodoInput({ handleAddTodo, todoValue, setTodoValue }) {
  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
        placeholder="What needs to be done?"
        aria-label="Todo input"
      />
      <button
        type="button"
        onClick={() => {
          if (!todoValue.trim()) return;
          handleAddTodo(todoValue);
          setTodoValue('');
        }}
        aria-label="Add Todo"
      >
        Add
      </button>
    </header>
  );
}