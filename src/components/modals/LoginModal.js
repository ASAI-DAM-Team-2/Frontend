import React, {Component} from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';

class LoginModal extends Component {
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
                <ModalHeader
                    toggle={this.props.onLoginModalToggle}
                >
                    <span id="contained-modal-title-vcenter">
                        Login
                    </span>
                </ModalHeader>
                <ModalBody>
                    <h4>Centered Modal</h4>
                    <p>
                        Some lovely text
                    </p>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={this.props.onLoginModalToggle}>Close</Button>
                </ModalFooter>
                </Modal>
            </React.Fragment>
        );
    }
}

export default LoginModal;
