import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Grid, Header, Segment, Loader, Image, Divider} from 'semantic-ui-react'


//creates a span at the top of page that greets user Good Morning or Happy Day of Week user
//creates a span under initial span that retrieves and displays QOD - format *beige background + i

//create a span under that just for a centered profile pic
//create a section for Favorites
//create a section for Save gems
//create a section for Recommended Gems(random picks not in Fav or Saved)

let QUOTEAPI = `http://quotes.rest/qod.json`
let UNAPIKEY = 'de4f6d05437fd7ae0fa1315b1b8542b78a748392aa7560008b1fa826041f7e4c'



const center = {
 height: '100%',
 width: '100%',
 display: 'flex',
 position: 'fixed',
 justifyContent: 'center'
}

const loading = () => <Loader active inline='centered' />

class ProfilePage extends Component {

  state = {
    quote: [],
    images: []
  }

  fetchQuote = () => {
    fetch(QUOTEAPI)
    .then(resp => resp.json())
    .then(quote => this.setState({ quote }))
  }

  fetchImages = () => {
    fetch(`https://api.unsplash.com/search/photos/?client_id=${UNAPIKEY}&per_page=15&orientation=landscape&query=art`)
    .then(resp => resp.json())
    .then(images => this.setState({ images }))
  }

  componentDidMount(){
    this.fetchQuote()
    this.fetchImages()
  }


  getQOD = () => {
    let data = this.state.quote.contents
    if (data === undefined) {
      loading()
    } else {
      let contents = data.quotes[0]
      let quote = contents.quote
      let author = contents.author
      return quote+ ' -'+author
    }
  }

  getImages = () => {
    let data = this.state.images.results
    if (data === undefined) {
      loading()
    } else {
      return data
      debugger
    }
  }

  render(){

    return(

      <div style={{ backgroundColor: 'white'}}>
        <Grid container style={{ padding: '3em 0em', width: '80%'}}>
          <Grid.Row>
            <Grid.Column>
              <Segment style={{backgroundColor: '#f5f5dc'}}>
                <p style={{textAlign: 'center', fontFamily: 'Lora, sans-serif'}}><strong>quote of the day:</strong> {this.getQOD()}</p>
              </Segment>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Header as='h1' textAlign='center' >
              Hi {this.props.username}! <span>😀</span>
              </Header>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column divided>
              <Header as='h1' textAlign='center' >
              </Header>

            </Grid.Column>
          </Grid.Row>


          <Grid.Row style={{ padding: '3em 0em' }}>
            <Grid.Column>
              <Header as='h1' textAlign='center' >
              My Explore Zone
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Divider />

          <Grid.Row divided>
            <Grid.Column>
              <Header as='h2' >
              Favorites ♥️
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Divider />

          <Grid.Row divided>
            <Grid.Column>
              <Header as='h2' >
              Most Recently Viewed 👀
              <Divider />
              </Header>
            </Grid.Column>
          </Grid.Row>


          <Grid.Row divided>
            <Grid.Column>
              <Header as='h2' >
              Gems of Interest 💎
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Divider />


        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { username: state.username }
}

export default connect(mapStateToProps)(ProfilePage);
