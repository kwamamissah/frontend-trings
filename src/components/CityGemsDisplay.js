import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  Grid, Image, Rating, Icon, Header,
          Divider, Sticky, Comment, Form, Button } from 'semantic-ui-react'
import API from '../backend/data'

const ykFont = {
  fontFamily: 'Yanone Kaffeesatz, sans-serif'
}

const mwFont = {
  fontFamily: 'Merriweather, serif'
}

// fetch(`${API}/likes`, {
//   method: 'POST',
//   headers: {
//   'Content-Type': 'application/json'
//   },
//   body: JSON.stringify()
// })

// if (props.gem === undefined) { return null; }
class CityGemsDisplay extends Component {


  handleClick = () => {
    debugger
  }
  render(){
    if (this.props.gem === undefined) { return null; }
    return(
      <div style={{ backgroundColor: 'white'}}>
        <Grid columns={2} style={{ padding: '3em 3em', width: '100%', position: 'relative'}}>
          <Grid.Row divided >
            <Grid.Column centered>
              <Sticky>
              <Image size='large' src={this.props.gem.img_url} />
              <br/>
                <Rating icon='heart' defaultRating={0} maxRating={1} onClick={() => this.handleClick()} /> <br/>
                <Rating defaultRating={3} maxRating={5} disabled />
              </Sticky>
            </Grid.Column>



            <Grid.Column>
              <Header as='h5'>{this.props.gem.category.name}</Header>
              <Header style={ykFont} as='h1'>{this.props.gem.name}</Header>
              <Header style={mwFont} as='h4'>
                <Header.Content>
                  <Icon name='map pin'/>
                </Header.Content>
                <Header.Content>
                  {this.props.gem.address}
                </Header.Content>
              </Header>
              <Header style={mwFont} as='h4'>
                <Header.Content>
                  <Icon name='time'/>
                </Header.Content>
                <Header.Content>
                {this.props.gem.hours}
                </Header.Content>
              </Header>
              <Header style={mwFont} as='h5' >
                <Header.Content>
                  <Icon name='linkify'/>
                </Header.Content>
                <Header.Content>
              <a href={this.props.gem.website} target="_blank">{this.props.gem.website}</a>
                </Header.Content>
              </Header>
              <Divider section />
              <Header style={mwFont} as='h4'>
                <Header.Content>
                  <em>About this gem</em>
                </Header.Content>
              </Header>
              <Header style={mwFont} as='h4'>
                <Header.Content>
                  {this.props.gem.description}
                </Header.Content>
              </Header>
            </Grid.Column>
          </Grid.Row>


          <Divider hidden section />
          <Grid.Row>
            <Grid.Column>
              <Header as='h2'>
                <Header.Content>
                  Guest Reviews
                </Header.Content>
              </Header>
              <br/>
                3.57 <Rating icon='star' defaultRating={3} maxRating={5} disabled />
            </Grid.Column>

            <Grid.Column>
            <Comment.Group>
              <Header as='h3' dividing>
                Comments
              </Header>
              <Comment>
                <Comment.Content>
                  <Comment.Author as='a'>User</Comment.Author>
                  <Comment.Metadata>
                    <div>Today at 5:42PM</div>
                  </Comment.Metadata>
                  <Comment.Text>How artistic!</Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>
              <Form reply>
                <Form.TextArea />
                <Button content='Add Comment' labelPosition='left' icon='edit' primary />
              </Form>
            </Comment.Group>


            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let gemId = parseInt(ownProps.match.params.id)
  let gem = state.cityGems.gems.find(x => x.id === gemId)
  return {
    gem: gem,
    firstName: state.firstName
  }
}

export default connect(mapStateToProps)(CityGemsDisplay)
