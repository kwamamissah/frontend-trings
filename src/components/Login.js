import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'semantic-ui-react'

import API from '../backend/data'
import { login } from '../actions/user';

class Login extends Component {
  state = {
  email: "",
  password: ""
}

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch(`${API}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(resp => resp.json())
    .then(payload => {
      localStorage.setItem('token', payload.token)
      localStorage.setItem('name', payload.name)
      this.props.dispatch(login(payload.name))
      this.props.history.push('/')
    })
  }


render() {
    return (
      <Form onSubmit={(e) => this.handleSubmit(e)} style={{ backgroundColor: 'white', alignItems: 'center'}}>
       <Form.Field>
         <label>Email</label>
         <input type='text' placeholder='Email...' name='email' onChange={(e) => this.handleChange(e)} style={{ width: '45%'}}/>
       </Form.Field>
       <Form.Field>
         <label>Password</label>
         <input type='password' placeholder='Password...' name='password' onChange={(e) => this.handleChange(e)} style={{ width: '45%'}} />
       </Form.Field>
       <Button type='submit' style={{backgroundColor: 'green', border: '3px solid black'}}>Submit</Button>
     </Form>
    )
  }

}

export default connect()(Login);
