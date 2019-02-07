import React from 'react'
import { connect } from 'react-redux';
// import CityGemsDisplay from './CityGemsDisplay'
import { Card, Image, Rating } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
// <Card.Description>{props.gem.description}</Card.Description>

let CityGems = (props) => {

    return(
      <Card as={Link} to={`/city_gems/${props.gem.id}`}>
      <Image src={props.gem.img_url} />
      <Card.Content>
        <Card.Header>{props.gem.name}</Card.Header>
        <Card.Meta>
          <span className='date'>{props.gem.address}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Rating icon='heart' maxRating={1} /> <br/>
          <Rating icon='star' maxRating={5} clearable />
        </a>
      </Card.Content>
    </Card>
    )
}

const mapStateToProps = (state, ownProps) => {
  let gem = state.cityGems.find(x => x.id === ownProps.id)
  return { gem: gem }
}



export default connect(mapStateToProps)(CityGems)
