import React, { Component } from 'react';
import { connect } from 'react-redux';

import API from '../backend/data'
import CityGems from '../components/CityGems'
import { fetchGems } from '../actions/cityGems'


class CityGemsData extends Component {

  componentDidMount(){
    fetch(`${API}/city_gems`)
    .then(resp => resp.json())
    .then(gems => this.props.dispatch(fetchGems(gems)))
  }

  render(){
    return(
      <div style={{backgroundColor: 'light-blue'}}>
        {this.props.gems.map(x => <CityGems key={x.id} id={x.id} />)}
      </div>
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
