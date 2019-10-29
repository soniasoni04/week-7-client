import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { USER_LOGIN, login } from '../actions/login'


class HomePage extends Component {

  componentDidMount(){
    
    this.props.login(null)
  }

  render () {
    return <>
         <p> <Link to="/signup">Signup to play</Link></p>
         <p> <Link to="/login">Login to start game</Link></p>
    </>
  }
}


const mapDispatchToProps = {
  USER_LOGIN,
  login
}

const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);