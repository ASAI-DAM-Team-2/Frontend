import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import DishList from "../../../components/restaurant/dishes/DishList";
import { fetchRestaurantDishes } from "../../../store/actions/dishesActions";
import { connect } from "react-redux";

import DishView from "./DishView";
import "./list.scss";

class DishesListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchRestaurantDishes(this.state.restaurant_id));
    console.log(this.props);
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

  dishDelivery(heading, id) {
    console.log("Dish delivery " + heading + " id " + id);
  }

  state = {
    restaurant_id: 106,
    dish_el: null,
    image: "/user.jpg",
    heading: "Restaurant name",
    address: "Restaurant address",
  };
  render() {
    const { dishes } = this.props;
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
          {this.state.dish_el === null ? (
            <Row>
              <Col className="text-center mt-4">
                <DishList dishes={dishes} showDish={this.showDish} />
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
  console.log(state.dish.dishes);
  return {
    dishes: state.dish.dishes,
  };
};

export default connect(mapStateToProps)(DishesListPage);
