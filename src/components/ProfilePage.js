import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Grid, Card, Header, Segment, Loader, Divider} from 'semantic-ui-react'


import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import CityGems from '../components/CityGems'


//create a section for Favorites
//create a section for Save gems
//create a section for Recommended Gems(random picks not in Fav or Saved)

let QUOTEAPI = `http://quotes.rest/qod.json`


// this.props.dispatch(fetchImages(images))

const loading = () => <Loader active inline='centered' />

class ProfilePage extends Component {

  state = {
    quote: [],
    images: [],
    hour: null,
    query: 'mural'
  }

  fetchQuote = () => {
    fetch(QUOTEAPI)
    .then(resp => resp.json())
    .then(quote => this.setState({ quote }))
  }

  fetchImages = () => {
    fetch(`https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_UNAPIKEY}&per_page=30&orientation=landscape&query=${this.state.query}`)
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
    })
  }

  getTime = () => {
  let date = new Date();
  let hour = date.getHours()
  this.setState({
     hour
  });
 }


  componentDidMount(){
    this.fetchQuote()
    this.fetchImages()
    this.getTime()
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

  renderRandGem = () => {
      let rand = (gem) => Math.floor(Math.random()*gem.length)
      let gems = this.props.gems
      let num = rand(gems)
      let show = gems[num]
      return show
    }

  render(){

    let getGem = this.renderRandGem()

    return(

      <div style={{ backgroundColor: 'white'}}>
        <Grid container style={{ padding: '2em 0em', width: '80%'}}>
          <Grid.Row>
            <Grid.Column>
              <Segment raised style={{backgroundColor: '#f5f5dc'}}>
                <p style={{textAlign: 'center', fontFamily: 'Lora, sans-serif'}}><strong>quote of the day:</strong> {this.getQOD()}</p>
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Divider hidden/>

          <Grid.Row>
            <Grid.Column>
              <Header as='h1' textAlign='center' style={{ fontFamily: 'Caveat, cursive' }} >
                {this.state.hour < 12 ?
              `Good Morning ${this.props.username} ☀️` :
              `Good Evening ${this.props.username} 🌑` }
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Divider section/>

          <Grid.Row>
            <Grid.Column style={{left: '25%'}}>
              <Carousel width="50%" autoPlay infiniteLoop emulateTouch useKeyboardArrows={true} showIndicators={false}
                 showStatus={false} showArrows={false} showThumbs={false} transitionTime={1000} dynamicHeight={true} >
                  <div textAlign='center'>
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
                  <div>
                    {this.renderRandImage()}
                  </div>
                  <div>
                    {this.renderRandImage()}
                  </div>
              </Carousel>
            </Grid.Column>
          </Grid.Row>
          <Divider hidden/>


          <Grid.Row style={{ padding: '3em 0em' }}>
            <Grid.Column>
              <Header as='h1' textAlign='center' style={{fontFamily: 'Rock Salt, sans-serif'}} >
              My Explore Zone
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Divider />

          <Grid.Row divided>
            <Grid.Column>
              <Header as='h2' style={{ fontFamily: 'Caveat, cursive' }} >
              Favorites <span role="img" aria-label="heart">♥️</span>
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Divider />

          <Grid.Row divided>
            <Grid.Column>
              <Header as='h2' style={{ fontFamily: 'Caveat, cursive' }} >
              Most Recently Viewed <span role="img" aria-label="eyes">👀</span>
              <Divider />
              </Header>
            </Grid.Column>
          </Grid.Row>


          <Grid.Row divided>
            <Grid.Column>
              <Header as='h2'style={{ fontFamily: 'Caveat, cursive' }} >
              Gems of Interest <span role="img" aria-label="diamond">💎</span>
              </Header>
              <Card.Group itemsPerRow={5}>
                {this.props.gems.slice(0,5).map(x => <CityGems key={x.id} id={x.id}  />)}
              </Card.Group>
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
    gems: state.cityGems.gems
   }
}

export default connect(mapStateToProps)(ProfilePage);
