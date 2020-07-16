export const CREATE_TODO = 'CREATE_TODO';
export const createTodo = (description:string) => ({
    type: CREATE_TODO,
    payload: { description }
});

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = (id:any) => ({
    type: REMOVE_TODO,
    payload: { id }
});

export const SET_TO_DONE = 'SET_TO_DONE';
export const setToDone = (id: any) => ({
    type: SET_TO_DONE,
    payload: { id }
})

