import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import UserIcon from '../../../images/profile.png';
import styles from './NavBar.module.css';
import * as actions from '../../../store/actions';

class NavBar extends Component {
    render(){
        return(
            <div className={styles.navbar}>
                <h1 className={styles.header}>kitchen guru</h1>
                <div className={styles.userTile}>
                    <img src={UserIcon} alt="profile" className={styles.image}/>
                    <h4 className={styles.username}>{this.props.user.username}</h4>
                </div>
                <ul className={styles.list}>
                    <li className={styles.navbarItem}><NavLink to="/newlist" activeClassName={styles.active}>New List</NavLink></li>
                    <li className={styles.navbarItem}><NavLink to="/lists" activeClassName={styles.active}>My Lists</NavLink></li>
                    <li className={styles.navbarItem}><NavLink to="/favorites" activeClassName={styles.active}>Favorites</NavLink></li>
                    <li className={styles.navbarItem}><NavLink to="/saved" activeClassName={styles.active}>Saved for Later</NavLink></li>
                    <li className={[styles.navbarItem, styles.signout].join(" ")}><NavLink to="#" onClick={this.props.logout}>signout</NavLink></li>

                </ul>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);