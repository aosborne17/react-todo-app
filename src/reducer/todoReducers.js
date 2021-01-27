export const todoReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case 'DELETE_TODO':
      return {
        ...state,
        // this method will only return the items that don't match the id of our payload
        // this means only the item we want to remove will be stripped
        todos: state.todos.filter((x) => x.id !== action.payload),
      };

    default:
      return state;
  }
};
