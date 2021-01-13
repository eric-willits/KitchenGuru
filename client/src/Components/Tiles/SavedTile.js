import React, { Component } from 'react';
import styles from '../ListTile/ListTile.module.css';
import Modal from '../Modal/Modal';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

class SavedTile extends Component {
    render() {
        return (
            <div className={styles.tile}>
                <div className={styles.content}>
                    <img className={styles.image} src={this.props.recipe.image} alt="recipe"/>
                    <Modal 
                        name={this.props.recipe.label}
                        ingredients={this.props.recipe.ingredientLines}
                        link={this.props.recipe.url}
                    />
                </div>
                <div className={styles.buttons}>
                    <button onClick={() => this.props.unsave(this.props.recipe.label)}>&#10005;</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        unsave: recipeName => dispatch(actions.unsaveRecipe(recipeName))
    }
}

export default connect(null, mapDispatchToProps)(SavedTile);