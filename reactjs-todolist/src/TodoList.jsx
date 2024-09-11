import React from 'react';
import TodoCard from './TodoCard';

export default function TodoList({ todos, handleRemoveTodo, handleEditTodo }) {
  return (
    <ul className="main">
      {todos.map((todo, index) => (
        <TodoCard
          key={index}
          todo={todo}
          index={index}
          handleRemoveTodo={handleRemoveTodo}
          handleEditTodo={handleEditTodo}
        />
      ))}
    </ul>
  );
}