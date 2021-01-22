import React, { Component } from 'react';
import { connect } from 'react-redux';
import FavoritesTile from '../../Tiles/FavoritesTile';
import * as actions from '../../../store/actions';

import styles from './Favorites.module.css';

class Favorites extends Component {
    componentDidMount(){
        this.props.getFavorites();
    }
    
    render() {
        const favorites = this.props.favorites.map(recipe => <FavoritesTile recipe={recipe}/>);

        return(
            <div>
                <h3 className={styles.header}>Favorites</h3>
                <div className={styles.container}>
                    {favorites}
                    <i aria-hidden="true"></i>
                    <i aria-hidden="true"></i>
                    <i aria-hidden="true"></i>
                    <i aria-hidden="true"></i>
                    <i aria-hidden="true"></i>
                    <i aria-hidden="true"></i>
                    <i aria-hidden="true"></i>
                    <i aria-hidden="true"></i>
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
        getFavorites: () => dispatch(actions.getFavorites())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);