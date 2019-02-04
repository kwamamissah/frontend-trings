import React, { Component } from 'react';


import { connect } from 'react-redux';
import { Form, Button } from 'semantic-ui-react'

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
  }

render() {
    return (
      <Form onSubmit={(e) => this.handleSubmit(e)} style={{ backgroundColor: 'white', alignItems: 'center'}}>
       <Form.Field>
         <label>Email</label>
         <input placeholder='Email...' name='email' onChange={(e) => this.handleChange(e)} style={{ width: '45%'}}/>
       </Form.Field>
       <Form.Field>
         <label>Last Name</label>
         <input placeholder='Password...' name='password' onChange={(e) => this.handleChange(e)} style={{ width: '45%'}} />
       </Form.Field>
       <Button type='submit' style={{backgroundColor: 'green', border: '3px solid black'}}>Submit</Button>
     </Form>
    )
  }

}

export default connect()(Login);
