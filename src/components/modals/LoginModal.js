import React, {Component} from 'react';
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
    Col
} from 'reactstrap';

class LoginModal extends Component {

    handleLoginClick = () => {
        this.props.onLogin();
        this.props.onLoginModalToggle();
    };

    render () {
        return (
            <React.Fragment>
                <Modal
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    isOpen={this.props.show}
                    toggle={this.props.onLoginModalToggle}
                >
                <ModalHeader toggle={this.props.onLoginModalToggle}>
                        <i className='nc-icon nc-book-bookmark' />&nbsp;Login
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="userName">Your user name</Label>
                                    <Input type="text" name="username" id="userName" placeholder="Enter your user name" required/>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="password">Your password</Label>
                                    <Input type="password" name="password" id="password" placeholder="Enter your password" required/>
                                </FormGroup>
                            </Col>
                            <Col md={12} className="text-center">
                                <Button color="info" onClick={this.handleLoginClick} className="w-100">
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
                    <Button color="danger" onClick={this.props.onLoginModalToggle}>Close</Button>
                </ModalFooter>
                </Modal>
            </React.Fragment>
        );
    }
}

export default LoginModal;
