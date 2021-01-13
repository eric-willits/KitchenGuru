import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import styles from './DisplayTile.module.css';

class DisplayTile extends Component {
    removeRecipe = recipeName => {
        this.props.removeRecipe(recipeName);
    }
    
    render() {
        return (
            <div className={styles.tile}>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src={this.props.recipe.image} alt="recipe"/>
                </div>
                <div className={styles.textContainer}>
                    <h6 className={styles.label}>{this.props.recipe.label}</h6>
                    <button className={styles.button} onClick={() => this.removeRecipe(this.props.recipe.label)}>x</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeRecipe: recipeName => dispatch(actions.removeRecipe(recipeName))
    }
}

export default connect(null, mapDispatchToProps)(DisplayTile);