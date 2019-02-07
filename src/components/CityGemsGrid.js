import React from 'react';
import { connect } from 'react-redux';

import { Card } from 'semantic-ui-react'

import CityGems from '../components/CityGems'

const CityGemsGrid = (props) => {

  if (props.gems === undefined) { return null; }
  console.log(props.gems)
  return(
    <Card.Group itemsPerRow={4}>
      {props.gems.slice(0,12).map(x => <CityGems key={x.id} id={x.id}  />)}
    </Card.Group>
  )
}

const mapStateToProps = (state) => {
  console.log(state.cityGems)
  return {
    gems: state.cityGems
  }
}

export default connect(mapStateToProps)(CityGemsGrid);
