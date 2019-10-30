import React from 'react';
import logo from './images.jpeg';
import './App.css';
import {Route} from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import HomePage from './components/HomePage'
import Lobby from './components/Lobby'
function App() {
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
        <Route component={Login}exact path='/login' />

      </header>
    
      <footer>
        <p>Made By <b>Lil Nick</b> and <b>Sonia</b></p>
      </footer>
     
    </div>
  );
}

export default App;
