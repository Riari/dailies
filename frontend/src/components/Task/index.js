import { Component } from 'preact';
import { Circle, CheckCircle } from 'react-feather';

import styles from './style';

export default class Task extends Component {
	render() {
		const icons = {
			0: Circle,
			1: CheckCircle
		};

		const Icon = icons[this.props.status];

		return (
			<div class={styles.task} data-status={`status-${this.props.status}`}>
				<div class={styles.summary}>
					<Icon /> {this.props.children}
				</div>
				<div class={styles.xp}>
					+{this.props.bounty} XP
				</div>
			</div>
		);
	}
}
