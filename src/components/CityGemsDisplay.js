import React from 'react';

import { connect } from 'react-redux';
import { Container, Grid, Image } from 'semantic-ui-react'


const CityGemsDisplay = (props) => {
  if (props.gem === undefined) { return null; }

  return(
    <div style={{ backgroundColor: 'white'}}>
      <Grid columns={2} divided style={{ padding: '3em 3em', width: '80%'}}>
        <Grid.Row>
          <Grid.Column>
            <Image src={props.gem.img_url} />
          </Grid.Column>
          <Grid.Column>
            <h1>{props.gem.name}</h1>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  let gemId = parseInt(ownProps.match.params.id)
  let gem = state.cityGems.find(x => x.id === gemId)
  return { gem: gem }
}

export default connect(mapStateToProps)(CityGemsDisplay)
