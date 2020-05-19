import React, { Component } from 'react';
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
} from 'reactstrap';
import './CreateRestaurant.scss';
import { connect } from 'react-redux';
import { createRestaurant } from '../../store/actions/restaurantActions';

class CreateRestaurant extends Component {
  state = {
    modal: false,
    backdrop: true,
    keyboard: true,
    restaurantName: '',
    restaurantAddress: '',
    companySelect: 'null',
  };

  toggle = () => {
    console.log('modal');
    this.setState({ modal: !this.state.modal });
  };

  changeBackdrop = (e) => {
    let value = e.target.value;
    if (value !== 'static') {
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
    const { restaurantName, restaurantAddress } = this.state;
    // console.log(this.props);
    this.props.createRestaurant({ restaurantName, restaurantAddress });
    // this.toggle();
  };

  componentDidUpdate() {
    console.log('did update');
  }

  render() {
    return (
      <div className='create-restaurant'>
        <Form inline onSubmit={(e) => e.preventDefault()}>
          <Button
            className='add-button'
            color='danger'
            onClick={this.toggle.bind(this)}
          >
            <i className='fa fa-plus'></i>
            <span>New</span>
          </Button>
        </Form>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle.bind(this)}
          backdrop={this.state.backdrop}
          keyboard={this.state.keyboard}
          className='add-modal'
        >
          <ModalHeader toggle={this.toggle.bind(this)}>
            Create Restaurant
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for='restaurantName'>Restaurant name</Label>
                <Input
                  type='text'
                  id='restaurantName'
                  placeholder='Restaurant name'
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='restaurantAddress'>Address</Label>
                <Input
                  type='text'
                  id='restaurantAddress'
                  placeholder='Restaurant address'
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='companySelect'>Associated with company</Label>
                <Input
                  type='select'
                  name='select'
                  id='companySelect'
                  onChange={this.handleChange}
                >
                  <option>Coca cola</option>
                  <option>Pepsi</option>
                  <option>Pizza Hut</option>
                  <option>Doritos s.r.o</option>
                  <option>Mamamia</option>
                </Input>
              </FormGroup>

              <Button color='primary'>Create</Button>
              <Button color='secondary' onClick={this.toggle.bind(this)}>
                Cancel
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    createRestaurant: (restaurant) => dispatch(createRestaurant(restaurant)),
  };
};

export default connect(null, mapDispatchToProps)(CreateRestaurant);
