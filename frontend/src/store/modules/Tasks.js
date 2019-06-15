import Module from './Module';

class TasksModule extends Module {
    ADD_TASK = 'ADD_TASK';
    REMOVE_TASK = 'REMOVE_TASK';

    actions = {
        ADD_TASK: async ({ tasks, ...state }, { summary, details, bounty }) => {
            const task = await this.model.create(summary, details, bounty);

            return {
                tasks: [...tasks, task],
                ...state
            };
        },
        REMOVE_TASK: ({ tasks, ...state }, { task }) => {
            this.model.remove(task.id);

            return {
                tasks: tasks.filter(i => i !== task),
                ...state
            };
        }
    }

    async getInitialState() {
        const tasks = await this.model.getAll();
        return { tasks };
    }
}

export default TasksModule;