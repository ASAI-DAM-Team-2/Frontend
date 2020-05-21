import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";

import DishList from "../../../components/restaurant/dishes/DishList";
import {
  fetchRestaurantDishes,
  deleteRestaurantDish,
} from "../../../store/actions/dishesActions";
import { connect } from "react-redux";

import DishView from "./DishView";
import "./list.scss";

class DishesListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchRestaurantDishes(this.state.restaurant_id));
  }
  closeDish = () => {
    if (this.state.dishes !== null) {
      this.setState(() => {
        return { dish_el: null };
      });
    }
  };

  showDish(dish) {
    if (this.state.dish_el === null) {
      this.setState(() => {
        return {
          dish_el: (
            <DishView
              data={dish}
              closeDish={this.closeDish}
              dishDelivery={this.dishDelivery}
            />
          ),
        };
      });
    }
  }

  dishDelivery(restaurant_id, dish_id) {
    console.log("Dish delivery " + dish_id + " id " + restaurant_id);
  }

  state = {
    restaurant_id: 106,
    dish_el: null,
    image: "/user.jpg",
    heading: "Restaurant name",
    address: "Restaurant address",
  };
  render() {
    const { dishes, deleteLoading } = this.props;
    return (
      <React.Fragment>
        <Container fluid className="list-top">
          <Container>
            <Row>
              <Col className="list-heading-col">
                <div className="list-heading">
                  <img src={this.state.image} className="list-image" alt="" />
                  <div className="list-heading__text">{this.state.heading}</div>
                  <br />
                  <br />
                  <br />
                  <br />
                  <div className="list-heading__address">
                    {this.state.address}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container>
          <Row>
            <Col>
              <Button
                color="success"
                className="pt-2 pr-4 pb-2 pl-4 mt-3 ml-auto mr-auto d-block"
              >
                Create dish
              </Button>
            </Col>
          </Row>
          {this.state.dish_el === null ? (
            <Row>
              <Col className="text-center mt-4">
                <DishList
                  dishes={dishes}
                  deleteLoading={deleteLoading}
                  showDish={this.showDish.bind(this)}
                />
              </Col>
            </Row>
          ) : (
            <div className="list-deatil">{this.state.dish_el}</div>
          )}
        </Container>
        <div className="list-footer" />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dishes: state.dish.dishes,
    deleteLoading: state.dish.deleteLoading,
  };
};

export default connect(mapStateToProps)(DishesListPage);
