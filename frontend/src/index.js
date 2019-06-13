import { Component } from 'preact';
import { Menu, PlusSquare, X } from 'react-feather';

import './style';
import db from './db';
import TaskModel from './models/Task';
import TaskList from './components/TaskList';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.tasks = new TaskModel(db);
        this.state = { incompleteTasks: [], completedTasks: [] };
	}

	componentDidMount() {
		this.tasks.getByStatus(TaskModel.STATUS_INCOMPLETE)
			.then(incompleteTasks => this.setState({ incompleteTasks }));
		this.tasks.getByStatus(TaskModel.STATUS_COMPLETED)
			.then(completedTasks => this.setState({ completedTasks }));
	}

	render() {
		return (
			<div className="wrap">
				<div className="side">
					<div className="taskbar">
						<X />
					</div>
					<div className="content">
						<div className="section">
							<h2>Lists</h2>
							<ul>
								<li className="active">Work</li>
								<li>Side project</li>
								<li>Fitness</li>
							</ul>
						</div>
						<div className="section stats">
							<h2>Stats</h2>
							<div class="item">
								<strong>Level <span>43</span></strong>
								<div className="bar">
									<div className="background"></div>
									<div className="fill" style="width: 65%"></div>
								</div>
							</div>
							<div class="item">
								<strong>XP earned (today) <span>500</span></strong>
							</div>
							<div class="item">
								<strong>XP earned (lifetime) <span>35,250</span></strong>
							</div>
						</div>
						<div className="section records">
							<h2>Records</h2>
							<div class="item">
								<strong>Longest streak <span>9 days</span></strong>
							</div>
							<div class="item">
								<strong>Most completions in a day <span>6 tasks</span></strong>
							</div>
						</div>
					</div>
				</div>
				<div className="main">
					<div className="hero">
						<div className="taskbar">
							<Menu />
						</div>
						<h1>Dailies</h1>
					</div>
					<div className="tasks">
						<h2>Incomplete</h2>
						<TaskList tasks={this.state.incompleteTasks} />
						<h2>Completed Today</h2>
						<TaskList tasks={this.state.completedTasks} />
					</div>
					<div className="action">
						<button><PlusSquare /> Add</button>
					</div>
				</div>
			</div>
		);
	}
}
