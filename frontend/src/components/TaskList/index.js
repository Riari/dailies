import { connect } from 'unistore/preact';

import Task from '../Task';

const filter = (state, props) => {
    const tasks = state.tasks.filter(task => task.status == props.status);
    return { tasks };
}

const TaskList = connect(filter)(
    ({ tasks }) => (
        <div class="task-list">
            {tasks.map(task => 
                <Task status={task.status} bounty={task.bounty}>{task.summary}</Task>
            )}
        </div>
    )
);

export default TaskList;