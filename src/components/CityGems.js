import React from 'react'
import { connect } from 'react-redux';

import { Card, Image, Rating } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


const cgFont = {
  fontFamily: 'Cormorant Garamond, serif'
}

const ifFont = {
  fontFamily: 'Caveat, cursive',
  fontSize: '20px'
}

let CityGems = (props) => {

    return(
      <Card size='small' as={Link} to={`/city_gems/${props.gem.id}`}>
      <Image src={props.gem.img_url} />
      <Card.Content>
        <Card.Header as='h1' style={ ifFont }>{props.gem.name}</Card.Header>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Rating icon='heart' maxRating={1} /> <br/>
          <Rating icon='star' maxRating={5} disabled />
        </a>
      </Card.Content>
    </Card>
    )
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps)
  let gem = state.cityGems.gems.find(x => x.id === ownProps.id)
  return { gem: gem }
}



export default connect(mapStateToProps)(CityGems)
