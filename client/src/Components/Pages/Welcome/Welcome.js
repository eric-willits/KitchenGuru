import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

import styles from './Welcome.module.css';

class Welcome extends Component {
    state = {
        registerUsername: "",
        registerPassword: "",
        loginUsername: "",
        loginPassword: ""
    }
    
    onChange = (event, param) => {
        this.setState({ [param] : event.target.value})
    }

    register = (e) => {
        e.preventDefault();

        const user = {
            username: this.state.registerUsername,
            password: this.state.registerPassword
        }
        this.props.register(user);
    }

    login = (e) => {
        e.preventDefault();

        const user = {
            username: this.state.loginUsername,
            password: this.state.loginPassword
        }
        this.props.login(user);
    }

    render(){
        return(
            <div className={styles.page}>
                <div className={styles.formContainer}>
                    <form onSubmit={(e) => this.register(e)}>
                        <h4>Register</h4>
                        <label>
                            <input type="text" placeholder="username" onChange={(event) => this.onChange(event, "registerUsername")}/>Username
                        </label>
                        <label>
                            <input type="password" placeholder="password" onChange={(event) => this.onChange(event, "registerPassword")}/>Password
                        </label>
                        <button type="submit">Submit</button>
                    </form>

                    <form onSubmit={(e) => this.login(e)}>
                        <h4>Login</h4>
                        <label>
                            <input type="text" placeholder="username" onChange={(event) => this.onChange(event, "loginUsername")}/>Username
                        </label>
                        <label>
                            <input type="password" placeholder="password" onChange={(event) => this.onChange(event, "loginPassword")}/>Password
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        register : (user) => dispatch(actions.register(user)),
        login : (user) => dispatch(actions.login(user))
    }
}

export default connect(null, mapDispatchToProps)(Welcome);