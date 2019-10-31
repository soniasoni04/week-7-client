import React from 'react';
import logo from './giphy.gif';
import './App.css';
import {Route} from 'react-router-dom'
import { connect } from 'react-redux'
import Signup from './components/Signup'
import Login from './components/Login'
import HomePage from './components/HomePage'
import Lobby from './components/Lobby'
import Gameplay from './components/Gameplay'

import LobbyContainer from './components/components2/LobbyContainer';
import StartGame from './components/components2/StartGame'

import { url } from './constants'
import { allLobbyRooms } from './actions'

class App extends React.Component {
  source = new EventSource(`${url}/stream`)

  componentDidMount () {
    console.log('app mount')
    this.source.onmessage = event => {
      console.log('event test:', event)
      const data = JSON.parse(event.data)

      this.props.allLobbyRooms(data)
    }
  }

  render () {
    console.log('App render')
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            RANDOM NUMBER GENERATOR
          </p>
          <Route component={HomePage} exact path='/' />
          <Route component={Lobby} exact path='/lobby' />
          <Route component={Signup} exact path='/signup' />
          <Route component={Login} exact path='/login' />
          <Route component={LobbyContainer} exact path='/lobby' />
          <Route component={StartGame} exact path='/startGame' />
          <Route component={Gameplay} exact path='/game/:id' />
        </header>
      
        <footer>
          <p>Made By <b>Lil Nick</b> and <b>Sonia</b></p>
        </footer>
      
      </div>
    );
  }
}

export default connect(null, { allLobbyRooms })(App);
