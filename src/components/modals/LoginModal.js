import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
  Card,
  Row,
  Col,
} from 'reactstrap';
import Alert from '../alert/Alert';
import './LoginModal.scss';

class LoginModal extends Component {
  state = {
    error_el: null,
  };

  handleSubmit(event) {
    event.preventDefault();
    this.props.onLogin();
    // here will be ajax api call for login
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.user !== this.props.user) {
      if (this.props.user) {
        this.setState({
          error_el: <Alert message='Logged successfully' type='success' />,
        });
        setTimeout(() => {
          this.props.onLoginModalToggle();
        }, 1000);
      } else {
        this.setState({
          error_el: (
            <Alert message='Incorrect user name or password!' type='danger' />
          ),
        });
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <Modal
          className=''
          centered
          //   style={{ width: 600 }}
          // size='sm'
          isOpen={this.props.show}
          toggle={this.props.onLoginModalToggle}
        >
          <ModalBody>
            <Row>
              <Col className='ml-auto mr-auto'>
                <Card className='card-plain ml-auto mr-auto'>
                  <h3 className='title mx-auto'>Welcome</h3>
                  <div className='social-line text-center'>
                    <Button
                      className='btn-neutral btn-just-icon mr-1'
                      color='facebook'
                      href='#pablo'
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className='fa fa-facebook-square' />
                    </Button>
                    <Button
                      className='btn-neutral btn-just-icon mr-1'
                      color='google'
                      href='#pablo'
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className='fa fa-google-plus' />
                    </Button>
                    <Button
                      className='btn-neutral btn-just-icon'
                      color='twitter'
                      href='#pablo'
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className='fa fa-twitter' />
                    </Button>
                  </div>
                  <Form className='register-form'>
                    <div className='mt-2'>
                      <label>Email</label>
                      <Input placeholder='Email' type='text' />
                    </div>
                    <div className='mt-4'>
                      <label>Password</label>
                      <Input placeholder='Password' type='password' />
                    </div>
                    <Button block className='btn-round mt-4' color='danger'>
                      Login
                    </Button>
                  </Form>
                  <div className='forgot'>
                    <Button
                      className='btn-link'
                      color='danger'
                      href='#pablo'
                      onClick={(e) => e.preventDefault()}
                    >
                      Forgot password?
                    </Button>
                  </div>
                </Card>
              </Col>
            </Row>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default LoginModal;
