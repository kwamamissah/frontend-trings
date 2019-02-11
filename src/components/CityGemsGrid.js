import React from 'react';
import { connect } from 'react-redux';

import { Card, Segment, Icon, Grid, Loader, Image } from 'semantic-ui-react'

import Diamond from '../greendiamond.png'
import CityGems from '../components/CityGems'
import CityGemsSpotlight from '../components/CityGemsSpotlight'

import { filterGems } from '../actions/cityGems'

const CityGemsGrid = (props) => {

  if (props.gems === undefined) { return <Loader active inline='centered' />}

  let rand = (gem) => Math.floor(Math.random()*gem.length)

  let renderRandGem = () => {
    let gems = props.gems
    let num = rand(gems)
    return num
  }

  let getGem = renderRandGem()

  let handleClick = (e) => {
    console.log(e.target.textContent.trim())
    props.dispatch(filterGems(e.target.textContent.trim()))
  }

  return(

    <div style={{ backgroundColor: 'white'}}>
      <Segment.Group >
        <Segment>
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column textAlign='center' >
                <h2 style={{fontFamily: 'Rock Salt, sans-serif'}}>Trings </h2>
                <h3 style={{fontFamily: 'Rock Salt, sans-serif'}}>Trendy x Things</h3>
                <h3 style={{fontFamily: 'Rock Salt, sans-serif'}}>A place to find all the things in a city that aren't mainstream</h3>
                <Image centered size='tiny' src={Diamond} alt='gem'/>
              </Grid.Column>
              <Grid.Column textAlign='center' >
                <h4 style={{fontFamily: 'Rock Salt, sans-serif'}}>Spotlight Gem <span role="img" aria-label="flashlight">🔦</span></h4>
                <div>
                {props.gems.slice(getGem, getGem + 1).map(x => <CityGemsSpotlight key={x.id} id={x.id}  />)}
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Segment.Group>


      <Segment.Group raised compact horizontal style={{border: '2px solid black'}}>
      <Segment textAlign='center' name='DayTime Events' onClick={(e) => handleClick(e)}>
        <Icon size='large' color='yellow' circular name='sun'/> <br /> DayTime Events
      </Segment>
      <Segment textAlign='center' onClick={(e) => handleClick(e)}>
        <Icon size='large' color='yellow' circular name='food'/> <br /> Bites
      </Segment>
      <Segment textAlign='center' onClick={(e) => handleClick(e)}>
        <Icon size='large' color='yellow' circular name='cart plus'/> <br /> Clothing
      </Segment>
      <Segment textAlign='center' onClick={(e) => handleClick(e)}>
        <Icon size='large' color='yellow' circular name='camera'/> <br /> Art
      </Segment>
      <Segment textAlign='center' onClick={(e) => handleClick(e)}>
        <Icon size='large' color='yellow' circular name='glass martini'/> <br /> Night Life
      </Segment>
      <Segment textAlign='center' onClick={(e) => handleClick(e)}>
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
    filteredGems: state.cityGems.filterGems

  }
}

export default connect(mapStateToProps)(CityGemsGrid);
