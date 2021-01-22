import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import { withRouter } from 'react-router';

import styles from './Sidebar.module.css';

class Sidebar extends Component{
    state = {
        showSidebar : false
    }

    onClick = () => {
        this.setState({ showSidebar: !this.state.showSidebar});
    }

    onLogout = () => {
        this.props.history.push("/");
        this.props.logout();
    }

    render(){
        const sidebar = (
            <div className={styles.background}>
                <div className={styles.sidebar}>
                    <ul className={styles.list}>
                        <li className={styles.navbarItem}><NavLink to="/newlist" activeClassName={styles.active} onClick={this.onClick}>New List</NavLink></li>
                        <li className={styles.navbarItem}><NavLink to="/lists" activeClassName={styles.active} onClick={this.onClick}>My Lists</NavLink></li>
                        <li className={styles.navbarItem}><NavLink to="/favorites" activeClassName={styles.active} onClick={this.onClick}>Favorites</NavLink></li>
                        <li className={styles.navbarItem}><NavLink to="/saved" activeClassName={styles.active} onClick={this.onClick}>Saved for Later</NavLink></li>
                        <li className={[styles.navbarItem, styles.signout].join(" ")}><NavLink to="#" onClick={this.onLogout}>signout</NavLink></li>
                    </ul>
                </div>
                <div className={styles.sidespace} onClick={this.onClick}>
                    &nbsp;
                </div>
            </div>
        )

        return(
            <Aux>
                <h2 className={styles.sidebarIcon} onClick={this.onClick}>&equiv;</h2>
                {this.state.showSidebar ? sidebar : null}
            </Aux>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
}


export default withRouter(connect(null, mapDispatchToProps)(Sidebar));