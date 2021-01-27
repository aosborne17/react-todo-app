import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
  const allTodos = useSelector((state) => state.todosList.todos);
  return (
    <div>
      {allTodos &&
        allTodos.map((todo) => <TodoItem id={todo.id} title={todo.title} />)}
    </div>
  );
};

export default TodoList;
