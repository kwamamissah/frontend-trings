import React, { Component } from 'react';
import { connect } from 'react-redux';

import API from '../backend/data'
import CityGems from '../components/CityGems'
import { Card } from 'semantic-ui-react'
import { fetchGems } from '../actions/cityGems'


class CityGemsData extends Component {

  componentDidMount(){
    fetch(`${API}/city_gems`)
    .then(resp => resp.json())
    .then(gems => this.props.dispatch(fetchGems(gems)))
  }

  render(){
    return(
      <Card.Group itemsPerRow={3}>
        {this.props.gems.map(x => <CityGems key={x.id} id={x.id} />)}
      </Card.Group>
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
