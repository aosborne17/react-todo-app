import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../action/todoActions';
import './TodoInput.css';
import { uuid } from 'uuidv4';

const TodoInput = () => {
  const dispatch = useDispatch();
  const [todoInput, setTodoInput] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    const id = uuid();
    dispatch(
      addTodo({
        id: id,
        title: todoInput,
      })
    );
    setTodoInput('');
  };
  return (
    <div className='todoInput'>
      {console.log(todoInput)}
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Add your Todo'
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
      </form>
    </div>
  );
};

export default TodoInput;
