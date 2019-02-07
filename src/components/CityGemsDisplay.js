import React from 'react';

import { connect } from 'react-redux';
import {  Grid, Image, Rating, Icon, Header,
          Divider, Sticky, Comment, Form, Button } from 'semantic-ui-react'


const CityGemsDisplay = (props) => {
  if (props.gem === undefined) { return null; }

  return(
    <div style={{ backgroundColor: 'white'}}>
      <Grid columns={2} style={{ padding: '3em 3em', width: '100%', position: 'relative'}}>
        <Grid.Row divided >
          <Grid.Column centered>
            <Sticky>
            <Image size='large' src={props.gem.img_url} />
            <br/>
            <a>
              <Rating icon='heart' defaultRating={0} maxRating={1} /> <br/>
              <Rating defaultRating={3} maxRating={5} disabled />
            </a>
            </Sticky>
          </Grid.Column>



          <Grid.Column>
            <Header as='h5'>{props.gem.category_id.name}</Header>
            <Header as='h1'>{props.gem.name}</Header>
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


        <Divider hidden section />
        <Grid.Row>
          <Grid.Column>
            <Header as='h2'>
              <Header.Content>
                Guest Reviews
              </Header.Content>
            </Header>
            <br/>
            <a>
              3.57 <Rating icon='star' defaultRating={3} maxRating={5} disabled />
            </a>
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

const mapStateToProps = (state, ownProps) => {
  let gemId = parseInt(ownProps.match.params.id)
  let gem = state.cityGems.find(x => x.id === gemId)
  return { gem: gem }
}

export default connect(mapStateToProps)(CityGemsDisplay)
