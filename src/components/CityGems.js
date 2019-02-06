import React from 'react'
import { connect } from 'react-redux';
// import CityGemsDisplay from './CityGemsDisplay'
import { Card, Icon, Image } from 'semantic-ui-react'

// <Card.Description>{props.gem.description}</Card.Description>

let CityGems = (props) => {

    return(
      <Card>
      <Image src={props.gem.img_url} />
      <Card.Content>
        <Card.Header>{props.gem.name}</Card.Header>
        <Card.Meta>
          <span className='date'>{props.gem.address}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='like' />

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
