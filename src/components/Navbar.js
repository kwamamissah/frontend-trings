import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

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
      </Menu>
    )
  }
}
