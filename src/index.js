import './style';
import { Component } from 'preact';
import Task from './components/Task';
import { Menu, PlusSquare, X } from 'react-feather';

export default class App extends Component {
	render() {
		const incompleteTaskData = [
			{ text: 'Do thing', type: 'incomplete' },
			{ text: 'Bla bla bla', type: 'incomplete' },
			{ text: 'Lorem ipsum', type: 'incomplete' },
			{ text: 'Attend pointless meeting', type: 'incomplete' }
		];
		const completedTaskData = [
			{ text: 'Do other thing', type: 'completed' },
			{ text: 'Donate £10 to wedding fund', type: 'completed' }
		]

		const incompleteTasks = [];
		for (let task of incompleteTaskData) {
			incompleteTasks.push(<Task type={task.type}>{task.text}</Task>);
		}

		const completedTasks = [];
		for (let task of completedTaskData) {
			completedTasks.push(<Task type={task.type}>{task.text}</Task>);
		}

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
									<div className="fill"><div class="inner" style="width: 65%"></div></div>
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
						{incompleteTasks}
						<h2>Completed Today</h2>
						{completedTasks}
					</div>
					<div className="action">
						<button><PlusSquare /> Add</button>
					</div>
				</div>
			</div>
		);
	}
}
