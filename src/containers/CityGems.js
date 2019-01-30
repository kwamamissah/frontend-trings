import React, { Component } from 'react';
import { connect } from 'react-redux';

import API from '../backend/data'


class CityGems extends Component {

  componentDidMount(){
    fetch(`${API}/city_gems`)
    .then(resp => resp.json())
    .then(console.log)
  }

  render(){
    return(
      <div></div>
    )
  }
}


export default CityGems;
