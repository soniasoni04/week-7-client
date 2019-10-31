import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { USER_LOGIN, login } from '../actions/index'


class HomePage extends Component {

  componentDidMount(){
    
    this.props.login(null)
  }

  render () {
    return (
      <div>
      <p> <Link to="/signup">Signup to play</Link></p>
         <p> <Link to="/login">Login to start game</Link></p>
         <p> <Link to="/lobby">Game Lobby</Link></p>
      
      </div>
    )
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