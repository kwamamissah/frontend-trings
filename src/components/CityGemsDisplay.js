import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  Grid, Image, Rating, Icon, Header,
          Divider, Comment, Form, Button, Checkbox } from 'semantic-ui-react'
import API from '../backend/data'
import { favGems } from '../actions/profile'
import { displayComment } from '../actions/cityGems'

const ykFont = {
  fontFamily: 'Yanone Kaffeesatz, sans-serif'
}

const mwFont = {
  fontFamily: 'Merriweather, serif'
}

const button= {
  border: 'none',
  color: 'black',
  background: '#FFD800',
  borderRadius: '30px',
  textTransform: 'uppercase',
  boxSizing: 'borderBox',
  padding: '15px 40px',
  fontWeight: '400',
  fontSize: '13px',
  cursor: 'pointer'
}


class CityGemsDisplay extends Component {
  state = {
    content: "",
    comments: [],
    errors: "",
    rating: 0
  }

  componentDidMount(){
    debugger
  }


  handleLike = (e) => {
    fetch(`${API}/city_gems/${this.props.gem.id}/likes`, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      "Access-Token": localStorage.getItem("token")
      },
      body: JSON.stringify({user_id: this.props.firstName})
    })
    this.setState({ rating: 1 })
    this.props.dispatch(favGems(localStorage.id))
  }

  handleComment = (e) => {
    // call function that puts the comment on the page
    e.preventDefault()
    fetch(`${API}/city_gems/${this.props.gem.id}/comments`, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      "Access-Token": localStorage.getItem("token")
      },
      body: JSON.stringify({
        body: this.state.content,
        user_id: this.props.firstName
      })
    })
    .then(resp => resp.json())
    .then(comment => this.props.dispatch(displayComment(comment)))
    e.target.reset()
  }



  handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value})
  }


  render(){
    if (this.props.gem === undefined || this.props.user === undefined) { return null; }
    console.log(localStorage.id)
    console.log(this.props.user)

    let findLike = this.props.gem.likes.find(x => x.user_id === parseInt(localStorage.id))
    let like = (!!findLike) ? 1 : this.state.rating

    return(
      <div style={{ backgroundColor: 'white'}}>
        <Grid columns={2} style={{ padding: '3em 3em', width: '100%', position: 'relative'}}>
          <Grid.Row divided >
            <Grid.Column centered>
              <Image size='large' src={this.props.gem.img_url} />
              <br/>
              {(localStorage.length === 0 ) ? <Rating icon='heart' maxRating={1} disabled />
            :<Rating icon='heart' rating={like} maxRating={1} onClick={(e) => this.handleLike(e)} />}
              <br/>
              <Rating defaultRating={3} maxRating={5} disabled />
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
              <a href={this.props.gem.website} target="_blank" rel="noopener noreferrer">{this.props.gem.website}</a>
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
                {this.props.gem.comments.map(comment =>
                  <Comment.Content>
                    <Comment.Author as='a'>{comment.user.username}</Comment.Author>
                    <Comment.Metadata>
                      <div>{comment.user.created_at}</div>
                    </Comment.Metadata>
                    <Comment.Text>{comment.body}</Comment.Text>
                  </Comment.Content>
                )}
              </Comment>
              <Form onSubmit={(e) => this.handleComment(e)} reply>
                <Form.TextArea name='content' placeholder="Tell us what you think..." style={{height: '30%'}} onChange={e => this.handleChange(e)}/>
                <Button style={button} content='Add Comment' labelPosition='left' icon='edit' primary />
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
    firstName: state.firstName,
    user: state.profile.user

  }
}

export default connect(mapStateToProps)(CityGemsDisplay)
