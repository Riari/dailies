import { X } from 'react-feather';

import styles from './style';
import { classList } from '../../utils';

const Modal = ({ children, ...props }) => {
    let classes = ['modal'];
    
    classes.push('active');

    return (
        <div class={classList(classes, styles)}>
            <div class={styles.inner}>
                <div class={styles.dialog}>
                    <div class={styles.title}>
                        <span>{props.title}</span>
                        <span><X /></span>
                    </div>
                    <div class={styles.content}>
                        {children}
                    </div>
                    <div class={styles.actions}>
                        <button>Cancel</button> <button>OK</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;