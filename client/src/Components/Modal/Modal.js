import React, { Component } from 'react';
import Aux from '../hoc/Aux';

import styles from './Modal.module.css';

class Modal extends Component {
    state = {
        showModal : false
    }
    
    render() {

        const background = (
            <div className={styles.background} onClick={() => this.setState({ showModal: !this.state.showModal})}>
                <div className={styles.modal}>
                    <p><strong>Ingredients:</strong></p>
                    {this.props.ingredients.map(ingredient => <p>{ingredient}</p>)}
                    {this.props.link ? <Aux>
                        <p><strong>Recipe:</strong></p>
                        <p><a href={this.props.link} target="_blank" rel="noopener noreferrer">{this.props.link}</a></p>
                    </Aux> : null}
                </div>
            </div>
        )

        return(
            <Aux>
                <h5 className={styles.label} onClick={() => this.setState({ showModal: !this.state.showModal})}>
                    {this.props.name}
                </h5>
                {this.state.showModal ? background : null}
            </Aux>
        )
    }
}

export default Modal;