import React, { Component } from 'react';
import { connect } from 'react-redux';
import SavedTile from '../../Tiles/SavedTile';
import * as actions from '../../../store/actions';

import styles from '../Favorites/Favorites.module.css';

class Saved extends Component {
    componentDidMount(){
        this.props.getSaved();
    }
    
    render() {
        const saved = this.props.saved.map(recipe => <SavedTile recipe={recipe}/>);

        return(
            <div>
                <h3 className={styles.header}>Saved for Later</h3>
                <div className={styles.container}>
                    {saved}
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
        saved: state.lists.saved
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getSaved: () => dispatch(actions.getSavedRecipes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Saved);