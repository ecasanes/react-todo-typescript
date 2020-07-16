import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
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

export interface ITodo {
  description: string,
  isDone: boolean
}

export class Todo implements ITodo {

  id: any;
  description: string;
  isDone: boolean;

  constructor(description: string = '', isDone: boolean = false) {
    this.id = uuid();
    this.description = description;
    this.isDone = isDone;
  }


}

function App() {

  const todoListArr: Todo[] = [
    new Todo('Send an Email'),
    new Todo('Wash the Dishes')
  ]

  const [todos, setTodos] = useState(todoListArr);

  function addTodo(todo: Todo) {
    setTodos([todo, ...todos])
  }

  useEffect(() => {
    console.log('app todos: ', todos);
  }, [todos])

  return (
    <div>
      <Header />
      <TodoInput addTodo={addTodo} />
      <div id="todo-list-container" className="list-container">
        <TodoList />
      </div>
      <div id="done-list-container" className="list-container">
        <DoneList />
      </div>
    </div>
  );
}

export default App;
