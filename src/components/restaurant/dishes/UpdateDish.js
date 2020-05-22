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
import { updateDish } from "../../../store/actions/dishesActions";

import "./list.scss";

class CreateDish extends Component {
  state = {
    modal: false,
    backdrop: true,
    keyboard: true,
    dishTitle: this.props.dish.title,
    dishName: this.props.dish.name,
    dishPrice: this.props.dish.price,
    dishPicture: this.props.dish.picture,
    dishDescription: this.props.dish.description,
    dishRestaurant_id: 132,
    dishDish_id: this.props.dish.dish_id,
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
    const {
      dishTitle,
      dishName,
      dishPrice,
      dishPicture,
      dishDescription,
      dishRestaurant_id,
      dishDish_id,
    } = this.state;
    this.props.updateDish({
      dishTitle,
      dishName,
      dishPrice,
      dishPicture,
      dishDescription,
      dishRestaurant_id,
      dishDish_id,
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
  }

  render() {
    return (
      <div className="update-dish list-button-update">
        <Form inline onSubmit={(e) => e.preventDefault()}>
          <Button
            className="w-100"
            color="info"
            onClick={this.toggle.bind(this)}
          >
            &#9998;
          </Button>
        </Form>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle.bind(this)}
          backdrop={this.state.backdrop}
          keyboard={this.state.keyboard}
          className="add-modal"
        >
          <ModalHeader toggle={this.toggle.bind(this)}>Update Dish</ModalHeader>
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
                  value={this.state.dishTitle}
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
                  value={this.state.dishName}
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
                  value={this.state.dishPrice}
                />
              </FormGroup>
              <FormGroup>
                <Label for="dishPicture">Picture</Label>
                <Input
                  type="text"
                  id="dishPicture"
                  onChange={this.handleChange}
                  required
                  value={this.state.dishPicture}
                />
              </FormGroup>
              <FormGroup>
                <Label for="dishDescription">Description</Label>
                <Input
                  type="textarea"
                  id="dishDescription"
                  onChange={this.handleChange}
                  required
                  value={this.state.dishDescription}
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
    updateDish: (dish) => dispatch(updateDish(dish)),
  };
};

export default connect(null, mapDispatchToProps)(CreateDish);
