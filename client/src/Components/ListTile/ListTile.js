import React, { Component } from 'react';
import styles from './ListTile.module.css';
import Modal from '../Modal/Modal';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

class ListTile extends Component {
    isAlreadySaved = recipeName => {
        const index = this.props.favorites.map(recipe => recipe.label).indexOf(recipeName);
        if (index > -1){
            return true;
        } else {
            return false;
        }
    }
    
    render() {
        const saved = <button disabled>&hearts;</button>;
        const unsaved = <button onClick={() => this.props.favorite(this.props.recipe)}>&hearts;</button>;

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
                    {this.isAlreadySaved(this.props.recipe.label) ? saved : unsaved}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        favorites: state.lists.favorites
    }
}

const mapDispatchToProps = dispatch => {
    return {
        favorite: recipe => dispatch(actions.favorite(recipe))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTile);