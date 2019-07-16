import { connect } from 'unistore/preact';

import { tasksModule } from '../../store';
import TaskModel from '../../models/Task';
import Task from '../Task';

const filter = (state, props) => {
    const tasks = state.tasks.filter(task => task.status == props.status);
    return { tasks };
}

const TaskList = connect(filter, tasksModule.actions)(
    ({ tasks, update }) => (
        <div class="task-list">
            {tasks.map(task => 
                <Task status={task.status}
                    bounty={task.bounty}
                    onCompleted={() => update(task, { status: TaskModel.STATUS_COMPLETED })}>
                    {task.summary}
                </Task>
            )}
        </div>
    )
);

export default TaskList;