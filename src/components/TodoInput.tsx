import React, { useState } from 'react';
import { ITodo, Todo } from '../App';

interface TodoInputProps {
    addTodo: any,
    list: Todo[]
}

export default function TodoInput({addTodo, list}:TodoInputProps) {


    const todoObj: ITodo = new Todo();
    const [todo, setTodo] = useState(todoObj);

    function submitTodo(event: React.FormEvent) {
        // prevent default browser form submit functionality
        event.preventDefault();
        
        addTodo(todo);
        console.log('todoObj: ', todoObj);
        setTodo(todoObj);
        console.log(list);
    }

    function handleTodoChange(event: React.ChangeEvent<HTMLInputElement>) {
        setTodo({...todo, description: event.target.value});
    }

    return (
        <form id="todo-form" onSubmit={submitTodo}>
            <input type="text" name="todo" value={todo.description} onChange={handleTodoChange} />
            <button type="submit">Add</button>
        </form>
    )

}