import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./TodoList.css"; 

uuidv4();

export default function TodoList() {
  const [todos, setTodos] = useState([
    { task: "sample task", id: uuidv4(), isDone: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addNewTask = () => {
    if (newTodo.trim() === "") return;
    setTodos([...todos, { task: newTodo, id: uuidv4(), isDone: false }]);
    setNewTodo("");
  };

  const updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const markAllAsDone = () => {
    setTodos(todos.map((todo) => ({ ...todo, isDone: true })));
  };

  const markAsDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: true } : todo
      )
    );
  };

  return (
    <div className="todo-container">
      <h2>odo List</h2>
      <input
        type="text"
        placeholder="Add a task..."
        value={newTodo}
        onChange={updateTodoValue}
        className="todo-input"
      />
      <br />
      <button className="todo-button add-button" onClick={addNewTask}>
        Add Task
      </button>

      <hr className="divider" />
      <h4>Tasks Todo:</h4>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span
              className={`task-text ${todo.isDone ? "done-text" : ""}`}
            >
              {todo.task}
            </span>
            <div>
              <button
                className="todo-button delete-button"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
              <button
                className="todo-button done-button"
                onClick={() => markAsDone(todo.id)}
              >
                Mark As Done
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button
        className="todo-button all-done-button"
        onClick={markAllAsDone}
      >
        Mark All Tasks As Done
      </button>
    </div>
  );
}
