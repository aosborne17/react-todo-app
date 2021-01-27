import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';

const TodoItem = ({ id, title }) => {
  const dispatch = useDispatch();

  const deleteTodo = () => {
    dispatch(deleteTodo(id));
  };
  return (
    <div className='todoItem'>
      <input type='checkbox' name='' id='' />
      <h2>title goes here</h2>
      <DeleteIcon onClick={deleteTodo} />
    </div>
  );
};

export default TodoItem;
