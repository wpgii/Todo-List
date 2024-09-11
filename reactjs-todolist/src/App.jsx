import React, { useState, useEffect } from "react";
import TodoInput from "./TodoInput.jsx";
import TodoList from "./TodoList.jsx";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  function persistData(todos) {
    try {
      localStorage.setItem("todos", JSON.stringify(todos));
    } catch (error) {
      console.error("Error saving to localStorage", error);
    }
  }

  function handleAddTodo(newTodo) {
    const trimmedTodo = newTodo.trim();
    if (!trimmedTodo || todos.includes(trimmedTodo)) return;

    const newTodos = [...todos, trimmedTodo];
    console.log("Adding todo:", newTodo); // Debug
    console.log("New todos list:", newTodos); // Debug
    setTodos(newTodos);
    persistData(newTodos);
  }

  function handleRemoveTodo(index) {
    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
    persistData(newTodos);
  }

  function handleEditTodo(index) {
    const valueToEdit = todos[index];
    setTodoValue(valueToEdit);
    handleRemoveTodo(index);
  }

  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);

  return (
    <>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodo={handleAddTodo}
      />
      <TodoList
        todos={todos}
        handleRemoveTodo={handleRemoveTodo}
        handleEditTodo={handleEditTodo}
      />
    </>
  );
}

export default App;