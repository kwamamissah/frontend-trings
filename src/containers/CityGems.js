import React, { Component } from 'react';
import { connect } from 'react-redux';

import API from '../backend/data'
import { fetchGems } from '../actions/cityGems'


class CityGems extends Component {

  componentDidMount(){
    fetch(`${API}/city_gems`)
    .then(resp => resp.json())
    .then(gems => this.props.dispatch(fetchGems(gems)))
  }


  render(){
    return(
      <div></div>
    )
  }
}

CityGems = connect()(CityGems);
export default CityGems;
