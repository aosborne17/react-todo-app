export const deleteTodo = (id) => async (dispatch, getState) => {
  dispatch({
    type: 'DELETE_TODO',
    payload: id,
  });

  // We then add the new todo items to the state to the local storage, thus the removed item will no longer be present
  localStorage.setItem('todos', JSON.stringify(getState().todosList.todos));
};

export const addTodo = (payload) => async (dispatch, getState) => {
  dispatch({
    type: 'ADD_TODO',
    payload: payload,
  });

  localStorage.setItem('todos', JSON.stringify(getState().todosList.todos));
};
