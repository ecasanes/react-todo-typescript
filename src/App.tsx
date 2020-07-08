import React from 'react';
import Header from './components/Header';
import DoneList from './components/DoneList';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

// TODO:
// Simple props based component communication
// Context API
// Redux

// Props based communication

export interface Todo {
  id: number
  description: string,
  isDone: boolean
}

const todoListArr: Todo[] = [
  {
    id: 1,
    description: "Send an Email",
    isDone: false
  },
  {
    id: 2,
    description: "Wash the Dishes",
    isDone: false
  }
]

function App() {
  return (
    <div>
      <Header/>
      <TodoInput/>
      <TodoList list={todoListArr}/>
      <DoneList/>
    </div>
  );
}

export default App;
