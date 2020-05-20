import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  FormGroup,
  Label,
  Spinner,
  Input,
  Button,
  Card,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';
import './RestaurantList.scss';
import { connect } from 'react-redux';

import {
  deleteRestaurant,
  fetchRestaurants,
} from '../../store/actions/restaurantActions';

class RestaurantList extends Component {
  state = {
    deleteId: '',
  };
  deleteRestaurantById = (e, id) => {
    e.preventDefault();
    console.log(id);
    this.props.deleteRestaurant(id);
    this.setState({ deleteId: id });
  };
  editRestaurant = (e, id) => {
    e.preventDefault();
    console.log(id);
  };
  render() {
    const { restaurants } = this.props;

    return (
      <ListGroup flush>
        {restaurants &&
          restaurants.map((restaurant) => (
            <ListGroupItem
              className='restaurant-item'
              key={restaurant.restaurant_id}
            >
              <div className='restaurants-description'>{restaurant.name}</div>
              <div className='restaurant-buttons'>
                <form
                  className='button-form'
                  onSubmit={(e) =>
                    this.editRestaurant(e, restaurant.restaurant_id)
                  }
                >
                  <div className='edit-button'>
                    <Button className='btn-link' color='primary'>
                      edit
                    </Button>
                  </div>
                </form>
                <form
                  className='button-form'
                  onSubmit={(e) =>
                    this.deleteRestaurantById(
                      e,
                      restaurant.restaurant_id,
                      deleteRestaurant
                    )
                  }
                >
                  <div className='remove-button'>
                    {this.props.deleteLoading &&
                    this.state.deleteId === restaurant.restaurant_id ? (
                      <div className='spinner-loading'>
                        <Spinner size='sm' color='danger' />
                      </div>
                    ) : (
                      <Button className='btn-link' color='danger'>
                        delete
                      </Button>
                    )}
                  </div>
                </form>
              </div>
            </ListGroupItem>
          ))}
      </ListGroup>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteRestaurant: (id) => dispatch(deleteRestaurant(id)),
  };
};

export default connect(null, mapDispatchToProps)(RestaurantList);
