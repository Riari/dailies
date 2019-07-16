import createStore from 'unistore';
import devtools from 'unistore/devtools';

import db from '../db';
import TasksModule from './modules/Tasks';
import TaskModel from '../models/Task';

export const tasksModule = new TasksModule(new TaskModel(db));

const modules = [
    tasksModule
];

let initialState = {};
let persistedStates = [];

for (const module of modules) {
    initialState = { ...module.initialState, ...initialState };
    persistedStates.push(module.getPersistedState());
}

let store = process.env.NODE_ENV === 'production' ?  createStore(initialState) : devtools(createStore(initialState));

Promise.all(persistedStates).then(states => {
    let persistedState = {};
    for (const state of states) {
        persistedState = { ...state, ...persistedState };        
    }

    store.setState(persistedState);
});

export default store;