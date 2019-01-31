import React, { Component } from 'react';
// import './App.css';

import Navbar from './components/Navbar'
import CityGems from './containers/CityGems'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <CityGems />
      </div>
    );
  }
}

export default App;
