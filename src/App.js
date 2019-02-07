import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import './App.css';

import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Login from './components/Login'
import ProfilePage from './components/ProfilePage'
import Unsplash from './components/Unsplash'
import CityGemsDisplay from './components/CityGemsDisplay'
import CityGemsData from './containers/CityGemsData'



class App extends Component {

  render() {
    return (
      <div className="App" style={{ backgroundColor: "rgb(27,28,28)" }}>
        <Navbar />
        <Switch>
          <Route path="/unsplash" component={Unsplash} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/login" component={Login} />
          <Route path="/city_gems/:id" component={CityGemsDisplay} />
          <Route path="/city_gems" component={CityGemsData} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
