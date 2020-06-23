import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  FormText,
  Label,
  Form,
  FormGroup,
} from "reactstrap";
import "./UpdateUser.scss";
import { connect } from "react-redux";
import { updateUser } from "../../store/actions/userActions";

class UpdateUser extends Component {
  state = {
    modal: false,
    backdrop: true,
    keyboard: true,
    userEmail: this.props.userData.Email,
    userName: this.props.userData.Name,
    userSurname: this.props.userData.Surname,
    updateTitle: "Update",
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
    this.setState({ updateTitle: "Update" });
  };

  changeBackdrop = (e) => {
    let value = e.target.value;
    if (value !== "static") {
      value = JSON.parse(value);
    }
    this.setState({
      backdrop: value,
    });
  };

  changeKeyboard = (e) => {
    this.setState({ keyboard: e.currentTarget.checked });
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { userEmail, userName, userSurname } = this.state;
    this.props.updateUser({
      userEmail,
      userName,
      userSurname,
    });
    this.setState({ updateTitle: "Updating..." });
  };

  componentDidUpdate(prevProps) {
    if (
      prevProps.updateLoading !== this.props.updateLoading &&
      !this.props.updateLoading &&
      this.state.modal
    ) {
      this.toggle();
    }
    if (
      typeof this.state.userEmail === "undefined" &&
      typeof this.props.userData.Email !== "undefined"
    ) {
      this.setState({ userEmail: this.props.userData.Email });
    }
    if (
      typeof this.state.userName === "undefined" &&
      typeof this.props.userData.Name !== "undefined"
    ) {
      this.setState({ userName: this.props.userData.Name });
    }
    if (
      typeof this.state.userSurname === "undefined" &&
      typeof this.props.userData.Surname !== "undefined"
    ) {
      this.setState({ userSurname: this.props.userData.Surname });
    }
  }

  render() {
    return (
      <div className="update-user">
        <Form inline onSubmit={(e) => e.preventDefault()}>
          <Button
            className="w-100"
            color="info"
            onClick={this.toggle.bind(this)}
          >
            Edit
          </Button>
        </Form>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle.bind(this)}
          backdrop={this.state.backdrop}
          keyboard={this.state.keyboard}
          className="add-modal"
        >
          <ModalHeader toggle={this.toggle.bind(this)}>Update User</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="userEmail">User email</Label>
                <Input
                  type="email"
                  id="userEmail"
                  placeholder="User email"
                  onChange={this.handleChange}
                  required
                  value={this.state.userEmail}
                />
              </FormGroup>
              <FormGroup>
                <Label for="userName">User name</Label>
                <Input
                  type="text"
                  id="userName"
                  placeholder="User name"
                  onChange={this.handleChange}
                  required
                  value={this.state.userName}
                />
              </FormGroup>
              <FormGroup>
                <Label for="userSurname">User surname</Label>
                <Input
                  type="text"
                  id="userSurname"
                  placeholder="User surname"
                  onChange={this.handleChange}
                  required
                  value={this.state.userSurname}
                />
              </FormGroup>
              <div className="action-buttons">
                <Button color="success">{this.state.updateTitle}</Button>
                <Button color="secondary" onClick={this.toggle.bind(this)}>
                  Cancel
                </Button>
              </div>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => dispatch(updateUser(user)),
  };
};

export default connect(null, mapDispatchToProps)(UpdateUser);
