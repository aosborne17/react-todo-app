import './App.css';

import React from 'react';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import useRandomQuote from './hooks/useRandomQuote';

const App = () => {
  // currently constanly running so need to watch sonny's vid to change this
  const quote = useRandomQuote();
  return (
    <div className='app'>
      <Header quote={quote} />
      <div className='app_body'>
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
