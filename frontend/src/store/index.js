import { createStore } from 'redux';

import db from '../db';
import TasksModule from './modules/Tasks';
import TaskModel from '../models/Task';

export const tasksModule = new TasksModule(new TaskModel(db));

async function initialiseStore() {
    const modules = [
        tasksModule
    ];

    let actions = {};
    let initialState = {};
    
    for (const module of modules) {
        const moduleState = await module.getInitialState();
        actions = { ...module.actions, ...actions };
        initialState = { ...moduleState, ...initialState };
    }

    const store = createStore((state, action) => (
        action && actions[action.type] ? actions[action.type](state, action) : state
    ), initialState, typeof __REDUX_DEVTOOLS_EXTENSION__ === 'function' ? __REDUX_DEVTOOLS_EXTENSION__() : undefined);

    return store;
}

let store;
initialiseStore().then(s => store = s);

export default store;