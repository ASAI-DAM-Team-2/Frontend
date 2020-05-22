import React from 'react';
// reactstrap components
import {
  Button,
  Card,
  Form,
  Input,
  Container,
  Row,
  Col,
  FormGroup,
} from 'reactstrap';
import Alert from '../../components/alert/Alert';
import { connect } from 'react-redux';

import { signUp } from '../../store/actions/authActions';

class RegisterPage extends React.Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
  };

  componentDidMount(prevProps) {
    document.body.classList.add('register-page');
    return function cleanup() {
      document.body.classList.remove('register-page');
    };
  }

  componentDidUpdate(prevProps) {
    document.body.classList.add('register-page');
    return function cleanup() {
      document.body.classList.remove('register-page');
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp({
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div
          className='page-header'
          style={{
            backgroundImage:
              'url(' + require('../../assets/img/login-image.jpg') + ')',
          }}
        >
          <div className='filter' />
          <Container>
            <Row>
              <Col className='ml-auto mr-auto' lg='4'>
                <Card className='card-register ml-auto mr-auto'>
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
                  <Form onSubmit={this.handleSubmit} className='register-form'>
                    <div className='input-field'>
                      <label htmlFor='email'>Email</label>
                      <Input
                        placeholder='Email'
                        type='email'
                        id='email'
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className='input-field'>
                      <label htmlFor='password'>Password</label>
                      <Input
                        placeholder='Password'
                        type='password'
                        id='password'
                        onChange={this.handleChange}
                      />
                    </div>

                    <div className='input-field'>
                      <label htmlFor='confirmPassword'>Confirm password</label>
                      <Input
                        placeholder='Confirm password'
                        type='password'
                        id='confirmPassword'
                        onChange={this.handleChange}
                      />
                    </div>

                    <div className='input-field'>
                      <label htmlFor='firstName'>First name</label>
                      <Input
                        placeholder='First name'
                        type='text'
                        id='firstName'
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className='input-field'>
                      <label htmlFor='lastName'>Last name</label>
                      <Input
                        placeholder='Last name'
                        type='text'
                        id='lastName'
                        onChange={this.handleChange}
                      />
                    </div>

                    <div>
                      <Button block className='btn-round' color='danger'>
                        Register
                      </Button>
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
          </Container>
          <div className='footer register-footer text-center'>
            <h6>
              © {new Date().getFullYear()}, made with{' '}
              <i className='fa fa-heart heart' /> by Creative Tim
            </h6>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    regError: state.auth.regError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (credentials) => dispatch(signUp(credentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
