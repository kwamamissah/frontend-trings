import React from 'react'

import ProfilePage from './ProfilePage'

export default class Unsplash extends Compennt {

  state = {
    images: []
  }

  fetchImages = () => {
    fetch(`https://api.unsplash.com/search/photos/?client_id=${UNAPIKEY}&per_page=15&orientation=landscape&query=art`)
    .then(resp => resp.json())
    .then(images => this.setState({ images }))
  }

  componentDidMount(){
    this.fetchImages()
  }

  render(){
    return{
      <div>
        {this.state.images.map(image => <ProfilePage image={image.urls.small})}
      </div>
    }
  }
}
