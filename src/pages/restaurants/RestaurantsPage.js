import React, { Component } from 'react';
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
// import IndexHeader from '../../components/Headers/IndexHeader';
import './RestaurantsPage.scss';
import RestaurantList from '../../components/restaurant/RestaurantList';
import CreateRestaurant from '../../components/restaurant/CreateRestaurant';
import { connect } from 'react-redux';
class RestaurantsPage extends Component {
  state = {};
  render() {
    const { restaurants } = this.props;
    return (
      <React.Fragment>
        <div className='restaurants-layout'>
          <Container className='card-wrapper'>
            <Card
              id='restaurant-card'
              className='card-plain'
              style={{ width: '100%' }}
            >
              <div id='restaurants-menu' className='form-row'>
                <FormGroup className='col-md-4 col-sm-4'>
                  <Label for='inputCity'>By Company</Label>
                  <Input type='select' name='select' id='inputState'>
                    <option>Choose...</option>
                    <option>...</option>
                  </Input>
                </FormGroup>
                <FormGroup className='col-md-4 col-sm-3'>
                  <Label for='inputState'>Restaurants</Label>
                  <Input type='text' id='inputCity' />
                </FormGroup>
                <FormGroup className='action-buttons col-md-4 col-sm-5'>
                  <div className='filter-button'>
                    <Button type='submit' color='primary'>
                      Filter
                    </Button>
                  </div>
                  <div className='create-button'>
                    <CreateRestaurant />
                  </div>
                </FormGroup>
              </div>
              <div className='restaurants-list'>
                <RestaurantList restaurants={restaurants} />
              </div>
            </Card>
          </Container>
        </div>
        <div className='card restaurants-card'>
          <div>Hello World</div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurant.restaurants,
  };
};

export default connect(mapStateToProps)(RestaurantsPage);
