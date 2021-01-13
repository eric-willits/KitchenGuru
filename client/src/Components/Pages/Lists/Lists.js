import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

import List from './List/List';
import styles from './Lists.module.css';

class Lists extends Component {
    componentDidMount() {
        this.props.getLists();
        this.props.getFavorites();
    }

    render(){
        let listsComponent = this.props.lists.map(list => <List list={list}/>);

        return(
            <div>
                <h3 className={styles.header}>Lists</h3>
                <div className={styles.listsContainer}>
                    {listsComponent}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        lists: state.lists.lists
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getLists: () => dispatch(actions.getLists()),
        getFavorites: () => dispatch(actions.getFavorites())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lists);