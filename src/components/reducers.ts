import { CREATE_TODO, REMOVE_TODO, SET_TO_DONE } from './actions';
import { Todo } from '../App';

export const todos = (state:Todo[] = [], action: any) => {

    const {type, payload} = action;

    switch(type){
        case CREATE_TODO: {
            const { description } = payload;
            const newTodo: Todo = new Todo(description);
            // state is the array of todos
            // concat does not mutate the array
            // it returns a new one
            return state.concat(newTodo);
        }
        case SET_TO_DONE: {
            const { id } = payload;
    
            const newState = [...state];
            newState[id] = {...newState[id], isDone: true}

            return newState;

        }
        case REMOVE_TODO: {
            const { id: todoId } = payload;

            // I think this findIndex method is much faster
            // than filter
            const index = state.findIndex(({id}) => {
                return id === todoId;
            });

            if(index >= 0){
                const newState = [...state];
                newState.splice(index,1);
                return newState;
            }

            return state;
        }
        default:
            return state;
    }
}