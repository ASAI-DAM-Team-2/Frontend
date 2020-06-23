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
import "./EditRestaurant.scss";
import { connect } from "react-redux";
import { editRestaurant } from "../../store/actions/restaurantActions";

class EditRestaurant extends Component {
  state = {
    modal: false,
    backdrop: true,
    keyboard: true,
    restaurantName: this.props.restaurant.name,
    restaurantAddress: this.props.restaurant.adress,
    companyId: this.props.restaurant.company_id,
    createTitle: "save",
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
    this.setState({ createTitle: "save" });
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
    const { restaurant_id } = this.props.restaurant;
    const { restaurantName, restaurantAddress, companyId } = this.state;
    this.props.editRestaurant({
      restaurantName,
      restaurantAddress,
      companyId,
      restaurant_id,
    });
    this.setState({ createTitle: "saving..." });
  };

  componentDidUpdate(prevProps) {
    if (
      prevProps.editLoading !== this.props.editLoading &&
      !this.props.editLoading &&
      this.state.modal
    ) {
      this.toggle();
    }
  }

  render() {
    const { name, adress, company_id } = this.props.restaurant;
    return (
      <div className="create-restaurant">
        <Form inline onSubmit={(e) => e.preventDefault()}>
          <Button
            className="btn-link"
            color="primary"
            onClick={this.toggle.bind(this)}
          >
            edit
          </Button>
        </Form>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle.bind(this)}
          backdrop={this.state.backdrop}
          keyboard={this.state.keyboard}
          className="edit-modal"
        >
          <ModalHeader toggle={this.toggle.bind(this)}>
            Edit Restaurant
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="restaurantName">Restaurant name</Label>
                <Input
                  type="text"
                  id="restaurantName"
                  placeholder="Restaurant name"
                  onChange={this.handleChange}
                  defaultValue={name}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="restaurantAddress">Address</Label>
                <Input
                  type="text"
                  id="restaurantAddress"
                  placeholder="Restaurant address"
                  onChange={this.handleChange}
                  defaultValue={adress}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="companyId">Associated with company</Label>
                <Input
                  type="select"
                  name="select"
                  id="companyId"
                  onChange={this.handleChange}
                  defaultValue={company_id}
                  required
                >
                  <option value="1">Coca cola</option>
                  <option value="2">Pepsi</option>
                  <option value="3">Pizza Hut</option>
                  <option value="4">Doritos s.r.o</option>
                  <option value="5">Mamamia</option>
                </Input>
              </FormGroup>
              <div className="action-buttons">
                <Button color="success">{this.state.createTitle}</Button>
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
    editRestaurant: (restaurant) => dispatch(editRestaurant(restaurant)),
  };
};

export default connect(null, mapDispatchToProps)(EditRestaurant);
