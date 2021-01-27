import './App.css';

import React from 'react';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <div className='app_body'>
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
