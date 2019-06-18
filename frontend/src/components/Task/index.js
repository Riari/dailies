import { Circle, CheckCircle } from 'react-feather';

import styles from './style';

const Task = ({ children, ...props }) => {
	const icons = {
		0: Circle,
		1: CheckCircle
	};

	const Icon = icons[props.status];

	return (
		<div class={styles.task} data-status={`status-${props.status}`}>
			<div class={styles.summary}>
				<Icon /> {children}
			</div>
			<div class={styles.xp}>
				+{props.bounty} XP
			</div>
		</div>
	);
}

export default Task;