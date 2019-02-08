import React from 'react'
import { connect } from 'react-redux';
// import CityGemsDisplay from './CityGemsDisplay'
import { Header, Image, Rating } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
// <Card.Description>{props.gem.description}</Card.Description>

const cgFont = {
  fontFamily: 'Cormorant Garamond, serif'
}

const ifFont = {
  fontFamily: 'Caveat, cursive',
  fontSize: '20px'
}

let CityGemsSpotlight = (props) => {

    return(
      <div>
        <Link to={`/city_gems/${props.gem.id}`}>
          <Image  centered size='small' src={props.gem.img_url} />
          <Header as='h1' style={ ifFont }>{props.gem.name}</Header>
        </Link>
    </div>
    )
}

const mapStateToProps = (state, ownProps) => {
  let gem = state.cityGems.gems.find(x => x.id === ownProps.id)
  return { gem: gem }
}



export default connect(mapStateToProps)(CityGemsSpotlight)
