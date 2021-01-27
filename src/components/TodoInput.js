import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../action/todoActions';
import './TodoInput.css';
import { uuid } from 'uuidv4';
import { motion } from 'framer-motion';

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
        isComplete: false,
      })
    );
    setTodoInput('');
  };
  return (
    <motion.div
      animate={{
        scale: [1, 1.2, 1.4, 0.6, 1],
        rotate: [0, 90, 180, 270, 0],
        borderRadius: ['20%', '20%', '50%', '50%', '0%'],
      }}
      className='todoInput'
    >
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Add your Todo'
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
      </form>
    </motion.div>
  );
};

export default TodoInput;
