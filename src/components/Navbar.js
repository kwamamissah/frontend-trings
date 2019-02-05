import React, { Component } from 'react'
import { Image, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

let city = 'Atlanta'
let APIKEY = `5bbb1b66f4a5c0d2731ed0a9d297cb63`
const WeatherAPI = `api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKEY}`

const iconCss = {
  height: 'auto',
  width: 'auto',
  maxWidth: '25px',
  maxHeight: '25px'
}

class Navbar extends Component {
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
    if (main === undefined) {
      console.log('content is loading')
    } else {
      let temp = main.temp
      return (Math.round(temp))
    }
  }

  getIcon = () => {
    let weather = this.state.weather.weather
    if (weather === undefined) {
      console.log('content is loading')
    } else {
      let icon = weather[0].icon
      return icon
    }
  }


  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted borderless style={{ margin: "0", fontFamily: 'Lora, serif'}}>
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
           <Image style={iconCss} src={`http://openweathermap.org/img/w/${this.getIcon()}.png`} as='icon'/>
         </Menu.Item>

        <Menu.Item
          name={this.getTemp()}/>

        <Menu.Menu position='right'>
          {localStorage.getItem('username') ?
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}/> :
          <Link to='/login'>
          <Menu.Item
            name='login'
            active={activeItem === 'login'}
            onClick={this.handleItemClick}/>
          </Link>}
        </Menu.Menu>


      </Menu>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Navbar);
