import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button, Header } from 'semantic-ui-react'

import API from '../backend/data'
import { login } from '../actions/user';


 const form = {position: 'absolute',
 left: "30%",
 top: '30%',
 width: '40%',
 textAlign: 'left',
}

class Login extends Component {
  state = {
  email: "",
  password: "",
  erros: ""
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
      if (payload.errors) {
        this.setState({ errors: payload.errors})
        this.props.history.push('/login')
      } else {
        localStorage.setItem('token', payload.token)
        localStorage.setItem('username', payload.username)
        localStorage.setItem('firstName', payload.first_name)
        this.props.dispatch(login(payload.first_name))
        this.props.history.push('/profile')
      }
    })
  }


render() {
    return (


      <Form onSubmit={(e) => this.handleSubmit(e)} style={form}>
        <Header style={{color: 'red'}}>{this.state.errors ? this.state.errors : null}</Header>
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
