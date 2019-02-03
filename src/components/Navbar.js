import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

let city = 'Atlanta'
let APIKEY = `5bbb1b66f4a5c0d2731ed0a9d297cb63`
const WeatherAPI = `api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKEY}`

export default class Navbar extends Component {
  state = {
    activeItem: 'home',
    weather: ''
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  fetchWeather = (city = 'Atlanta') => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=5bbb1b66f4a5c0d2731ed0a9d297cb63`)
    .then(resp => resp.json())
    .then(console.log)
  }

  componentDidMount(){
    this.fetchWeather()
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted borderless style={{ margin: "0"}}>
        <Link to='/'>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick} />
          </Link>
        <Menu.Item
          name='city'
          active={activeItem === 'city'}
          onClick={this.handleItemClick}/>

        <Link to='/city_gems'>
          <Menu.Item
            name='gems'
            active={activeItem === 'gems'}
            onClick={this.handleItemClick}/>
        </Link>

        <Menu.Menu position='right'>
          <Menu.Item
            name='login'
            active={activeItem === 'login'}
            onClick={this.handleItemClick}/>
          </Menu.Menu>
      </Menu>
    )
  }
}
