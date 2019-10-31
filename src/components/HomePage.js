import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class HomePage extends Component {
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

export default connect()(HomePage);