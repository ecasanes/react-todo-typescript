import React from 'react';
import {Todo} from '../App';
import { connect } from 'react-redux';
import { setToDone } from './actions';

interface TodoListProps {
    todos: Todo[],
    onItemChecked: any
}

function TodoList({todos, onItemChecked}:TodoListProps,) {

    const todoList = todos.filter((todo: Todo) => {
        return !todo.isDone;
    })

    function updateChecked(todo: Todo){
        // const newList = list.map(l => Object.assign({}, l));
        console.log('current todo: ', todo);
        todo.isDone = !todo.isDone;
        todos[todo.id] = todo;
        onItemChecked(todo.id);
        console.log('current list after update: ', todos);
    }

    return (
        <div id="todo-list" className="list">
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

const mapStateToProps = (state:any) => ({
    todos: state.todos
});

const mapDispatchToProps = (dispatch: any) => ({
    onItemChecked: (id: any) => dispatch(setToDone(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);