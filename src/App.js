import React, { Component } from 'react';
// import './App.css';

import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import CityGems from './containers/CityGems'


class App extends Component {
  render() {
    return (
      <div className="App" style={{ backgroundColor: "rgb(27,28,28)" }}>
        <Navbar />
        <LandingPage />
        <CityGems />
      </div>
    );
  }
}

export default App;
