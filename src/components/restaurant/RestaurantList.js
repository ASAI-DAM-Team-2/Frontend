import React from 'react';
import {
  Container,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';

const RestaurantList = ({ restaurants }) => {
  console.log(restaurants);
  return (
    <ListGroup flush>
      {restaurants &&
        restaurants.map((restaurant) => (
          <ListGroupItem className='restaurant-item' key={restaurant.id}>
            <div className='restaurants-description'>{restaurant.name}</div>
            <div className='restaurant-buttons'>
              <Button className='btn-link' color='primary'>
                edit
              </Button>
            </div>
          </ListGroupItem>
        ))}
    </ListGroup>
  );
};

export default RestaurantList;
