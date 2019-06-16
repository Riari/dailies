import Module from './Module';

class TasksModule extends Module {
    actions = store => ({
        async add(state) {
            const task = await this.model.create(summary, details, bounty);

            return {
                tasks: [task]
            };
        }
    });

    //     {
    //     ADD_TASK: async ({ tasks, ...state }, { summary, details, bounty }) => {
    //         const task = await this.model.create(summary, details, bounty);

    //         return {
    //             tasks: [...tasks, task],
    //             ...state
    //         };
    //     },
    //     GET_TASKS: async ({ _, ...state }) => {
    //         const tasks = await this.model.getAll();

    //         return {
    //             ...tasks,
    //             ...state
    //         };
    //     },
    //     REMOVE_TASK: ({ tasks, ...state }, { task }) => {
    //         this.model.remove(task.id);

    //         return {
    //             tasks: tasks.filter(i => i !== task),
    //             ...state
    //         };
    //     }
    // }

    async getPersistedState() {
        const tasks = await this.model.getAll();
        return { tasks };
    }
}

export default TasksModule;