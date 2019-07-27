import Module from './Module';

class TasksModule extends Module {
  actions = store => {
    return {
      add: async (state) => {
        const task = await this.model.create(summary, details, bounty);

        return {
          tasks: [task]
        };
      },
      update: async (state, task, changes) => {
        const index = state.tasks.indexOf(task);
        if (index !== -1) state.tasks.splice(index, 1);

        await this.model.update(task.id, changes);

        task = { ...task, ...changes };

        return {
          tasks: [...state.tasks, task]
        };
      }
    };
  };

  getPersistedState = async () => {
    const tasks = await this.model.getAll();
    return { tasks };
  }
}

export default TasksModule;
