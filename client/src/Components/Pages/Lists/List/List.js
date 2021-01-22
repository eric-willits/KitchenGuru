import React, { Component } from 'react';
import Modal from '../../../Modal/Modal';
import { connect } from 'react-redux';
import * as actions from '../../../../store/actions';

import ListTile from '../../../ListTile/ListTile';
import styles from './List.module.css';

class List extends Component {
    render(){
        let recipeTiles = this.props.list.recipes.map(recipe => <ListTile recipe={recipe} className={styles.tileItem}/>)
        let allIngredients = this.props.list.recipes.map(recipe => recipe.ingredientLines);
        let mergedIngredients = [].concat.apply([], allIngredients);
        
        return(
            <div className={styles.list}>
                <div className={styles.text}>
                    <h5 className={styles.name}>{this.props.list.name} - </h5>
                    <Modal name="grocery list" ingredients={mergedIngredients}/>
                </div>
                <div className={styles.content}>
                    {recipeTiles}
                </div>
                <button onClick={() => this.props.deleteList(this.props.list.createdAt)} className={styles.button}>&minus;</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteList: createdAt => dispatch(actions.deleteList(createdAt))
    }
}

export default connect(null, mapDispatchToProps)(List);