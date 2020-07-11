import React from 'react';
import {Todo} from '../App';

interface TodoListProps {
    list: Todo[],
    setTodos(todos: Todo[]):void
}

export default function TodoList({list, setTodos}:TodoListProps) {

    const todoList = list.filter((todo: Todo) => {
        return !todo.isDone;
    })

    function updateChecked(todo: Todo){
        // const newList = list.map(l => Object.assign({}, l));
        console.log('current todo: ', todo);
        todo.isDone = !todo.isDone;
        list[todo.id] = todo;
        console.log('current list after update: ', list);
        setTodos([...list])
    }

    return (
        <div id="todo-list">
            <h2 className="title">Todo</h2>
            <ul>
                {todoList.map((todo: Todo) => {
                    return (
                        <li key={todo.id}>
                            <input type="checkbox" defaultChecked={todo.isDone} onChange={(e) => {
                                updateChecked(todo);
                            }} />
                            {todo.description}
                        </li>
                    )
                })}
            </ul>
        </div>
    )

}