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

class RestaurantsPage extends Component {
  state = {};
  render() {
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
                <FormGroup className='col-md-6'>
                  <Label for='inputCity'>By Company</Label>
                  <Input type='select' name='select' id='inputState'>
                    <option>Choose...</option>
                    <option>...</option>
                  </Input>
                </FormGroup>
                <FormGroup className='col-md-4'>
                  <Label for='inputState'>Restaurants</Label>
                  <Input type='text' id='inputCity' />
                </FormGroup>
                <FormGroup className='filter-button col-md-2'>
                  <div className=''>
                    <Button type='submit' color='primary'>
                      Filter
                    </Button>
                  </div>
                </FormGroup>
              </div>
              <div className='restaurants-list'>
                <ListGroup flush>
                  <ListGroupItem className='restaurant-item'>
                    <div className='restaurants-description'>
                      Cras justo odio
                    </div>
                    <div className='restaurant-buttons'>
                      <Button className='btn-link' color='primary'>
                        edit
                      </Button>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem className='restaurant-item'>
                    <div className='restaurants-description'>
                      Dapibus ac facilisis in
                    </div>
                    <div className='restaurant-buttons'>
                      <Button className='btn-link' color='primary'>
                        edit
                      </Button>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem className='restaurant-item'>
                    <div className='restaurants-description'>
                      Vestibulum at eros
                    </div>
                    <div className='restaurant-buttons'>
                      <Button className='btn-link' color='primary'>
                        edit
                      </Button>
                    </div>
                  </ListGroupItem>
                </ListGroup>
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

export default RestaurantsPage;
