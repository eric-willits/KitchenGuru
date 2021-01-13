import React, { Component } from 'react';
import styles from './Tile.module.css';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import Modal from '../Modal/Modal';

class Tile extends Component {
    
    initializeRecipe = recipe => {
        for (var key in recipe) {
            let str = key;
            if(str.indexOf(".") > -1){
            let newStr = str.replace(".", "_");
            recipe[newStr] = recipe[str];
            delete recipe[str];
            }
            if (typeof recipe[key] === "object") {
                recipe[key] = this.initializeRecipe(recipe[key]);   
            }
        }
        return recipe;
    }
    
    onClick = () => {
        this.props.addRecipe(this.initializeRecipe(this.props.recipe));
    }
    
    render() {
        return (
            <div className={styles.tile}>
                <div className={styles.content}>
                    <img className={styles.image} src={this.props.recipe.image} alt="recipe"/>
                    {/* <h5>{this.props.recipe.label}</h5> */}
                    <Modal 
                        name={this.props.recipe.label}
                        ingredients={this.props.recipe.ingredientLines}
                        link={this.props.recipe.url}
                    />
                </div>
                <div className={styles.buttons}>
                    <button onClick={() => this.props.saveRecipe(this.props.recipe)}>Archive</button>
                    <button onClick={this.onClick}>Add</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addRecipe: recipe => dispatch(actions.addRecipe(recipe)),
        saveRecipe: recipe => dispatch(actions.saveRecipe(recipe))
    }
}

export default connect(null, mapDispatchToProps)(Tile);