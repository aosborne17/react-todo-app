import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { todoReducer } from './reducer/todoReducers';

const reducer = combineReducers({
  todosList: todoReducer,
});

const todosFromStorage = localStorage.getItem('todos')
  ? JSON.parse(localStorage.getItem('todos'))
  : [];
const initialState = {
  // the cart reducer could have borth the cart items and the shipping address pulled in from local storage
  todosList: {
    todos: todosFromStorage,
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
