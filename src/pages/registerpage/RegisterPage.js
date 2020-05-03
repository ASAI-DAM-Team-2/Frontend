import React, { Component } from "react";

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
} from "reactstrap";
import Alert from "../../components/alert/Alert";

class RegisterPage extends Component {
  state = {
    alert_el: null,
  };

  handleSubmit(event) {
    event.preventDefault();
    // when there will be ajax call true will be changed to its result
    if (true) {
      this.setState({
        alert_el: <Alert message="Registered successfully" type="success" />,
      });
      // there will have to be more if else to determinate what went wrong in ajax call
    } else {
      this.setState({
        alert_el: <Alert message="Something went wrong" type="danger" />,
      });
    }
    // here will be ajax api call for register
  }

  render() {
    return (
      <React.Fragment>
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto">
                <h3 className="title mx-auto">Register</h3>
                {this.state.alert_el}
                <Form
                  className="register-form"
                  method="POST"
                  onSubmit={(event) => this.handleSubmit(event)}
                >
                  <FormGroup>
                    <label for="email">*Email</label>
                    <Input
                      placeholder="Email"
                      id="email"
                      type="email"
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <label for="username">*User name</label>
                    <Input
                      placeholder="User Name"
                      id="username"
                      type="text"
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <label id="password">*Password</label>
                    <Input
                      placeholder="Password"
                      id="password"
                      type="password"
                      required
                    />
                  </FormGroup>
                  <Button type="submit" className="w-100" color="danger">
                    Register
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="footer register-footer text-center">
          <h6>
            © {new Date().getFullYear()}, made with{" "}
            <i className="fa fa-heart heart" /> by Creative Tim
          </h6>
        </div>
      </React.Fragment>
    );
  }
}

export default RegisterPage;
