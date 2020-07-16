import { createStore, combineReducers } from 'redux';
import { todos } from './components/reducers';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const reducers = {
    todos
};

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
}

const rootReducer:any = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const configureStore = () => createStore(persistedReducer);
let theWindow:any = window;
const reduxDevTools:any = theWindow.__REDUX_DEVTOOLS_EXTENSION__;

// to include redux dev tools
export const configureStore = () => createStore(
    persistedReducer,
    reduxDevTools && reduxDevTools()
);

// STORE -> Globalized State
// ACTION -> Describes What do you want to do
// REDUCERS -> Describes How your action modifies the store
// DISPATCH -> Execute the action to the reducer

