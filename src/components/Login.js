import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'semantic-ui-react'

import API from '../backend/data'
import { login } from '../actions/user';

const center = {
 // height: '100%',
 // width: '100%',
 display: 'flex',
 position: 'fixed',
 justifyContent: 'center',
 // bottom: '20px',
 top: '30%',
 right: '30%'
}

 const form = {position: 'absolute',
 left: "30%",
 top: '30%',
 width: '40%',
 textAlign: 'left'
}

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
      localStorage.setItem('username', payload.username)
      this.props.dispatch(login(payload.username))
      this.props.history.push('/profile')
    })
  }


render() {
    return (

      <Form onSubmit={(e) => this.handleSubmit(e)} style={{ backgroundColor: 'green'}} style={form}>
        <h1>Login</h1>
       <Form.Field>
         <label>Email</label>
         <input type='text' placeholder='Email...' name='email' onChange={(e) => this.handleChange(e)} />
       </Form.Field>
       <Form.Field>
         <label>Password</label>
         <input type='password' placeholder='Password...' name='password' onChange={(e) => this.handleChange(e)}  />
       </Form.Field>
       <Button type='submit' style={{backgroundColor: 'green', border: '3px solid black'}}>Submit</Button>
     </Form>
    )
  }

}

export default connect()(Login);
