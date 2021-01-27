export const todoReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        // important to add the new item first so it will appear at the top of the list
        todos: [action.payload, ...state.todos],
      };

    case 'DELETE_TODO':
      return {
        ...state,
        // this method will only return the items that don't match the id of our payload
        // this means only the item we want to remove will be stripped
        todos: state.todos.filter((x) => x.id !== action.payload),
      };
    case 'EDIT_COMPLETE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if (todo.id == action.payload.id) {
            return {
              id: action.payload.id,
              title: action.payload.title,
              isComplete: action.payload.isComplete,
            };
          }
          return todo;
        }),
      };

    case 'EDIT_TITLE_TODO':
      return {
        // note this is not the best way as we are mutating the state which is bad practice
        ...state,
        todos: state.todos.map((todo, index) => {
          if (todo.id == action.payload.id) {
            return {
              id: action.payload.id,
              title: action.payload.title,
              isComplete: action.payload.isComplete,
            };
          }
          return todo;
        }),
      };

    default:
      return state;
  }
};
