import { Component } from 'preact';

import Task from '../Task';

export default class TaskList extends Component {
	render() {
        const tasks = [];
        for (let task of this.props.tasks) {
            tasks.push(<Task status={task.status} bounty={task.bounty}>{task.summary}</Task>);
        }

		return (
			<div className="task-list">
                {tasks}
			</div>
		);
	}
}
