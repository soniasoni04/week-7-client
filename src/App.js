import React from 'react';
import logo from './download.jpeg';
import './App.css';
import {Route} from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          WELCOME TO LUDO
        </p>
        <Signup />
        <Route component={Login}exact path='/login' />

      </header>
     
    </div>
  );
}

export default App;
