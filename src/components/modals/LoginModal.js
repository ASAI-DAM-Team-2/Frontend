import React, { Component } from "react";
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
  Row,
  Col,
} from "reactstrap";
import Alert from "../alert/Alert";

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
          error_el: <Alert message="Logged successfully" type="success" />,
        });
        setTimeout(() => {
          this.props.onLoginModalToggle();
        }, 1000);
      } else {
        this.setState({
          error_el: (
            <Alert message="Incorrect user name or password!" type="danger" />
          ),
        });
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          isOpen={this.props.show}
          toggle={this.props.onLoginModalToggle}
        >
          <ModalHeader>
            <i className="nc-icon nc-book-bookmark" />
            &nbsp;Login
            <div>{this.state.error_el}</div>
          </ModalHeader>
          <ModalBody>
            <Form method="POST" onSubmit={(event) => this.handleSubmit(event)}>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="userName">*Your user name</Label>
                    <Input
                      type="text"
                      name="username"
                      id="userName"
                      placeholder="Enter your user name"
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="password">*Your password</Label>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter your password"
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md={12} className="text-center">
                  <Button type="submit" color="info" className="w-100">
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </ModalBody>
          <ModalFooter>
            <div className="mr-auto ml-2">
              New to DISH DELIVERY? Create an account.
            </div>
            <Button color="danger" onClick={this.props.onLoginModalToggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}

export default LoginModal;
