import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";

import DishList from "../../components/restaurant/dishes/DishList";
import { connect } from "react-redux";

import Dish from "./dish";
import "./list.scss";

class DishesListPage extends Component {
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
            <Dish
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
    dish_el: null,
    image: "/user.jpg",
    heading: "Restaurant name",
    address: "Restaurant address",
    dishes: [
      {
        heading: "Dish name 1",
        price: "54.7 E",
        id: 1,
        image: "/user.jpg",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis porta vulputate. Proin feugiat ornare justo, et faucibus tortor semper ac. Donec tristique pulvinar eros ullamcorper varius. Proin nec semper ipsum. Maecenas dignissim dolor aliquet ex ultricies luctus. Fusce porttitor orci sit amet bibendum scelerisque. Donec lectus diam, condimentum ac magna nec, maximus ultricies nibh. Vestibulum ipsum eros, consequat vel urna in, pretium posuere erat. Cras aliquet a ligula id gravida. ",
      },
      {
        heading: "Dish name 2",
        price: "59.7 E",
        id: 2,
        image: "/user.jpg",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis porta vulputate. Proin feugiat ornare justo, et faucibus tortor semper ac. Donec tristique pulvinar eros ullamcorper varius. Proin nec semper ipsum. Maecenas dignissim dolor aliquet ex ultricies luctus. Fusce porttitor orci sit amet bibendum scelerisque. Donec lectus diam, condimentum ac magna nec, maximus ultricies nibh. Vestibulum ipsum eros, consequat vel urna in, pretium posuere erat. Cras aliquet a ligula id gravida. ",
      },
    ],
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
                  <img
                    src={this.state.image}
                    alt="Image"
                    className="list-image"
                  />
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
                <DishList dishes={dishes} />
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
    dishes: state.restaurant.dishes,
  };
};

export default connect(mapStateToProps)(DishesListPage);
