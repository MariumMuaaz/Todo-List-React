import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import './Todo.css';

const TodoItem = ({ todo, deleteTodo, completeTodo }) => {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => completeTodo(todo.id)}
      />
      <span>{todo.title}</span>
      <button className="delete-button" onClick={() => deleteTodo(todo.id)}>
        <FaTrashAlt />
      </button>
    </li>
  );
};

export default TodoItem;