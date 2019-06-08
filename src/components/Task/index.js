import styles from './style';
import { Component } from 'preact';
import { Circle, CheckCircle } from 'react-feather';

export default class Task extends Component {
	render() {
		const icons = {
			'incomplete': Circle,
			'completed': CheckCircle
		};

		const Icon = icons[this.props.type];

		return (
			<div className={styles.task} data-type={this.props.type}>
				<div className={styles.title}>
					<Icon /> {this.props.children}
				</div>
				<div className={styles.xp}>
					+250 XP
				</div>
			</div>
		);
	}
}
