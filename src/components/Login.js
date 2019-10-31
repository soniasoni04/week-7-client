import React, { Component } from "react";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as request from 'superagent'
import {login} from '../actions/index'
import { url } from '../constants'





class Login extends Component {
    state = {
        username: '',
        password: ''
    }
    onChangeUsername = (event) => {
        console.log('change username');
        this.setState({username: event.target.value})
    }
    onChangePassword = (event) => {
        console.log('change password');
        this.setState({password: event.target.value})
    }
    onSubmit = (event) => {
        event.preventDefault()
        console.log('username:', 
        this.state.username, 'password:', 
        this.state.password);
        
        request.post(`${url}/login`)
            .send({
                email: this.state.username,
                password: this.state.password
            })
            .then(result => {
                console.log('please let it be token', result.body)
                console.log('this.props.history test:', this.props.history)
                console.log('jwt test:', result.body.jwt)
                this.props.login(result.body.jwt, this.props.history)
            })
            .catch(error => console.log("error", error))
        
    }
    render() {
        console.log("login done", this.props)

        const { jwt } = this.props.user

        if (jwt) return "you are  is logged in:"

        return (
            <form onSubmit={this.onSubmit}>
            <input name="username" 
            type="text" 
            onChange={this.onChangeUsername} 
            value={this.state.username}
             placeholder="login username"></input>
            
            <input name="password" 
            type="password" 
            onChange={this.onChangePassword}
            value={this.state.password}
            placeholder="Password here"></input>
        <button 
        type="submit" 
        value={this.state.message}>
            Login</button>
            <button onClick={() => this.props.history.push('/')}>Go Back</button>
        </form>


        );

        
    }
}


function mapStateToProps ( reduxState) {
    console.log('map state to props of chatroom component', reduxState)
    return {
        user: reduxState.user
    }
}

export default  connect(mapStateToProps, {login}) (Login)