import React from 'react';
import logo from './download.jpeg';
import './App.css';
import {Route} from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import HomePage from './components/HomePage'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          WELCOME TO LUDO
        </p>
        <Route component={HomePage} exact path='/' />
        <Route component={Signup} exact path='/signup' />
        <Route component={Login}exact path='/login' />

      </header>
     
    </div>
  );
}

export default App;
