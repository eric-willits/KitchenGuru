import React, { Component } from 'react';
import Aux from '../hoc/Aux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import DisplayTile from '../DisplayTile/DisplayTile';
import * as actions from '../../store/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import styles from './CartModal.module.css';

class CartModal extends Component {
    state = {
        showModal : false
    }

    saveList = () => {
        const list = {
            name: this.props.name,
            recipes: this.props.activeList
        }
        this.props.addList(list);
        this.props.clearList();
        this.props.history.push("/lists");
    }

    onClick = () => {
        this.setState({ showModal: !this.state.showModal});
    }

    render(){
        let activeListArray = [];
        if(this.props.activeList){
            activeListArray = this.props.activeList.map(listItem => <DisplayTile recipe={listItem}/>)
        }

        const modal = (
            <div className={styles.background}>
                <div className={styles.top} onClick={this.onClick}>&nbsp;</div>
                <div className={styles.left} onClick={this.onClick}>&nbsp;</div>
                <div className={styles.right} onClick={this.onClick}>&nbsp;</div>
                <div className={styles.bottom} onClick={this.onClick}>&nbsp;</div>
                <div className={styles.activeListContainer}>
                    <div className={styles.itemsContainer}>
                        {this.props.activeList ? activeListArray : " "}
                    </div>
                    <button onClick={this.saveList} className={styles.button}>Save List</button>
                </div>
            </div>
        )

        return(
            <Aux>
                <FontAwesomeIcon icon={faCartArrowDown} className={styles.icon} onClick={this.onClick}/>
                {this.state.showModal ? modal : null}
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        activeList: state.lists.activeList
    }
}

const mapDispatchToProps = dispatch => {
    return {
      addList: (list) => dispatch(actions.addList(list)),
      clearList: () => dispatch(actions.clearList())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartModal));