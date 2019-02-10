import React, { Component } from 'react'

import ProfilePage from './ProfilePage'
import { fetchImages } from '../actions/cityGems'

let UNAPIKEY = 'de4f6d05437fd7ae0fa1315b1b8542b78a748392aa7560008b1fa826041f7e4c'

export default class Unsplash extends Component {


  fetchImages = () => {
    fetch(`https://api.unsplash.com/search/photos/?client_id=${UNAPIKEY}&per_page=15&orientation=landscape&query=art`)
    .then(resp => resp.json())
    .then(images => this.props.dispatch(fetchImages(images)))
  }

  componentDidMount(){
    this.fetchImages()
  }

  render(){
    console.log(this.state.images.results)
    return(
      <div>

      </div>
    )
  }
}
