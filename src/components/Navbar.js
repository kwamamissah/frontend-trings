import React, { Component } from 'react'
import { Icon, Image, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

let city = 'Atlanta'
let APIKEY = `5bbb1b66f4a5c0d2731ed0a9d297cb63`
const WeatherAPI = `api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKEY}`

export default class Navbar extends Component {
  state = {
    activeItem: 'home',
    weather: []
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  fetchWeather = (city = 'Atlanta') => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=5bbb1b66f4a5c0d2731ed0a9d297cb63&units=imperial`)
    .then(resp => resp.json())
    .then(weather => this.setState({weather: weather}))
  }



  componentDidMount(){
    this.fetchWeather()
  }

  getTemp = () => {
    let main = this.state.weather.main
    let name = this.state.weather.name
    let weather = this.state.weather.weather

    if (main === undefined) {
      console.log('content is loading')
    } else {
      let temp = main.temp
      let icon = weather[0].icon
      let description = weather[0].description

      console.log(name, <img src = {`http://openweathermap.org/img/w/${icon}.png`} alt="icon"/>, Math.round(temp))
      return (name, Math.round(temp))

    }
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

        <Menu.Item
          name={this.state.weather.name}/>

        <Menu.Item
         name='weather icon'>
         <Image src='http://openweathermap.org/img/w/04d.png' as={'i'} />
       </Menu.Item>

        <Menu.Item
          name={this.getTemp()}/>

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
