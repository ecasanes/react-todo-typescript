import React from 'react';
import {Todo} from '../App';

interface TodoListProps {
    list: Todo[]
}

export default function TodoList({list}:TodoListProps) {

    return (
        <div id="todo-list">
            <h2>Todo List</h2>
            <ul>
                {list.map((todo: Todo) => <li key={todo.id}>{todo.description}</li>)}
            </ul>
        </div>
    )

}