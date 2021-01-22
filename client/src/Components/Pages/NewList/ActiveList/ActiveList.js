import React, { Component } from 'react';

import DisplayTile from '../../../DisplayTile/DisplayTile';
import styles from './ActiveList.module.css';
import * as actions from '../../../../store/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class ActiveList extends Component{
    saveList = () => {
        const list = {
            name: this.props.name,
            recipes: this.props.activeList
        }
        this.props.addList(list);
        this.props.clearList();
        this.props.history.push("/lists");
    }
    
    render(){
        let activeListArray = [];
        if(this.props.activeList){
            activeListArray = this.props.activeList.map(listItem => <DisplayTile recipe={listItem}/>)
        }

        return (
            <div className={styles.activeListContainer}>
                <div className={styles.itemsContainer}>
                    {this.props.activeList ? activeListArray : " "}
                </div>
                <button onClick={this.saveList} className={styles.button}>Save List</button>
            </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ActiveList));