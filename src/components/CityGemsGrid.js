import React from 'react';
import { connect } from 'react-redux';

import { Card, Segment, Icon, Grid, Divider, Loader, Image } from 'semantic-ui-react'

import Diamond from '../greendiamond.png'
import CityGems from '../components/CityGems'
import CityGemsSpotlight from '../components/CityGemsSpotlight'

const CityGemsGrid = (props) => {

  if (props.gems === undefined) { return <Loader active inline='centered' />}
  console.log(props.gems)

  let rand = (gem) => Math.floor(Math.random()*gem.length)

  let renderRandGem = () => {
    let gems = props.gems
    let num = rand(gems)
    let gem = gems[num]
    return num
  }

  let getGem = renderRandGem()

  return(

    <div style={{ backgroundColor: 'white'}}>
      <Segment.Group >
        <Segment>
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column textAlign='center' >
                <h2 style={{fontFamily: 'Rock Salt, sans-serif'}}>Trings </h2>
                <h5 style={{fontFamily: 'Rock Salt, sans-serif'}}>Trendy x Things</h5>
                <h5 style={{fontFamily: 'Rock Salt, sans-serif'}}>A place to find all the things in a city that aren't mainstream</h5>
                <Image centered size='tiny' src={Diamond} alt='gem'/>
              </Grid.Column>
              <Grid.Column textAlign='center'>
                <h2>Spotlight Gem 🔦</h2>
                <div>
                {props.gems.slice(getGem, getGem + 1).map(x => <CityGemsSpotlight key={x.id} id={x.id}  />)}
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Segment.Group>


      <Segment.Group raised compact horizontal style={{border: '2px solid black'}}>
      <Segment textAlign='center'>
        <Icon size='large' color='yellow' circular name='sun'/> <br /> DayTime Events
      </Segment>
      <Segment textAlign='center'>
        <Icon size='large' color='yellow' circular name='food'/> <br /> Bites
      </Segment>
      <Segment textAlign='center'>
        <Icon size='large' color='yellow' circular name='cart plus'/> <br /> Clothing
      </Segment>
      <Segment textAlign='center'>
        <Icon size='large' color='yellow' circular name='camera'/> <br /> Art
      </Segment>
      <Segment textAlign='center'>
        <Icon size='large' color='yellow' circular name='glass martini'/> <br /> Night Life
      </Segment>
      <Segment textAlign='center'>
        <Icon size='large' color='yellow' circular name='street view'/> <br /> Alternative Ideas
      </Segment>
    </Segment.Group>
    <Segment basic>
      <Card.Group itemsPerRow={4}>
        {props.gems.slice(0,16).map(x => <CityGems key={x.id} id={x.id}  />)}
      </Card.Group>
    </Segment>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    gems: state.cityGems.gems,
    filterGems: state.cityGems.filterGems

  }
}

export default connect(mapStateToProps)(CityGemsGrid);
