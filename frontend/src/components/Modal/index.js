import { Component } from 'preact';
import { X } from 'react-feather';

import styles from './style';

export class ModalAction {
    constructor(label, callback) {
        this.label = label;
        this.callback = callback;
    }
}

class Modal extends Component {
    componentDidMount() {
        document.addEventListener('keyup', e => {
            if (e.key == 'Escape') this.props.onClose();
        });
    }

    onClick = (e) => {
        if (e.target.getAttribute('data-can-close')) this.props.onClose();
    }

    render() {
        return (
            <div class={styles.modal} data-is-open={this.props.isOpen} onClick={this.onClick}>
                <div class={styles.inner} data-can-close>
                    <div class={styles.dialog}>
                        <div class={styles.title}>
                            <span>{this.props.title}</span>
                            <span><X data-can-close /></span>
                        </div>
                        <div class={styles.content}>
                            {this.props.children}
                        </div>
                        <div class={styles.actions}>
                            <button data-can-close>Cancel</button>
                            {this.props.actions.map(action => 
                                <button class="primary" onClick={action.callback}>
                                    {action.label}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Modal.defaultProps = {
    actions: []
}

export default Modal;