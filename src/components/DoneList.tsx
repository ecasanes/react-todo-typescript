import React from 'react';
import {Todo} from '../App';

interface DoneListProps {
    list: Todo[]
}

export default function DoneList({list}:DoneListProps) {

    return (
        <div id="done-list">
            <h2>Done List</h2>
            <ul>
                {list.map((todo: Todo, index) => <li key={index}>{todo.description}</li>)}
            </ul>
        </div>
    )

}