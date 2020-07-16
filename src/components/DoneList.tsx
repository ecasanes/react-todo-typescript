import React from 'react';
import {Todo} from '../App';
import { connect } from 'react-redux';

interface DoneListProps {
    todos: Todo[]
}

function DoneList({todos}:DoneListProps) {

    let doneList: Todo[] = todos.filter((todo: Todo) => {
        return todo.isDone;
    });

    return (
        <div id="done-list" className="list">
            <h2 className="title">Done</h2>
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

const mapStateToProps = (state: any) => ({
    todos: state.todos
});
const mapDispatchToProps = (state: any) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(DoneList);