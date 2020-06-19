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
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { withRouter } from 'react-router-dom';

class LoginModal extends Component {
  state = {
    alert_el: null,
    userEmail: '',
    userPassword: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  loginUser = (event) => {
    event.preventDefault();
    this.props.signIn({
      email: this.state.userEmail,
      password: this.state.userPassword,
    });
    // here will be ajax api call for login
  };

  componentDidUpdate(prevProps, prevState) {
    // if (
    //   prevProps.registerLoading !== this.props.registerLoading &&
    //   !this.props.registerLoading &&
    //   !this.props.show &&
    //   !this.props.regError
    // ) {
    //   this.props.onLoginModalToggle();
    // }
    if (prevProps.authToken !== this.props.authToken && this.props.authToken) {
      this.props.onLoginModalToggle();
      this.props.history.push('restaurants');
    }
  }

  render() {
    const { authError } = this.props;
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
            <Row form>
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
                  <Form className='login-form' onSubmit={this.loginUser}>
                    <FormGroup className='mt-2'>
                      <label htmlFor='userName'>Email</label>
                      <Input
                        placeholder='Email'
                        type='email'
                        name='email'
                        id='userEmail'
                        placeholder='Enter your email'
                        onChange={this.handleChange}
                        required
                      />
                    </FormGroup>
                    <FormGroup className='mt-4'>
                      <label htmlFor='password'>Password</label>
                      <Input
                        placeholder='Password'
                        type='password'
                        name='password'
                        onChange={this.handleChange}
                        id='userPassword'
                        required
                      />
                    </FormGroup>
                    <Button block className='btn-round mt-4' color='danger'>
                      Login
                    </Button>
                    <div className='red-text center'>
                      {authError ? <p>{authError}</p> : null}
                    </div>
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

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    regError: state.auth.regError,
    registerLoading: state.auth.registerLoading,
    authToken: state.auth.authToken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credentials) => dispatch(signIn(credentials)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LoginModal));
