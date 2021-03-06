import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux';

import API from '../backend/data'
import CityGemsGrid from '../components/CityGemsGrid'
import CityGemsDisplay from '../components/CityGemsDisplay'




class CityGemsData extends Component {



  render(){
    return (
      <Switch>
        <Route path="/city_gems/altideas" component={CityGemsGrid} />
        <Route path="/city_gems/nightlife" component={CityGemsGrid} />
        <Route path="/city_gems/art" component={CityGemsGrid} />
        <Route path="/city_gems/clothing" component={CityGemsGrid} />
        <Route path="/city_gems/bites" component={CityGemsGrid} />
        <Route path="/city_gems/daytime" component={CityGemsGrid} />
        <Route path="/city_gems/all" component={CityGemsGrid} />
        <Route path="/city_gems/:id" component={CityGemsDisplay} />
      </Switch>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    gems: state.cityGems
  }
}


CityGemsData = connect(mapStateToProps)(CityGemsData);
export default CityGemsData;
