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
  Spinner,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';
// import IndexHeader from '../../components/Headers/IndexHeader';
import './RestaurantsPage.scss';
import RestaurantList from '../../components/restaurant/RestaurantList';
import CreateRestaurant from '../../components/restaurant/CreateRestaurant';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../../store/actions/restaurantActions';

class RestaurantsPage extends Component {
  state = {
    modal: 'OPENED',
  };

  constructor(props) {
    super(props);
    this.createModal = React.createRef();
  }

  componentDidMount() {
    this.props.dispatch(fetchRestaurants());
  }

  componentDidUpdate(prevProps) {
    console.log('restaurantPage', prevProps);
  }

  render() {
    const {
      restaurants,
      createLoading,
      deleteLoading,
      editLoading,
    } = this.props;
    return (
      <div style={{ height: '100vh' }}>
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
                    <CreateRestaurant createLoading={createLoading} />
                  </div>
                </FormGroup>
              </div>
              <div className='restaurants-list'>
                {this.props.fetchLoading ? (
                  <div className='spinner-loading'>
                    <Spinner size='lg' color='primary' />
                  </div>
                ) : (
                  <RestaurantList
                    restaurants={restaurants}
                    deleteLoading={deleteLoading}
                    editLoading={editLoading}
                  />
                )}
              </div>
            </Card>
          </Container>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurant.restaurants,
    createLoading: state.restaurant.createLoading,
    fetchLoading: state.restaurant.fetchLoading,
    deleteLoading: state.restaurant.deleteLoading,
    editLoading: state.restaurant.editLoading,
  };
};

export default connect(mapStateToProps)(RestaurantsPage);
