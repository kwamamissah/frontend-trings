import React, { Component } from 'react'
import { Image, Menu, Dropdown, Loader, Input } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout} from '../actions/user';

let city = 'Atlanta'
let APIKEY = `5bbb1b66f4a5c0d2731ed0a9d297cb63`
const WeatherAPI = `api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKEY}`

const iconCss = {
  height: 'auto',
  width: 'auto',
  maxWidth: '25px',
  maxHeight: '25px'
}
const options = [
  { key: 1, text: 'DayTime Events', value: 1 },
  { key: 2, text: 'Bites', value: 2 },
  { key: 3, text: 'Clothing', value: 3 },
  { key: 4, text: 'Art', value: 4 },
  { key: 5, text: 'Night Life', value: 5 },
  { key: 6, text: 'Alternative Ideas', value: 6 }
]
const loading = () => <Loader active inline='centered' />

class Navbar extends Component {
  state = {
    activeItem: 'home',
    weather: [],
    city: 'Atlanta'
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  fetchWeather = (city = this.state.city) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=5bbb1b66f4a5c0d2731ed0a9d297cb63&units=imperial`)
    .then(resp => resp.json())
    .then(weather => this.setState({weather: weather}))
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  componentDidMount(){
    this.fetchWeather()
  }

  getTemp = () => {
    let main = this.state.weather.main
    if (main === undefined) {
      loading()
    } else {
      let temp = main.temp
      return (Math.round(temp))
    }
  }

  getIcon = () => {
    let weather = this.state.weather.weather
    if (weather === undefined) {
      loading()
    } else {
      let icon = weather[0].icon
      return icon
    }
  }


  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted borderless style={{ margin: "0", fontFamily: 'Lora, serif'}} size='small'>
        {this.props.username ?
        <Menu.Item as={Link} to='/profile'
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick} />
          :
        <Menu.Item as={Link} to='/'
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick} /> }

        <Menu.Item compact as={Link} to='/city_gems'>
          <Dropdown text='Gems' options={options} simple item
          active={activeItem === 'gems'}
          onClick={this.handleItemClick} />
          </Menu.Item>


        <Menu.Item>
          <Input icon='map' placeholder='City...' name='city' onChange={(e) => this.handleChange(e)} />
        </Menu.Item>

        <Menu.Item
          name={this.state.weather.name}/>

          <Menu.Item
           name='weather icon'>
           <Image style={iconCss} src={`http://openweathermap.org/img/w/${this.getIcon()}.png`} as='icon'/>
         </Menu.Item>

        <Menu.Item
          name={this.getTemp()}/>

        <Menu.Menu position='right'>
          {this.props.username ?
            <Menu.Item as={Link} to='/'
              name='logout'
              active={activeItem === 'logout'}
              onClick={() => this.props.dispatch(logout())}/>
            :

            <Menu.Item as={Link} to='/login'
              name='login'
              active={activeItem === 'login'}
              onClick={this.handleItemClick}/>
            }
        </Menu.Menu>


      </Menu>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.username
   }
}

export default connect(mapStateToProps)(Navbar);
