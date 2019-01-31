import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

let city = 'Atlanta'
let APIKEY = `5bbb1b66f4a5c0d2731ed0a9d297cb63`
const WeatherAPI = `api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKEY}`

export default class Navbar extends Component {
  state = {
    activeItem: 'home',
    weather: ''
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  // fetchWeather = (city) => {
  //   fetch(WeatherAPI)
  //   .then(resp => resp.json())
  //   .then(console.log)
  // }
  //
  // componentDidMount(){
  //   this.fetchWeather()
  // }

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item
          name='city'
          active={activeItem === 'city'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='gems'
          active={activeItem === 'gems'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          />
          </Menu.Menu>
      </Menu>
    )
  }
}
