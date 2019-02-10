import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Grid, Header, Segment, Loader, Divider} from 'semantic-ui-react'
// import { fetchImages } from '../actions/cityGems'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


//creates a span at the top of page that greets user Good Morning or Happy Day of Week user
//creates a span under initial span that retrieves and displays QOD - format *beige background + i

//create a span under that just for a centered profile pic
//create a section for Favorites
//create a section for Save gems
//create a section for Recommended Gems(random picks not in Fav or Saved)

let QUOTEAPI = `http://quotes.rest/qod.json`
let UNAPIKEY = 'de4f6d05437fd7ae0fa1315b1b8542b78a748392aa7560008b1fa826041f7e4c'



// const center = {
//  height: '100%',
//  width: '100%',
//  display: 'flex',
//  position: 'fixed',
//  justifyContent: 'center'
// }

// this.props.dispatch(fetchImages(images))

const loading = () => <Loader active inline='centered' />

class ProfilePage extends Component {

  state = {
    quote: [],
    images: [],
    query: 'art'
  }

  fetchQuote = () => {
    fetch(QUOTEAPI)
    .then(resp => resp.json())
    .then(quote => this.setState({ quote }))
  }

  fetchImages = () => {
    fetch(`https://api.unsplash.com/search/photos/?client_id=${UNAPIKEY}&per_page=30&orientation=landscape&query=${this.state.query}`)
    .then(resp => resp.json())
    .then(data => {
      let images = data.results.map((image) => {
        return(
          <div key={image.id}>
            <img src={image.urls.small} />
          </div>
        )
      })
      this.setState({ images })
      console.log('state', this.state.images)
    })
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


renderRandImage = () => {
    let rand = (image) => Math.floor(Math.random()*image.length)
    let images = this.state.images
    let num = rand(images)
    let show = images[num]
    return show
  }

  render(){
    console.log(this.renderRandImage())
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
              Hi {this.props.username}! <span role="img" aria-label="happy">😀</span>
              </Header>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column >
              <Carousel autoPlay infiniteLoop emulateTouch showIndicators={false} showStatus={false} showThumbs={false} transitionTime={1000} >
                  <div>
                    {this.renderRandImage()}
                  </div>
                  <div>
                    {this.renderRandImage()}
                  </div>
                  <div>
                    {this.renderRandImage()}
                  </div>
                  <div>
                    {this.renderRandImage()}
                  </div>
                  <div>
                    {this.renderRandImage()}
                  </div>
              </Carousel>
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
              Favorites <span role="img" aria-label="heart">♥️</span>
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Divider />

          <Grid.Row divided>
            <Grid.Column>
              <Header as='h2' >
              Most Recently Viewed <span role="img" aria-label="eyes">👀</span>
              <Divider />
              </Header>
            </Grid.Column>
          </Grid.Row>


          <Grid.Row divided>
            <Grid.Column>
              <Header as='h2' >
              Gems of Interest <span role="img" aria-label="diamond">💎</span>
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
  return {
    username: state.username,
    images: state.cityGems.images
   }
}

export default connect(mapStateToProps)(ProfilePage);
