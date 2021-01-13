import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { store } from './index';
import { loadUser } from './store/actions/auth';

import NavBar from './Components/Navigation/NavBar/NavBar';
import NewList from './Components/Pages/NewList/NewList';
import Lists from './Components/Pages/Lists/Lists';
import Welcome from './Components/Pages/Welcome/Welcome';
import Favorites from './Components/Pages/Favorites/Favorites';
import Saved from './Components/Pages/Saved/Saved';

import styles from './App.module.css';

class App extends Component {
  componentDidMount(){
    store.dispatch(loadUser());
  }

  render(){
    const loggedIn = (
      <div className={styles.app}>
        <NavBar />
        <div className={styles.pages}>
          <Switch>
            <Route path="/newlist" component={NewList}/>
            <Route path="/lists" component={Lists}/>
            <Route path="/favorites" component={Favorites}/>
            <Route path="/saved" component={Saved}/>
          </Switch>
        </div>
      </div>
    )

    return (
      <BrowserRouter>
          {this.props.isAuthenticated ? loggedIn : <Welcome />}
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(App);
