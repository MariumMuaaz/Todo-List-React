import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import TodoList from './TodoList';
import './Todo.css';

function App() {  
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      const todo = {
        id: uuid(),
        title: newTodo,
        completed: false,
      };
      setTodos([...todos, todo]);
      setNewTodo('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };
  return (
    <div className="App">
      <div className="container">
      <h1 className="title">To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          className="input-field"
          placeholder="Add a new task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className="add-button" onClick={addTodo}>
          Add
        </button>
      </div>
      <TodoList todos={todos} deleteTodo={deleteTodo} completeTodo={completeTodo} />
    </div>
    </div>
  );
}

export default App;
