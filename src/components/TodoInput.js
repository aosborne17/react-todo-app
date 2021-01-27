import React, { useState } from 'react';
import './TodoInput.css';

const TodoInput = () => {
  const [todoInput, setTodoInput] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className='todoInput'>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Add your Todo' />
      </form>
    </div>
  );
};

export default TodoInput;
