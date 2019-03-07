import React, { Component } from 'react';
import './App.css';
import UserNav from './components/UserNav/UserNav';
import Productnav from './components/ProductNav/Productnav';
import HeroComp from './components/HeroComp/HeroComp';

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <UserNav />
        <Productnav />
        <HeroComp />
      </div>
    );
  }
}

export default App;
