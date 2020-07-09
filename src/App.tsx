import React, { useState, useEffect } from 'react';
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

  description: string;
  isDone: boolean;

  constructor(description?: string, isDone?: boolean){

      if(typeof description === 'undefined' || description === null){
          this.description = '';
      }else{
          this.description = description;
      }
      
      
      if(typeof isDone === 'undefined' || isDone === null){
          this.isDone = false;
      }else{
          this.isDone = isDone;
      }
      
  }

}

function App() {

  const todoListArr: Todo[] = [
    new Todo('Send an Email'),
    new Todo('Wash the Dishes', true)
  ]
  
  const [todos, setTodos] = useState(todoListArr);
  
  function addTodo(todo: Todo) {
    setTodos([todo, ...todos])
  }

  useEffect(() =>{
    console.log('app todos: ', todos);
  }, [todos])

  return (
    <div>
      <Header/>
      <TodoInput list={todos} addTodo={addTodo}/>
      <TodoList list={todos} setTodos={setTodos}/>
      <DoneList list={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
