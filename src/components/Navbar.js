import React, { Component } from 'react'
import { Image, Menu, Dropdown, Loader, Input } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout} from '../actions/user';


const iconCss = {
  height: 'auto',
  width: 'auto',
  maxWidth: '25px',
  maxHeight: '25px'
}
// const options = [
//   { key: 1, text: 'DayTime Events', value: 1 },
//   { key: 2, text: 'Bites', value: 2 },
//   { key: 3, text: 'Clothing', value: 3 },
//   { key: 4, text: 'Art', value: 4 },
//   { key: 5, text: 'Night Life', value: 5 },
//   { key: 6, text: 'Alternative Ideas', value: 6 }
// ]
const loading = () => <Loader active inline='centered' />

class Navbar extends Component {
  state = {
    activeItem: 'home',
    weather: [],
    city: 'Atlanta'
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  fetchWeather = (city = this.state.city) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.REACT_APP_APPID}&units=imperial`)
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
// add onClick to engage with dispatch in order to interact with filter

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

        <Menu.Item as={Link} to='/city_gems/all'>
          <Dropdown  simple item text='Gems' >
           <Dropdown.Menu>
             <Dropdown.Item as={Link} to='/city_gems/daytime'>DayTime Events</Dropdown.Item>
             <Dropdown.Item as={Link} to='/city_gems/bites'>Bites</Dropdown.Item>
             <Dropdown.Item as={Link} to='/city_gems/clothing'>Clothing</Dropdown.Item>
             <Dropdown.Item as={Link} to='/city_gems/art'>Art</Dropdown.Item>
             <Dropdown.Item as={Link} to='/city_gems/nightlife'>Night Life</Dropdown.Item>
             <Dropdown.Item as={Link} to='/city_gems/altideas'>Alternative Ideas</Dropdown.Item>
           </Dropdown.Menu>
         </Dropdown>
        </Menu.Item>


        <Menu.Item>
          <Input icon='map' placeholder='City...' name='city' onChange={(e) => this.handleChange(e)} />
        </Menu.Item>

        <Menu.Item
          name={this.state.weather.name}/>

          <Menu.Item
           name='weather icon'>
           <Image style={iconCss} src={`http://openweathermap.org/img/w/${this.getIcon()}.png`} />
         </Menu.Item>

        <Menu.Item
          name={this.getTemp()}/>

        <Menu.Menu position='right'>
          {this.props.username ? null :
          <Menu.Item as={Link} to='/signup'
            name='signup'
            active={activeItem === 'signup'}
            onClick={this.handleItemClick} /> }

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
