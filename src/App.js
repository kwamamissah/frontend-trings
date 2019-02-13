import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import './App.css';

import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import SignUp from './components/SignUp'
import Login from './components/Login'
import ProfilePage from './components/ProfilePage'
import CityGemsData from './containers/CityGemsData'



class App extends Component {

  render() {
    return (
      <div className="App" style={{ backgroundColor: "rgb(27,28,28)" }}>
        <Navbar />
        <Switch>
          <Route path="/profile" component={ProfilePage} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/city_gems" component={CityGemsData} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
