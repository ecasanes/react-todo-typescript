import React, { useState } from 'react';
import { ITodo, Todo } from '../App';
import { connect } from 'react-redux';
import { createTodo } from './actions';

// connect is a higher order function

interface TodoInputProps {
    addTodo: any,
    todos: Todo[],
    onCreatePressed: any
}

function TodoInput({addTodo, todos, onCreatePressed}:TodoInputProps) {


    const todoObj: ITodo = new Todo();
    const [todo, setTodo] = useState(todoObj);

    function submitTodo(event: React.FormEvent) {
        // prevent default browser form submit functionality
        event.preventDefault();
        const {description} = todo;
        onCreatePressed(description);
        console.log('todoObj: ', todoObj);
        setTodo(todoObj);
        console.log(todos);
    }

    function handleTodoChange(event: React.ChangeEvent<HTMLInputElement>) {
        setTodo({...todo, description: event.target.value});
    }

    return (
        <form id="todo-input" onSubmit={submitTodo}>
            <p>What do you want to do?</p>
            <input type="text" name="todo" value={todo.description} onChange={handleTodoChange} />
            <button type="submit">Add</button>
        </form>
    )

}

const mapStateToProps = (state:any) => ({
    // it automatically maps to component props as todos
    todos: state.todos
});
const mapDispatchToProps = (dispatch:any) => ({
    // much like map an event
    onCreatePressed: (description:string) => dispatch(createTodo(description))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);