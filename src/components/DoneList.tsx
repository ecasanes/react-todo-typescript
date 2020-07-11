import React from 'react';
import {Todo} from '../App';

interface DoneListProps {
    list: Todo[]
}

export default function DoneList({list}:DoneListProps) {

    let doneList: Todo[] = list.filter((todo: Todo) => {
        return todo.isDone;
    });

    return (
        <div id="done-list">
            <h2>Done</h2>
            <ul>
                {doneList.map((todo: Todo, index) => {
                    console.log(index + ': ' + todo.isDone);
                    return (
                        <li key={index} style={{textDecoration:'line-through', fontStyle:'italic'}}>
                            <input type="checkbox" defaultChecked={todo.isDone} disabled/>
                            {todo.description}
                        </li>
                    )
                })}
            </ul>
        </div>
    )

}