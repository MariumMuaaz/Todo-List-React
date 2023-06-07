import React from 'react';
import TodoItem from './TodoItem';
import './Todo.css';

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;