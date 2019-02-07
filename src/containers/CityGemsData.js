import React, { Component } from 'react';
import { connect } from 'react-redux';

import API from '../backend/data'
import CityGems from '../components/CityGems'
import { Card, Grid } from 'semantic-ui-react'
import { fetchGems } from '../actions/cityGems'



class CityGemsData extends Component {

  componentDidMount(){
    fetch(`${API}/city_gems`)
    .then(resp => resp.json())
    .then(gems => this.props.dispatch(fetchGems(gems)))
  }

  render(){

    let dayTime = this.props.gems.filter(gem => gem.category === 1)
    let bites = this.props.gems.filter(gem => gem.category === 2)
    let clothing = this.props.gems.filter(gem => gem.category === 3)
    let art = this.props.gems.filter(gem => gem.category === 4)
    let nightLife = this.props.gems.filter(gem => gem.category === 5)
    let alt = this.props.gems.filter(gem => gem.category === 6)

    return(
           <Card.Group itemsPerRow={4}>
             {this.props.gems.slice(0,12).map(x => <CityGems key={x.id} id={x.id}  />)}
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
