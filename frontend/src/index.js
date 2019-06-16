import { Component } from 'preact';
import { Provider } from 'unistore/preact';
import { Menu, PlusSquare, X } from 'react-feather';

import './style';
import store from './store';
import TaskList from './components/TaskList';
import Task from './models/Task';

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div class="wrap">
					<div class="side">
						<div class="taskbar">
							<X />
						</div>
						<div class="content">
							<div class="section">
								<h2>Lists</h2>
								<ul>
									<li class="active">Work</li>
									<li>Side project</li>
									<li>Fitness</li>
								</ul>
							</div>
							<div class="section stats">
								<h2>Stats</h2>
								<div class="item">
									<strong>Level <span>43</span></strong>
									<div class="bar">
										<div class="background"></div>
										<div class="fill" style="width: 65%"></div>
									</div>
								</div>
								<div class="item">
									<strong>XP earned (today) <span>500</span></strong>
								</div>
								<div class="item">
									<strong>XP earned (lifetime) <span>35,250</span></strong>
								</div>
							</div>
							<div class="section records">
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
					<div class="main">
						<div class="hero">
							<div class="taskbar">
								<Menu />
							</div>
							<h1>Dailies</h1>
						</div>
						<div class="tasks">
							<h2>Incomplete</h2>
							<TaskList status={Task.STATUS_INCOMPLETE} />
							<h2>Completed Today</h2>
							<TaskList status={Task.STATUS_COMPLETED} />
						</div>
						<div class="action">
							<button><PlusSquare /> Add</button>
						</div>
					</div>
				</div>
			</Provider>
		);
	}
}
