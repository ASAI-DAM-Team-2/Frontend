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
import "./CreateDish.scss";
import { connect } from "react-redux";
import { createDish } from "../../../store/actions/dishesActions";

class CreateDish extends Component {
  state = {
    modal: false,
    backdrop: true,
    keyboard: true,
    dishTitle: "",
    dishName: "",
    dishPrice: 0,
    dishPicture: "",
    dishDescription: "",
    dishRestaurant_id: 106,
    createTitle: "Create",
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
    this.setState({ createTitle: "create" });
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
    const {
      dishTitle,
      dishName,
      dishPrice,
      dishPicture,
      dishDescription,
      dishRestaurant_id,
    } = this.state;
    this.props.createDish({
      dishTitle,
      dishName,
      dishPrice,
      dishPicture,
      dishDescription,
      dishRestaurant_id,
    });
    this.setState({ createTitle: "Creating..." });
  };

  componentDidUpdate(prevProps) {
    if (
      prevProps.createLoading !== this.props.createLoading &&
      !this.props.createLoading &&
      this.state.modal
    ) {
      this.toggle();
    }
  }

  render() {
    return (
      <div className="create-dish">
        <Form inline onSubmit={(e) => e.preventDefault()}>
          <Button
            className="pt-2 pr-4 pb-2 pl-4 mt-3 ml-auto mr-auto d-block"
            color="success"
            onClick={this.toggle.bind(this)}
          >
            <i className="fa fa-plus"></i>
            <span>Create dish</span>
          </Button>
        </Form>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle.bind(this)}
          backdrop={this.state.backdrop}
          keyboard={this.state.keyboard}
          className="add-modal"
        >
          <ModalHeader toggle={this.toggle.bind(this)}>Create Dish</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="dishTitle">Dish title</Label>
                <Input
                  type="text"
                  id="dishTitle"
                  placeholder="Dish title"
                  onChange={this.handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="dishName">Dish name</Label>
                <Input
                  type="text"
                  id="dishName"
                  placeholder="Dish name"
                  onChange={this.handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="dishPrice">Price</Label>
                <Input
                  type="number"
                  id="dishPrice"
                  step="0.01"
                  min="0"
                  onChange={this.handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="dishPicture">Picture</Label>
                <Input
                  type="text"
                  id="dishPicture"
                  onChange={this.handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="dishDescription">Description</Label>
                <Input
                  type="textarea"
                  id="dishDescription"
                  onChange={this.handleChange}
                  required
                />
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
    createDish: (dish) => dispatch(createDish(dish)),
  };
};

export default connect(null, mapDispatchToProps)(CreateDish);
