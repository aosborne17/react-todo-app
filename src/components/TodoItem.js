import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../action/todoActions';
import './TodoItem.css';

const TodoItem = ({ id, title }) => {
  const dispatch = useDispatch();

  const removeTodoFromList = () => {
    dispatch(deleteTodo(id));
  };
  return (
    <div className='todoItem'>
      <input type='checkbox' name='' id='' />
      <h2>{title}</h2>
      <DeleteIcon onClick={removeTodoFromList} />
    </div>
  );
};

export default TodoItem;
