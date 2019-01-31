import React, { Component } from 'react';
// import './App.css';

import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import CityGems from './containers/CityGems'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <LandingPage />
        <CityGems />
      </div>
    );
  }
}

export default App;
