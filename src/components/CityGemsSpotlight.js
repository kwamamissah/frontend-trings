import React from 'react'
import { connect } from 'react-redux';

import { Header, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


const ifFont = {
  fontFamily: 'Caveat, cursive',
  fontSize: '20px'
}

let CityGemsSpotlight = (props) => {

    return(
      <div>
        <Link to={`/city_gems/${props.gem.id}`}>
          <Image  centered size='medium' src={props.gem.img_url} />
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
