import React, {Component} from 'react';
import ReactModalLogin from 'react-modal-login';
import { Header, Form, Modal } from 'semantic-ui-react'


class Modal extends Component {

  state = {
    open: false
  }

  openModal = () => {
    this.setState({open: true})
  }

  closeModal = () => {
    this.setState({open: false})
  }

  render(){
    return(
      <Modal trigger={<Button>Login</Button>}>
       <Modal.Header>Login</Modal.Header>
       <Modal.Content>
         <Modal.Description>
           <Header>Default Profile Image</Header>
           <p>We've found the following gravatar image associated with your e-mail address.</p>
           <p>Is it okay to use this photo?</p>
         </Modal.Description>
       </Modal.Content>
     </Modal>
    )
  }
}
