import React, { forwardRef } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import {
  deleteTodo,
  editCompleteTodo,
  editTodoTitle,
} from '../action/todoActions';
import './TodoItem.css';
import { Checkbox } from '@material-ui/core';

const messageVariant = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0px',
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};

const TodoItem = forwardRef(({ id, title, isComplete }, ref) => {
  const dispatch = useDispatch();

  const removeTodoFromList = () => {
    dispatch(deleteTodo(id));
  };

  const editTitle = ({ target: { value } }) => {
    console.log(value);
    dispatch(
      editTodoTitle({
        id: id,
        title: value,
        isComplete: isComplete,
      })
    );
  };

  const completeTodo = ({ target: { checked } }) => {
    console.log(checked);
    dispatch(
      editCompleteTodo({
        id: id,
        title: title,
        isComplete: checked,
      })
    );
  };
  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate='visible'
      variants={messageVariant}
      whileHover={{ scale: 1.1 }}
      className={isComplete ? 'todoItem complete' : 'todoItem'}
    >
      <Checkbox
        className='todoItem__checkbox'
        size='small'
        checked={isComplete}
        onChange={completeTodo}
      />

      <input
        className='todoItem__title'
        type='text'
        value={title}
        onChange={editTitle}
      />
      <DeleteIcon
        className='todoItem__deleteIcon'
        onClick={removeTodoFromList}
      />
    </motion.div>
  );
});

export default TodoItem;
