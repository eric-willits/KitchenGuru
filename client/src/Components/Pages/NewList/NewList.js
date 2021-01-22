import React, { Component } from 'react';
import axios from 'axios';
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'; */
import CartModal from '../../CartModal/CartModal';

import Results from "./Results/Results";
import ActiveList from './ActiveList/ActiveList';
import styles from './NewList.module.css';

class NewList extends Component {
    state = {
        search : "",
        results : null,
        name: ""
      }
      
      onChangeName = event => {
        this.setState({ name: event.target.value });
      }

      onChangeSearch = event => {
        this.setState({ search: event.target.value });
      }
    
      sendRequest = async (event) => {
        event.preventDefault();
    
        const url = `https://api.edamam.com/search?q=${this.state.search}&app_id=399286d8&app_key=108a4b55b349b2c7bd5d29e9c6a1354a`;
        const res = await axios.get(url);
    
        this.setState({ results: res.data.hits });
        console.log(this.state);
      }
      
      render(){
        
    
        return (
          <div className={styles.newList}>
            <div className={styles.listHeader}>
              <input type="text" name="name" placeholder="list name" onChange={this.onChangeName} className={styles.nameInput}/>
              <CartModal />
            </div>
            <div className={styles.content}>
              <div className={styles.searchResults}>
                <form onSubmit={this.sendRequest} className={styles.form}>
                  <input type="text" name="search" placeholder="search for a recipe" onChange={this.onChangeSearch} className={styles.searchInput}/>
                  <button type="submit" className={styles.button}>Submit</button>
                </form>
                <Results results={this.state.results}/>
              </div>
              <ActiveList name={this.state.name}/>
            </div>
          </div>
        );
      }
}

export default NewList;