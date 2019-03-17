import React, { Component } from 'react';
import './App.css';
import UserNav from './components/UserNav/UserNav';
import Productnav from './components/ProductNav/Productnav';
import Home from './components/Home/Home';

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <UserNav />
        <Productnav />
        <Home />
      </div>
    );
  }
}

export default App;
