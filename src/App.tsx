import React from 'react';
import Header from './components/Header';
import DoneList from './components/DoneList';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

function App() {

  return (
    <div>
      <Header />
      <TodoInput />
      <TodoList />
      <DoneList />
    </div>
  );
}

export default App;
