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

    function updateChecked(index: number, todo: Todo){
        const newList = list.map(l => Object.assign({}, l));
        console.log('current todo: ', todo);
        todo.isDone = !todo.isDone;
        newList[index] = todo;
        console.log('current list after update: ', list);
        setTodos(newList)
    }

    return (
        <div id="todo-list">
            <h2>Todo</h2>
            <ul>
                {todoList.map((todo: Todo, index) => {
                    return (
                        <li key={index}>
                            <input type="checkbox" defaultChecked={todo.isDone} onChange={(e) => {
                                updateChecked(index, todo);
                            }} />
                            {todo.description}
                        </li>
                    )
                })}
            </ul>
        </div>
    )

}