import React from 'react';

import { connect } from 'react-redux';
import {  Grid, Image, Rating, Icon, Header, Divider } from 'semantic-ui-react'


const CityGemsDisplay = (props) => {
  if (props.gem === undefined) { return null; }

  return(
    <div style={{ backgroundColor: 'white'}}>
      <Grid columns={2} divided style={{ padding: '3em 3em', width: '80%'}}>
        <Grid.Row>
          <Grid.Column>
            <Image size='large' src={props.gem.img_url} />
            <br/>
            <a>
              <Rating icon='heart' maxRating={1} /> <br/>
              <Rating maxRating={5} clearable />
            </a>
          </Grid.Column>
          <Grid.Column>
            <h5>{props.gem.category_id.name}</h5>
            <h1>{props.gem.name}</h1>
            <Header as='h4'>
              <Header.Content>
                <Icon name='map pin'/>
              </Header.Content>
              <Header.Content>
                {props.gem.address}
              </Header.Content>
            </Header>
            <Header as='h4'>
              <Header.Content>
                <Icon name='time'/>
              </Header.Content>
              <Header.Content>
                Hours:update data
              </Header.Content>
            </Header>
            <Header as='h4'>
              <Header.Content>
                <Icon name='linkify'/>
              </Header.Content>
              <Header.Content>
                Website:update data
              </Header.Content>
            </Header>
            <Divider section />
            <Header as='h4'>
              <Header.Content>
                <em>About this gem</em>
              </Header.Content>
            </Header>
            <Header as='h4'>
              <Header.Content>
                {props.gem.description}
              </Header.Content>
            </Header>

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
