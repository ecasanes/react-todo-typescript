import React, { useEffect } from 'react';
import {Todo} from '../App';

interface DoneListProps {
    list: Todo[],
    setTodos(todos: Todo[]): void
}

export default function DoneList({list, setTodos}:DoneListProps) {

    // useEffect(() => {
    //     console.log('done list: ', list);
    // }, [list])

    return (
        <div id="done-list">
            <h2>Todo List</h2>
            <ul>
                {list.map((todo: Todo, index) => {
                    console.log(index + ': ' + todo.isDone);
                    return (
                        <li key={index}>
                            <input type="checkbox" defaultChecked={todo.isDone} onChange={e => {
                                console.log('onchange triggered');
                            }} />
                            {todo.description}
                        </li>
                    )
                })}
            </ul>
        </div>
    )

}