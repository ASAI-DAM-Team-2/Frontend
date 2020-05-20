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
    companyId: '1',
    createTitle: 'create',
  };

  toggle = () => {
    console.log('modal');
    this.setState({ modal: !this.state.modal });
    this.setState({ createTitle: 'create' });
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
    const { restaurantName, restaurantAddress, companyId } = this.state;
    // console.log(this.props);
    this.props.createRestaurant({
      restaurantName,
      restaurantAddress,
      companyId,
    });
    this.setState({ createTitle: 'creating...' });
  };

  componentDidUpdate(prevProps) {
    if (
      prevProps.createLoading !== this.props.createLoading &&
      !this.props.createLoading &&
      this.state.modal
    ) {
      this.toggle();
    }

    // console.log('did update', prevProps);
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
                <Label for='companyId'>Associated with company</Label>
                <Input
                  type='select'
                  name='select'
                  id='companyId'
                  onChange={this.handleChange}
                >
                  <option value='1'>Coca cola</option>
                  <option value='2'>Pepsi</option>
                  <option value='3'>Pizza Hut</option>
                  <option value='4'>Doritos s.r.o</option>
                  <option value='5'>Mamamia</option>
                </Input>
              </FormGroup>
              <div className='action-buttons'>
                <Button color='danger'>{this.state.createTitle}</Button>
                <Button color='secondary' onClick={this.toggle.bind(this)}>
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
    createRestaurant: (restaurant) => dispatch(createRestaurant(restaurant)),
  };
};

export default connect(null, mapDispatchToProps)(CreateRestaurant);
