import { createStore, combineReducers } from 'redux';
import { todos } from './components/reducers';

const reducers = {
    todos
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);

// STORE -> Globalized State
// ACTION -> Describes What do you want to do
// REDUCERS -> Describes How your action modifies the store
// DISPATCH -> Execute the action to the reducer

