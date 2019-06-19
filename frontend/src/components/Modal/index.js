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
    constructor(props) {
        super(props);

        this.state = { isOpen: true };
        this.close = this.close.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keyup', e => {
            if (e.key == 'Escape') this.close();
        });
    }

    onClick(e) {
        if (e.target.getAttribute('data-can-close')) this.close();
    }

    close() {
        this.setState({ isOpen: false });
    }

    render() {
        return (
            <div class={styles.modal} data-is-open={this.state.isOpen} onClick={this.close}>
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