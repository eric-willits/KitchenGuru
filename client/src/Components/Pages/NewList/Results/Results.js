import React, { Component } from 'react';
import Tile from '../../../Tile/Tile';

import styles from "./Results.module.css";

class Results extends Component {
    
    render() {
        let resultsArr = [];
        if(this.props.results){
            resultsArr = this.props.results.map(result => <Tile recipe={result.recipe}/>)
        }

        return (
            <div className={styles.resultsContainer}>
              {this.props.results ? resultsArr : null}
            </div>
        )
    }
}

export default Results;