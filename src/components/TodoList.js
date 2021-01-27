import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = () => {
  const allTodos = useSelector((state) => state.todosList.todos);
  return (
    <div className='todoList'>
      {allTodos &&
        allTodos.map((todo) => <TodoItem id={todo.id} title={todo.title} />)}
    </div>
  );
};

export default TodoList;
