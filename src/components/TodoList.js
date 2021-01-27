import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import './TodoList.css';
import FlipMove from 'react-flip-move';

const TodoList = () => {
  const allTodos = useSelector((state) => state.todosList.todos);
  console.log(allTodos);
  return (
    <div className='todoList'>
      <FlipMove>
        {allTodos &&
          allTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              isComplete={todo.isComplete}
            />
          ))}
      </FlipMove>
    </div>
  );
};

export default TodoList;
