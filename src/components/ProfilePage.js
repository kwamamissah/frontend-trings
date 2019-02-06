import React, { Component } from 'react'
import { Grid, Header, Segment } from 'semantic-ui-react'

//creates a span at the top of page that greets user Good Morning or Happy Day of Week user
//creates a span under initial span that retrieves and displays QOD - format *beige background + i

//create a span under that just for a centered profile pic
//create a section for Favorites
//create a section for Save gems
//create a section for Recommended Gems(random picks not in Fav or Saved)

let QUOTEAPI = `http://quotes.rest/qod.json`

const center = {
 height: '100%',
 width: '100%',
 display: 'flex',
 position: 'fixed',
 justifyContent: 'center'
}

export default class ProfilePage extends Component {

  state = {
    quote: []
  }

  componentDidMount(){
    fetch(QUOTEAPI)
    .then(resp => resp.json())
    .then(quote => this.setState({ quote }))
  }

  getQOD = () => {
    let data = this.state.quote.contents
    if (data === undefined) {
      console.log('content is loading')
    } else {
      let contents = data.quotes[0]
      let quote = contents.quote
      let author = contents.author
      return quote+ ' -'+author
    }
  }

  render(){

    return(

      <div style={{ backgroundColor: 'white'}}>
        <Grid container style={{ padding: '3em 0em' }} >
          <Grid.Row>
            <Grid.Column>
              <Header as='h1' dividing >
                Hi User! <span>😀</span>
              </Header>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Segment style={{backgroundColor: '#f5f5dc'}}>
                <p style={{justifyContent: 'center', fontFamily: 'Lora, sans-serif'}}><strong>quote of the day:</strong> {this.getQOD()}</p>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
